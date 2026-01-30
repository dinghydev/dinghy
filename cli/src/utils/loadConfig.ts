import * as fs from '@std/fs'
import { walkSync } from '@std/fs'
import * as yaml from '@std/yaml'
import Debug from 'debug'
import { containerAppHome, dinghyHome, hostAppHome } from '../shared/home.ts'
const debug = Debug('loadConfig')
export const dinghyRc: Record<string, string> = {}

export const dinghyAppConfig: any = {}
export const dinghyRcFiles: string[] = [
  `${containerAppHome}/.dinghyrc.local`,
  `${containerAppHome}/.dinghyrc`,
  `${dinghyHome}rc`,
]
export const dinghyConfigFile = `${hostAppHome}/dinghy.config.yml`

export async function loadGlobalConfig() {
  debug('dinghy home %s', dinghyHome)
  debug('app home %s', containerAppHome)
  debug('exec path %s', Deno.execPath())
  for (const file of dinghyRcFiles) {
    await loadEnvFile(file)
  }

  if (!fs.existsSync(dinghyConfigFile)) {
    return
  }

  const config = yaml.parse(Deno.readTextFileSync(dinghyConfigFile))
  if (config) {
    Object.assign(dinghyAppConfig, config)
    loadEnvFromConfig()
  }
}

function loadFiles(basePaths: string[]) {
  dinghyAppConfig.files ??= {}
  for (const basePath of basePaths) {
    if (!fs.existsSync(basePath)) {
      continue
    }
    for (const dirEntry of walkSync(basePath)) {
      if (dirEntry.isFile && !dirEntry.name.startsWith('.')) {
        const filePath = dirEntry.path
        const fileText = Deno.readTextFileSync(filePath)
        debug('loading file %s', filePath)
        const fileConfig = filePath.endsWith('.yml')
          ? yaml.parse(fileText)
          : fileText
        const objectPath = filePath.substring(hostAppHome.length + 1).split(
          '/',
        )
        const fileName = objectPath.pop() as string
        objectPath.push('files')
        let current = dinghyAppConfig.files
        objectPath.map((path) => {
          current[path] ??= {}
          current = current[path]
        })
        current[fileName] = fileConfig
      }
    }
  }
}

function loadApps() {
  dinghyAppConfig.apps ??= {}
  for (const dirEntry of Deno.readDirSync(hostAppHome)) {
    if (dirEntry.name.endsWith('.tsx')) {
      dinghyAppConfig.apps[dirEntry.name.replace('.tsx', '').toLowerCase()] =
        dirEntry.name
      debug('discovered app: %s', dirEntry.name)
    }
  }
}

export const useEnvVar = (paths: string[]) => {
  const envVar = paths.map((s) => s.replace(/\W/g, '')).join('_').toUpperCase()
  debug('looking up %s=?', envVar)
  const current = Deno.env.get(envVar)
  if (current !== undefined) {
    debug('found env %s=*', envVar)
  }
  return current
}

function loadEnvFromConfig() {
  const envs = dinghyAppConfig.envs
  if (!envs) {
    return
  }
  for (const [k, v] of Object.entries(envs)) {
    if (Deno.env.get(k) === undefined) {
      const value = String(v)
      Deno.env.set(k, value)
      dinghyRc[k] = value
      debug('loaded %s=* from dinghy.config.yml', k)
    }
  }
}

async function loadEnvFile(path: string) {
  if (!(await fs.exists(path))) {
    return
  }

  for (const line of Deno.readTextFileSync(path).split(/\r?\n/)) {
    const index = line.indexOf('=')
    if (index > 0 && !line.startsWith('#')) {
      const k = line.slice(0, index).trim()
      const v = line.slice(index + 1).trim()
      if (Deno.env.get(k) === undefined) {
        Deno.env.set(k, v)
        dinghyRc[k] = v
        debug('loaded %s=* from %s', k, path)
      }
    }
  }
}

let loadedStacksConfig = false
export function requireStacksConfig() {
  if (loadedStacksConfig) {
    return
  }

  debug('loading stacks config')
  loadFiles([`${hostAppHome}/config/`])
  loadApps()
  debug('loaded stacks config')
  loadedStacksConfig = true
}
