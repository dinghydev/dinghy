import * as fs from 'jsr:@std/fs'
import { execaSync } from 'npm:execa'
import { importJson } from './importJson.ts'

export const baseVersion = (version: string) =>
  version.split('.').slice(0, 2).join('.')

export const commitVersion = async (projectRoot?: string): Promise<string> => {
  const envVersion = Deno.env.get('COMMIT_VERSION')
  if (envVersion) {
    return envVersion
  }

  const workingDir = projectRoot || Deno.cwd()
  console.log('workingDir', workingDir)
  const packageFile = `${workingDir}/package.json`
  if (fs.existsSync(packageFile)) {
    const packageVersion = (await importJson(packageFile)).version
    if (packageVersion.includes('-')) {
      return packageVersion
    }
    if (fs.existsSync(`${workingDir}/.git`)) {
      const gitInfo = (args: string) =>
        execaSync({
          cwd: workingDir,
          env: { TZ: 'UTC0' },
          stripFinalNewline: true,
        })`git ${args.split(' ')}`.stdout

      const revCount = () =>
        Deno.env.get('COMMIT_REV_COUNT') || gitInfo('rev-list --count HEAD')

      const commitTime = () =>
        gitInfo('log -1 --format=%cd --date=format:%Y%m%d-%H%M%S')
      const shortCommit = () => gitInfo('rev-parse --short HEAD')
      const commitDirty = () => {
        try {
          gitInfo('diff --quiet HEAD')
          return ''
        } catch (_) {
          return '-dirty'
        }
      }

      return `${baseVersion(packageVersion)}.${revCount()}-${commitTime()}-${shortCommit()}${commitDirty()}`
    }
  }
  return 'UNKNOWN'
}
