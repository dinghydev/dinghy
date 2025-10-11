import { existsSync } from '@std/fs/exists'
import { dirname, resolve } from 'jsr:@std/path'
import {
  appHomeMount,
  containerAppHome,
  dinghyRc,
  hostAppHome,
  isInsideContainer,
} from './loadConfig.ts'
import { streamCmd } from './cmd.ts'
import { mkdirSync } from 'node:fs'
import Debug from 'debug'
import { deepMerge } from '../shared/deepMerge.ts'
import process from 'node:process'
const debug = Debug('dockerUtils')

const HOST_USER_HOME = Deno.env.get('HOST_USER_HOME') ||
  Deno.env.get('HOME')

type Mount = {
  source: string
  target: string
  check?: string
}

type Env = Record<string, any>

const HOME_MOUNTS = [
  '.aws',
  '.ssh',
]

const DOCKER_EXCLUDED_ENVS = [
  'PATH',
  'HOME',
  'TMPDIR',
  'SHELL',
  'NODE_OPTIONS',
  'SSH_AUTH_SOCK',
]

const GLOBALE_MOUNTS = [
  '/var/run/docker.sock',
]

export const getDockerHostPath = (path: string) =>
  path.startsWith('/') ? path : resolve(hostAppHome, path)

export function getDockerEnvs(appEnvs: Env = {}) {
  const envs = deepMerge({}, Deno.env.toObject())
  deepMerge(envs, dinghyRc)
  const whiteListEnvs = Object.entries(envs).filter(([key]) =>
    !DOCKER_EXCLUDED_ENVS.includes(key)
  ).reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
  }, {})
  return {
    ...whiteListEnvs,
    APP_HOME: appHomeMount,
    HOST_APP_HOME: hostAppHome,
    HOST_USER_HOME,
    ...appEnvs,
  }
}

export function getDockerMounts(
  appMounts: Mount[],
): Mount[] {
  const mounts: Mount[] = []
  if (!appMounts.find((m) => m.source.startsWith(hostAppHome))) {
    mounts.push({
      source: hostAppHome,
      target: hostAppHome,
    }, {
      source: hostAppHome,
      target: appHomeMount,
    })
  }

  mounts.push(...appMounts.map((mount) => {
    const source = mount.source.startsWith('/')
      ? mount.source
      : resolve(hostAppHome, mount.source)
    const target = mount.target.startsWith('/')
      ? mount.target
      : resolve(containerAppHome, mount.target)
    return {
      ...mount,
      source,
      target,
    }
  }))

  mounts.push(...HOME_MOUNTS.map((file) => ({
    source: `${HOST_USER_HOME}/${file}`,
    target: `/root/${file}`,
    check: `${isInsideContainer ? '/root' : HOST_USER_HOME}/${file}`,
  })))
  mounts.push(...GLOBALE_MOUNTS.map((file) => ({
    source: file,
    target: file,
  })))

  return mounts.filter((mount) =>
    existsSync(mount.check || mount.source) || existsSync(mount.source)
  )
}

const prepareDockerAuthConfig = () => {
  const dockerAuthConfig = Deno.env.get('DOCKER_AUTH_CONFIG')
  if (dockerAuthConfig) {
    const dockerAuthConfigFile = '/root/.docker/config.json'
    if (!existsSync(dockerAuthConfigFile)) {
      const dockerAuthConfigFileDir = dirname(dockerAuthConfigFile)
      if (!existsSync(dockerAuthConfigFileDir)) {
        mkdirSync(dockerAuthConfigFileDir, { recursive: true })
      }
      Deno.writeTextFileSync(dockerAuthConfigFile, dockerAuthConfig)
      debug('Docker auth config file created', dockerAuthConfigFile)
    }
  }
}

export const runDockerCmd = async (
  workingDir: string,
  envs: Env,
  appMounts: Mount[],
  args: string[],
  dockerImage: string,
  errorOnFailure = true,
  dockerArgs = [] as string[],
) => {
  prepareDockerAuthConfig()
  if (errorOnFailure) {
    if (process.stdout.isTTY) {
      dockerArgs.push('-i')
    } else {
      debug('not a tty')
    }
  }
  const cwd = existsSync(workingDir) ? workingDir : containerAppHome
  return await streamCmd(
    [
      'docker',
      'run',
      '--rm',
      '-t',
      ...dockerArgs,
      ...Object.entries(getDockerEnvs(envs)).flatMap((
        [k, v],
      ) => ['-e', `'${k}=${(v as string).replace(/'/g, "'\"'\"'")}'`]),
      ...getDockerMounts(appMounts).flatMap((
        mount,
      ) => ['--volume', `${mount.source}:${mount.target}`]),
      '--workdir',
      workingDir,
      dockerImage,
      ...args,
    ],
    cwd,
    errorOnFailure,
  )
}
