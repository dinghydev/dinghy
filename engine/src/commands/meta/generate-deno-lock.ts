import { dirname, join } from '@std/path'
import type { CmdInput } from '@dinghy/cli'
import { dinghyAppConfig, DinghyError, hostAppHome } from '@dinghy/cli'
import type { Args } from '@std/cli/parse-args'

export const schema: CmdInput = {
  description:
    'Generate deno.lock by extracting npm entries from the engine lock file.',
  args: [
    {
      name: 'lockFile',
      description: 'Target deno.lock file path to generate',
      required: true,
    },
  ],
}

export const run = async (args: Args) => {
  const lockFileRaw = args.lockFile as string
  const lockFile = lockFileRaw.startsWith('/')
    ? lockFileRaw
    : join(hostAppHome, lockFileRaw)

  const packages: string[] =
    (dinghyAppConfig as any)?.docker?.images?.engine?.packages ?? []
  if (packages.length === 0) {
    throw new DinghyError(
      'No packages found under docker.images.engine.packages in dinghy.config.yml',
      'GENERATE_DENO_LOCK_NO_PACKAGES',
    )
  }

  const engineLock = JSON.parse(await Deno.readTextFile('/deno.lock'))

  const specifiers: Record<string, string> = {}
  const npm: Record<string, unknown> = {}

  function findNpmKey(depName: string): string | undefined {
    const versionAt = depName.indexOf('@', depName.startsWith('@') ? 1 : 0)
    if (versionAt > 0) {
      return engineLock.npm[depName] !== undefined ? depName : undefined
    }
    return Object.keys(engineLock.npm).find((k) => k.startsWith(`${depName}@`))
  }

  function stripDepVersion(dep: string): string {
    const at = dep.indexOf('@', dep.startsWith('@') ? 1 : 0)
    return at > 0 ? dep.slice(0, at) : dep
  }

  function collectNpmByKey(key: string) {
    if (npm[key]) return
    const entry = engineLock.npm[key]
    if (!entry) return
    const deps: string[] = (entry as any).dependencies ?? []
    npm[key] = deps.length > 0
      ? { ...(entry as any), dependencies: deps.map(stripDepVersion) }
      : entry
    for (const dep of deps) {
      const depKey = findNpmKey(dep)
      if (depKey) collectNpmByKey(depKey)
    }
  }

  for (const pkg of packages) {
    const i = pkg.indexOf('@', 1)
    const name = pkg.slice(0, i)
    const version = pkg.slice(i + 1)
    const specifierKey = `npm:${name}@${version}`
    const resolved = engineLock.specifiers[specifierKey]
    if (!resolved) continue
    specifiers[specifierKey] = resolved
    collectNpmByKey(`${name}@${resolved}`)
  }

  const sortedNpm = Object.fromEntries(
    Object.entries(npm).sort(([a], [b]) => a.localeCompare(b)),
  )
  const workspace = {
    dependencies: packages.map((pkg) => `npm:${pkg}`),
  }

  await Deno.mkdir(dirname(lockFile), { recursive: true })
  await Deno.writeTextFile(
    lockFile,
    JSON.stringify(
      { version: '5', specifiers, npm: sortedNpm, workspace },
      null,
      2,
    ) + '\n',
  )

  console.log(`generated ${lockFile}`)
}
