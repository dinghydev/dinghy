import { existsSync } from '@std/fs'
import Debug from 'debug'
import { runtimeVersion } from './runtimeVersion.ts'
import chalk from 'chalk'
import { walk } from 'jsr:@std/fs/walk'
const debug = Debug('checkVersion')

const todayYYYYMMDD = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}${month}${day}`
}

export const writeLatestVersion = (version: object) => {
  const versionFile = `${Deno.env.get('HOME')}/.reactiac/states/latest-version.json`
  Deno.writeTextFileSync(versionFile, JSON.stringify(version))
  debug('wrote latest version to %s', versionFile)
}

export const fetchLatestVersion = async () => {
  const url =
    Deno.env.get('REACTIAC_VERSION_CHECK_URL') ||
    'https://play.reactiac.dev/download/latest/latest-version.json'
  const response = await fetch(
    `${url}?runner-version=${runtimeVersion.runner.latest}`,
  )
  const version = await response.json()
  return version
}

export const checkVersion = async (fetch = false) => {
  if (Deno.env.get('REACTIAC_VERSION_CHECK_SKIP')) {
    debug('skip version check by REACTIAC_VERSION_CHECK_SKIP')
    return
  }

  const versionCheckFile = `${Deno.env.get('HOME')}/.reactiac/states/version-check-${todayYYYYMMDD()}`
  if (existsSync(versionCheckFile)) {
    debug('skip version check as file %s exists', versionCheckFile)
    return
  }

  const statesDir = `${Deno.env.get('HOME')}/.reactiac/states`
  if (!existsSync(statesDir)) {
    Deno.mkdirSync(statesDir)
  }

  for await (const dirEntry of walk(statesDir)) {
    if (dirEntry.name.startsWith('version-check-')) {
      debug('clean up existing version check file %s exists', dirEntry.path)
      Deno.removeSync(dirEntry.path)
    }
  }

  Deno.writeFileSync(versionCheckFile, new Uint8Array())
  debug('created version check file %s', versionCheckFile)

  if (fetch) {
    const version = await fetchLatestVersion()
    writeLatestVersion(version)
    if (version.runner.latest !== runtimeVersion.runner.latest) {
      console.log(
        `${chalk.yellow('Newer version of ReactIAC Runner is available')} [${version.runner.latest}] - ${chalk.green('Upgrade recommended')}  `,
      )
    }
  }
}
