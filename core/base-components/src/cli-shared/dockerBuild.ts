import { existsSync } from '@std/fs'
import { hostAppHome } from './home.ts'

const VERSIONS_FILE = `${hostAppHome}/.versions.json`
let _versions: Record<string, string> | undefined

function loadVersions(): Record<string, string> {
  if (_versions) return _versions
  if (!existsSync(VERSIONS_FILE)) {
    throw new Error(
      `.versions.json not found at ${VERSIONS_FILE} — ` +
        `run \`dinghy docker build\` to generate it.`,
    )
  }
  _versions = JSON.parse(Deno.readTextFileSync(VERSIONS_FILE))
  return _versions!
}

/**
 * Resolve a short image name (e.g. `nginx-proxy`) to a full Docker image
 * reference by combining:
 *   - `DINGHY_DOCKER_BUILD_REPO` (env var) — the repo prefix
 *   - the content-hashed tag recorded under `<name>` in `.versions.json`
 *
 * Throws if the versions file is missing, the name isn't listed there, or the
 * env var is unset.
 */
export function dockerBuildImage(name: string): string {
  const versions = loadVersions()
  const tag = versions[name]
  if (!tag) {
    throw new Error(
      `docker image '${name}' not found in ${VERSIONS_FILE} — ` +
        `known names: ${Object.keys(versions).join(', ')}`,
    )
  }
  const repo = Deno.env.get('DINGHY_DOCKER_BUILD_REPO')
  if (!repo) {
    throw new Error(
      `DINGHY_DOCKER_BUILD_REPO env var not set — ` +
        `cannot resolve full image tag for '${name}'.`,
    )
  }
  return `${repo}:${tag}`
}

/**
 * Return the ECS task-definition CPU architecture implied by Dinghy's docker
 * build config.
 *
 * `DINGHY_DOCKER_SUPPORTED_ARCHS` is a comma-separated list of Docker arch
 * names (e.g. `arm64,amd64`) or the literal `false` to disable multi-arch —
 * see `@dinghy/cli/src/services/docker/dockerBuildUtils.ts` for the producer
 * side. When the env var is set we take the FIRST arch in the list, matching
 * how dinghy picks the default platform for single-arch operations. When the
 * env var is unset or `false`, we fall back to the current host's arch via
 * `Deno.build.arch` so local dev without an explicit env var still works.
 * Result uses the ECS naming convention (`ARM64` / `X86_64`), which differs
 * from Docker's `arm64` / `amd64`.
 */
export function dockerBuildArch(): 'ARM64' | 'X86_64' {
  const raw = Deno.env.get('DINGHY_DOCKER_SUPPORTED_ARCHS')
  const first = (raw && raw !== 'false' ? raw.split(',')[0] : Deno.build.arch)
    .trim()
    .toLowerCase()
  switch (first) {
    case 'arm64':
    case 'aarch64':
      return 'ARM64'
    case 'amd64':
    case 'x86_64':
    case 'x64':
      return 'X86_64'
  }
  throw new Error(
    `Unsupported docker arch '${first}' — expected one of arm64, amd64 ` +
      `(from DINGHY_DOCKER_SUPPORTED_ARCHS or host Deno.build.arch).`,
  )
}
