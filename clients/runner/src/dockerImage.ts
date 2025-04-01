import * as cli from 'jsr:@std/cli@1.0.14'
import * as fs from 'jsr:@std/fs@1.0.14'
import { execa } from 'npm:execa@9.5.2'
import { loadConfig } from '../../cli/src/utils/loadConfig.ts'
import { debug, setDebug } from './debug.ts'
import { loadAppConfig } from './loadAppConfig.ts'
import { showHelp, showVersion } from './help.ts'
import { createProject } from './create.ts'
import { devcontainerStart } from './devcontainer.ts'
const HOST_KEYS = [
  '_',
  'v',
  'version',
  'debug',
  'app-home',
  'docker-repo',
  'docker-version',
]

const dockerPlatform = `linux-${Deno.build.arch === 'aarch64' ? 'arm64' : 'amd64'}`

export const dockerImage = () => {
  const args = cli.parseArgs(Deno.args, {
    string: ['app-home', 'docker-repo', 'docker-version'],
    default: {
      'docker-repo': 'public.ecr.aws/f2v6q7q7/reactiac/reactiac',
      'docker-version': 'latest',
    },
  })

  const appConfig = loadAppConfig()
  const readConfig = (key: string) => {
    const keyPaths = key.split('-')
    let config = appConfig
    for (const k of keyPaths) {
      if (config === null || config === undefined) {
        break
      }
      config = config[k]
    }
    if (config === null || config === undefined) {
      config = Deno.env.get(key.replace(/-/g, '_').toUpperCase()) || args[key]
    }
    return config
  }

  const dockerRepo = readConfig('docker-repo')
  const dockerVersion = readConfig('docker-version')

  return `${dockerRepo}:${dockerVersion}${dockerPlatform === 'linux-amd64' ? '' : `-${dockerPlatform}`}`
}
