import { existsSync } from '@std/fs'
import Debug from 'debug'
import chalk from 'chalk'
import { walk } from 'jsr:@std/fs/walk'
import { upgradeToVersion } from '../commands/upgrade.ts'
import { dinghyHome } from '../shared/home.ts'
import { execa } from 'execa'
import { projectVersionRelease } from './projectVersions.ts'
import { isCi } from './gitUtils.ts'
const debug = Debug('updateCheck')

const todayYYYYMM = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  return `${year}${month}`
}

const latestVersionFile = () => `${dinghyHome}/states/latest-version.json`

export const resolveLatestVersion = (base: string) => {
  const versionFile = latestVersionFile()
  if (!existsSync(versionFile)) {
    console.warn(`Latest version file ${versionFile} does not exist`)
    return base
  }
  const versions = JSON.parse(Deno.readTextFileSync(versionFile))
  const version = versions[base]
  if (!version) {
    throw new Error(`No version found for ${base}`)
  }
  debug('resolved %s to %s', base, version)
  return version
}

const writeLatestVersion = (version: object) => {
  const versionFile = latestVersionFile()
  Deno.writeTextFileSync(versionFile, JSON.stringify(version))
  debug('wrote latest version to %s', versionFile)
}

const updateCheckFile = () =>
  `${dinghyHome}/states/update-check-${todayYYYYMM()}`

export const createUpdateCheckFile = () => {
  const file = updateCheckFile()
  Deno.writeFileSync(file, new Uint8Array())
  debug('created update check file %s', file)
}

export const cleanUpdateCheck = async () => {
  const statesDir = `${dinghyHome}/states`
  if (existsSync(statesDir)) {
    for await (const dirEntry of walk(statesDir)) {
      if (dirEntry.name.startsWith('update-check-')) {
        debug('clean up existing update check file %s exists', dirEntry.path)
        try {
          Deno.removeSync(dirEntry.path)
        } catch {
          // did fail but not sure why, maybe file was removed by other process?
          debug('failed to remove %s', dirEntry.path)
        }
      }
    }
  } else {
    Deno.mkdirSync(statesDir, { recursive: true })
  }
}

export const fetchLatestVersion = async () => {
  const url = Deno.env.get('DINGHY_UPDATE_CHECK_URL') ||
    'https://get.dinghy.dev/latest-version.json'
  const response = await fetch(
    `${url}?runner-version=${projectVersionRelease()}`,
  )
  const version = await response.json()
  debug('fetched latest version %O', version)
  return version
}

const runCommandWithUpgradedVersion = async () => {
  const result = await execa({
    stderr: 'inherit',
    stdin: 'inherit',
    stdout: 'inherit',
  })`${dinghyHome}/bin/dinghy ${Deno.args}`
  Deno.exit(result.exitCode)
}

const performUpdateCheck = async (fetch = false, autoUpgrade: boolean) => {
  debug('Dinghy Cli version', projectVersionRelease())
  debug('Deno build %s/%s', Deno.version.deno, Deno.build.target)

  if (Deno.env.get('DINGHY_UPDATE_CHECK_SKIP')) {
    debug('skip update check by DINGHY_UPDATE_CHECK_SKIP')
    return
  }

  const updateCheckFile = `${
    Deno.env.get('HOME')
  }/.dinghy/states/update-check-${todayYYYYMM()}`
  if (existsSync(updateCheckFile)) {
    debug('skip update check as file %s exists', updateCheckFile)
    return
  }

  const statesDir = `${dinghyHome}/states`
  if (!existsSync(statesDir)) {
    Deno.mkdirSync(statesDir, { recursive: true })
  }

  await cleanUpdateCheck()

  if (fetch) {
    try {
      const version = await fetchLatestVersion()
      writeLatestVersion(version)
      const latestVersion = version.latest
      if (latestVersion !== projectVersionRelease()) {
        if (autoUpgrade) {
          console.log(`Performing auto-upgrade to ${latestVersion} ...`)
          await upgradeToVersion(latestVersion)
          await runCommandWithUpgradedVersion()
        } else {
          console.log(
            `A new release of Dinghy is available: ${
              chalk.dim(projectVersionRelease())
            } → ${chalk.green(latestVersion)}`,
          )
          console.log(`Run ${chalk.yellow('dinghy upgrade')} to install it`)
        }
      }
      createUpdateCheckFile()
    } catch (error) {
      debug('error %O', error)
      console.warn('Failed to check for new Dinghy updates')
    }
  }
}

export const updateCheck = async (fetch = false) => {
  if (!Deno.build.standalone) {
    debug('skip update check as running in deno')
    return
  }
  if (isCi()) {
    debug('skip update check as running in CI')
    return
  }
  const autoUpgrade = Boolean(
    Deno.env.get('DINGHY_UPDATE_CHECK_AUTO_UPGRADE'),
  )
  if (autoUpgrade) {
    debug('auto-upgrade is enabled, check updates syncronously')
    await performUpdateCheck(fetch, autoUpgrade)
  } else {
    debug('auto-upgrade is disabled, check updates asyncronously')
    performUpdateCheck(fetch, autoUpgrade)
  }
}

// rm -f ~/.dinghy/states/update-check-*; (cd cli ; deno task run -h --debug)
