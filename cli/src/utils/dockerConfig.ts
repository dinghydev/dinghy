import Debug from 'debug'
import { resolveLatestVersion } from './updateCheck.ts'
import { configGet } from './loadConfig.ts'
import {
  projectVersionDrawio,
  projectVersionRelease,
  projectVersionTf,
} from './projectVersions.ts'
const debug = Debug('dockerConfig')

export const configEngineRepoPublicEcr =
  'public.ecr.aws/f2v6q7q7/reactiac/reactiac'

export const configEngineRepoDefault = 'reactiac/reactiac'

export const configGetEngineRepo = () => {
  return configGet(['reactiac', 'engine', 'repo']) || configEngineRepoDefault
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
    configGet(['reactiac', 'engine', 'version'])
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
  let image = configGet(['reactiac', 'engine', 'image'])
  if (!image) {
    const arch = Deno.build.arch === 'aarch64' ? '-linux-arm64' : ''
    image = `${configGetEngineRepo()}:${configGetEngineVersion()}${arch}`
  }
  debug('resolved engine image %s', image)
  return image
}

export const configGetTfImage = () => {
  const arch = Deno.build.arch === 'aarch64' ? '-linux-arm64' : ''
  const image = `${configGetEngineRepo()}:${projectVersionTf()}${arch}`
  debug('resolved tf image %s', image)
  return image
}

export const configGetDrawioImage = () => {
  const arch = Deno.build.arch === 'aarch64' ? '-linux-arm64' : ''
  const image = `${configGetEngineRepo()}:${projectVersionDrawio()}${arch}`
  debug('resolved drawio image %s', image)
  return image
}
