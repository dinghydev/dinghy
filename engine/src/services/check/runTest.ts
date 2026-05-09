import {
  cmdStreamAndCapture,
  containerAppHome,
  dinghyAppConfig,
  hostAppHome,
} from '@dinghy/cli'
import chalk from 'chalk'
import { existsSync } from '@std/fs/exists'
import { walk } from '@std/fs/walk'

export type TestCheckResult = {
  check: string
  result: { success: boolean; output: string }
}

// Skip any directory whose basename starts with '.' (catches .git, .dinghy,
// .deno-dir, .coverage, .vscode, .terraform, ...) plus the two well-known
// non-dotfile junk dirs.
const SKIP_DIRS = [/\/\.[^/]+\//, /\/node_modules\//, /\/output\//]

async function discoverTestFiles(): Promise<string[]> {
  const out: string[] = []
  for await (
    const e of walk(containerAppHome, {
      exts: ['.ts'],
      includeDirs: false,
      skip: SKIP_DIRS,
    })
  ) {
    if (e.path.endsWith('_test.ts')) out.push(e.path)
  }
  return out
}

const testToSource = (p: string) =>
  p.includes('/__tests__/')
    ? p.replace(/\/__tests__\//, '/src/').replace(/_test\.ts$/, '.ts')
    : p.replace(/_test\.ts$/, '.ts')

const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const injectCoverageFlag = (cmd: string, dir: string) =>
  cmd.includes('--coverage')
    ? cmd
    : cmd.replace(/^(deno\s+test)\b/, `$1 --coverage=${dir}`)

const hasTestsDir = () => existsSync(`${hostAppHome}/__tests__`)

async function runCoverageCheck(
  profileDir: string,
  sources: string[],
  threshold: number,
): Promise<{ success: boolean; message: string }> {
  if (sources.length === 0) {
    return {
      success: true,
      message: `coverage scope empty after filtering — gate skipped`,
    }
  }
  const includeArgs = sources.flatMap((p) => [`--include=${escapeRegex(p)}$`])
  const r = await cmdStreamAndCapture(
    ['deno', 'coverage', ...includeArgs, profileDir],
    false,
    undefined,
    false,
    { NO_COLOR: '1' },
  )
  const m = r.output.match(/All files\s*\|\s*([\d.]+)\s*\|\s*([\d.]+)/)
  if (!m) {
    return { success: false, message: 'could not parse coverage summary' }
  }
  const branchPct = Number(m[1])
  const linePct = Number(m[2])
  return linePct < threshold || branchPct < threshold
    ? {
      success: false,
      message:
        `coverage below ${threshold}% (branch=${branchPct}%, line=${linePct}%)`,
    }
    : {
      success: true,
      message:
        `coverage meets ${threshold}% (branch=${branchPct}%, line=${linePct}%)`,
    }
}

// Returns null if the test check should be silently skipped (no tests
// anywhere and no config). Otherwise returns the result to push into the
// caller's `results` array.
export async function runTestCheck(
  command: string,
): Promise<TestCheckResult | null> {
  const tests = await discoverTestFiles()
  const hasConfig = !!dinghyAppConfig.check?.test
  if (!hasConfig && tests.length === 0 && !hasTestsDir()) return null

  const threshold = dinghyAppConfig.check?.test?.coverage
  let profileDir: string | null = null
  if (typeof threshold === 'number') {
    profileDir = `${containerAppHome}/output/coverage`
    try {
      Deno.removeSync(profileDir, { recursive: true })
    } catch { /* nothing to remove */ }
    command = injectCoverageFlag(command, profileDir)
  }

  console.log(`Running test check with command: ${command}...`)
  const result = await cmdStreamAndCapture(command.split(' '), false)

  if (result.success && profileDir) {
    const excludes: string[] = dinghyAppConfig.check?.test?.coverageExcludes ??
      []
    const sources = tests
      .map(testToSource)
      .filter((p) => !excludes.some((ex) => p.includes(ex)))
    const cov = await runCoverageCheck(profileDir, sources, threshold)
    console.log(cov.success ? chalk.green(cov.message) : chalk.red(cov.message))
    if (!cov.success) result.success = false
  }

  return { check: command, result }
}
