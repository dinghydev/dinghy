import { existsSync, walkSync } from '@std/fs'
import { dirname, relative, resolve } from 'jsr:@std/path'
import { dinghyAppConfig, dinghyRc } from './loadConfig.ts'
import {
  appHomeMount,
  containerAppHome,
  hostAppHome,
  isInsideContainer,
} from '../shared/home.ts'
import { cmdStream, cmdStreamAndCapture } from './cmd.ts'
import { mkdirSync } from 'node:fs'
import Debug from 'debug'
import { deepMerge } from '../shared/deepMerge.ts'
import process from 'node:process'
const debug = Debug('dockerUtils')

const HOST_USER_HOME = Deno.env.get('HOST_USER_HOME') ||
  Deno.env.get('HOME')

export const HOST_USER_HOME_PATH = '/host_user_home'

type Mount = {
  source: string
  target: string
  check?: string
  skipCheck?: boolean
}

type Env = Record<string, any>

const HOME_MOUNTS = [
  '.aws',
  '.ssh',
  '.gitconfig',
]

const DOCKER_EXCLUDED_ENVS = [
  'HOME',
  'PWD',
  'PATH',
  'SHELL',
  'SSH_AUTH_SOCK',
  'TMPDIR',
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
  ).reduce((acc: any, [key, value]: any) => {
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

export const createOutputMount = (imageName: string, output: string): Mount => {
  let outputDir = output
  if (!outputDir.startsWith('/')) {
    outputDir = `${hostAppHome}/${outputDir}`
  }
  if (!existsSync(outputDir)) {
    Deno.mkdirSync(outputDir, { recursive: true })
  }
  debug('Resolved slide output dir %s', outputDir)
  return {
    source: outputDir,
    target: `/workspace/.dinghy/${imageName}/output`,
  }
}

export function getDockerMounts(
  imageName: string,
  appMounts: Mount[],
  isDevContainer = false,
): Mount[] {
  const mounts: Mount[] = []
  if (!appMounts.some((m) => m.source === hostAppHome)) {
    mounts.push({
      source: hostAppHome,
      target: appHomeMount,
    })
    if (hostAppHome.startsWith(Deno.cwd())) {
      mounts.push({
        source: Deno.cwd(),
        target: Deno.cwd(),
      })
    } else {
      mounts.push({
        source: hostAppHome,
        target: hostAppHome,
      })
    }
  }
  if (dinghyAppConfig.docker?.images?.[imageName]?.volumns) {
    appMounts.push(...dinghyAppConfig.docker?.images?.[imageName]?.volumns)
  }

  if (imageName === 'slide') {
    for (const entry of Deno.readDirSync(hostAppHome)) {
      if (
        entry.isDirectory &&
        !['output', 'node_modules', '.git'].includes(entry.name)
      ) {
        mounts.push({
          source: `${hostAppHome}/${entry.name}`,
          target: `/workspace/.dinghy/${imageName}/${entry.name}`,
        })
      }
    }
  }

  mounts.push(...appMounts.map((mount) => {
    const source = mount.source.startsWith('/')
      ? mount.source
      : resolve(hostAppHome, mount.source)
    let target = mount.target || mount.source
    if (!target.startsWith('/')) {
      target = resolve(containerAppHome, target)
    }
    return {
      ...mount,
      source,
      target,
    }
  }))

  mounts.push({
    source: HOST_USER_HOME!,
    target: HOST_USER_HOME_PATH,
  })

  mounts.push(...HOME_MOUNTS.map((file) => ({
    source: `${HOST_USER_HOME}/${file}`,
    target: `/root/${file}`,
    check: `${isInsideContainer ? '/root' : HOST_USER_HOME}/${file}`,
  })))
  mounts.push(...GLOBALE_MOUNTS.map((file) => ({
    source: file,
    target: file,
  })))

  //github actions temp directory
  mounts.push({
    source: '/home/runner/work/_temp',
    target: '/home/runner/work/_temp',
  })

  const result = mounts.filter((mount) =>
    mount.skipCheck ||
    existsSync(mount.check || mount.source) || existsSync(mount.source)
  )

  const overrideMounts = (folder: string) => {
    const folderPath = resolve(hostAppHome, folder)
    if (existsSync(folderPath)) {
      for (const entry of walkSync(folderPath, { includeDirs: false })) {
        result.push({
          source: entry.path,
          target: resolve(
            '/workspace',
            folder,
            relative(folderPath, entry.path),
          ),
        })
        debug('Mounting override file: %s', entry.path)
      }
    }
  }
  overrideMounts('.dinghy')
  if (isDevContainer) {
    overrideMounts('.vscode')
  }

  return result
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
  captureOutput = false,
  errorOnFailure = true,
  dockerArgs = [] as string[],
) => {
  prepareDockerAuthConfig()
  if (errorOnFailure) {
    if (process.stdin.isTTY && !Deno.env.get('CI')) {
      dockerArgs.push('-i')
    } else {
      debug('not a tty')
    }
  }
  if (args.includes('bash')) {
    envs.PROMPT_DIRTRIM = '5'
  }
  const cwd = existsSync(workingDir) ? workingDir : containerAppHome
  const imageName = dockerImage.split(':')[1].split('-')[0]!
  return await (captureOutput ? cmdStreamAndCapture : cmdStream)(
    [
      'docker',
      'run',
      '--rm',
      '-t',
      ...Object.entries(getDockerEnvs(envs)).flatMap((
        [k, v],
      ) => ['-e', `${k}=${v}`]),
      ...getDockerMounts(imageName, appMounts).flatMap((
        mount,
      ) => ['--volume', `${mount.source}:${mount.target}`]),
      '--workdir',
      workingDir,
      ...dockerArgs,
      dockerImage,
      ...args,
    ],
    errorOnFailure,
    cwd,
  )
}
