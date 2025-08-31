import { existsSync } from 'jsr:@std/fs'
import { projectRoot } from './projectRoot.ts'
import Debug from 'debug'
import { commitVersion } from './commitVersion.ts'
const debug = Debug('runCommand')

const versions: any = {}

function lazyLoad(): Record<string, string> {
  if (!versions['release']) {
    const versionFile = `${projectRoot}/.versions.json`
    if (existsSync(versionFile)) {
      const loadedVersions = JSON.parse(
        Deno.readTextFileSync(versionFile).trim(),
      )
      Object.entries(loadedVersions).forEach(([key, value]) => {
        versions[key] = value
      })
    } else {
      debug('Version file %s not found, using commit version', versionFile)
      return { release: commitVersion(projectRoot) }
    }
  }
  return versions
}

export const projectVersionTf = () => lazyLoad().tf
export const projectVersionDrawio = () => lazyLoad().drawio
export const projectVersionRelease = () => lazyLoad().release
export const projectVersionReleaseBase = () =>
  projectVersionRelease().split('.').slice(0, 2).join('.')

export const versionDetails = () => {
  const versionInfo: string[] = []
  const cliVersion = Deno.env.get('DIAC_CLI_VERSION')
  if (cliVersion) {
    versionInfo.push(`@diac/engine/${projectVersionRelease()}`)
    versionInfo.push(`@diac/cli/${cliVersion}`)
  } else {
    versionInfo.push(`@diac/cli/${projectVersionRelease()}`)
  }
  versionInfo.push(
    `deno/${Deno.version.deno}-${Deno.build.os}-${Deno.build.arch}`,
  )
  return versionInfo.join(' ')
}
