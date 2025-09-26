import Debug from 'debug'
import { resolveLatestVersion } from './updateCheck.ts'
import { configGet } from './loadConfig.ts'
import { projectVersionRelease, projectVersions } from './projectVersions.ts'
const debug = Debug('dockerConfig')

export const configEngineRepoDefault = 'dinghydev/dinghy'

const useDefaultRepo = () =>
  Deno.args[0] === 'docker' && Deno.args[1] === 'clone'

export const configGetEngineRepo = () => {
  if (useDefaultRepo()) {
    debug('using default engine repo for special docker operation')
    return configEngineRepoDefault
  }
  return configGet(['dinghy', 'engine', 'repo']) || configEngineRepoDefault
}

export const configIsEngineRepoDefault = () => {
  return configGetEngineRepo() === configEngineRepoDefault
}

const cliArgsVersion = () => {
  const args = Deno.args
  const versionIndex = args.indexOf('--engine-version')
  if (versionIndex !== -1 && versionIndex + 1 < args.length) {
    const version = args[versionIndex + 1]
    debug('using engine version %s from cli args', version)
    return version
  }
  return null
}

export const configGetEngineVersion = () => {
  let version = cliArgsVersion() ||
    configGet(['dinghy', 'engine', 'version'])
  if (!version || !version.includes('-')) {
    debug('none locked engine version detected, resolving', version)
    if (version && Deno.build.standalone) {
      version = resolveLatestVersion(version)
      debug('resolved engine version %s for standalone cli', version)
    } else {
      version = projectVersionRelease()
      debug('resolved engine version %s from .versions.json', version)
    }
  }
  debug('resolved engine version as %s', version)
  return version
}

export const configGetEngineImage = () => {
  let image = configGet(['dinghy', 'engine', 'image'])
  if (!image) {
    image = `${configGetEngineRepo()}:${configGetEngineVersion()}`
  }
  debug('resolved engine image %s', image)
  return image
}

export const configGetImage = (name: string) => {
  const imageVersion = projectVersions()[name]
  if (!imageVersion) {
    throw new Error(`Image ${name} not exists`)
  }
  const image = `${configGetEngineRepo()}:${imageVersion}`
  debug('resolved %s image %s', name, image)
  return image
}
