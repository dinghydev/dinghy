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
 * Resolve an image reference to a full Docker image URI. Handles three input
 * shapes, in order:
 *
 * 1. `${VAR}` / `${VAR-default}` placeholders are substituted from `Deno.env`.
 *    Only uppercase identifiers (`[A-Z][A-Z0-9_]*`) are matched, so Terraform
 *    interpolations like `${aws_ecr_repository.x.url}` pass through untouched.
 *    Throws if a placeholder is unset and no default is given.
 * 2. If the result contains `:` it is treated as an already-qualified image
 *    reference and returned as-is.
 * 3. Otherwise the input is treated as a short name (e.g. `nginx-proxy`) and
 *    resolved by combining `DINGHY_DOCKER_BUILD_REPO` with the content-hashed
 *    tag recorded under `<name>` in `.versions.json`.
 */
export function dockerBuildImage(input: string): string {
  const substituted = input.replace(
    /\$\{([A-Z][A-Z0-9_]*)(?:-([^}]*))?\}/g,
    (_, name, def) => {
      const value = Deno.env.get(name)
      if (value !== undefined) return value
      if (def !== undefined) return def
      throw new Error(
        `env var '${name}' not set — referenced in image '${input}'.`,
      )
    },
  )
  if (substituted.includes(':')) return substituted
  const versions = loadVersions()
  const tag = versions[substituted]
  if (!tag) {
    throw new Error(
      `docker image '${substituted}' not found in ${VERSIONS_FILE} — ` +
        `known names: ${Object.keys(versions).join(', ')}`,
    )
  }
  const repo = Deno.env.get('DINGHY_DOCKER_BUILD_REPO')
  if (!repo) {
    throw new Error(
      `DINGHY_DOCKER_BUILD_REPO env var not set — ` +
        `cannot resolve full image tag for '${substituted}'.`,
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
