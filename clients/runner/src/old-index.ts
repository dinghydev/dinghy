import * as cli from 'jsr:@std/cli@1.0.14'
import * as fs from 'jsr:@std/fs@1.0.14'
import { execa } from 'npm:execa@9.5.2'
import { loadConfig } from '../../cli/src/utils/loadConfig.ts'
import { debug, setDebug } from './debug.ts'
import { showHelp, showVersion } from './help.ts'
import { createProject } from './create.ts'
import { devcontainerStart } from './devcontainer.ts'
import { dockerImage } from './dockerImage.ts'
const args = cli.parseArgs(Deno.args, {
  string: ['app-home'],
  boolean: ['debug', 'version'],
  default: {
    debug: false,
    version: false,
  },
  alias: {
    help: 'h',
    version: 'v',
  },
})

const HOST_KEYS = [
  '_',
  'v',
  'version',
  'debug',
  'app-home',
  'docker-repo',
  'docker-version',
]

if (args.debug) {
  setDebug('true')
}
debug('args: {0}', () => JSON.stringify(args))

showVersion(args)
showHelp(args)
await createProject(args)
await devcontainerStart(args)

const appHome = args['app-home'] || Deno.cwd()

const dockerArgs = ['run', '-it']
const awsFolder = `${Deno.env.get('HOME')}/.aws`
if (fs.existsSync(awsFolder)) {
  dockerArgs.push('-v', `${awsFolder}:/root/.aws`)
}
dockerArgs.push('-v', `${appHome}:/workspace/app`)

Object.keys(args).forEach((k) => {
  if (!HOST_KEYS.includes(k)) {
    dockerArgs.push(`--${k}`, args[k] as any)
  }
})

loadConfig().forEach((rc) => {
  dockerArgs.push('-e', `${rc[0]}=${rc[1]}`)
})

if (args.debug) {
  dockerArgs.push('-e', 'DEBUG=*')
}
dockerArgs.push(dockerImage())

dockerArgs.push(...(args._ as string[]))

debug('running: docker {0}', () => dockerArgs.join(' '))

const result = await execa('docker', dockerArgs, {
  stdio: 'inherit',
})

debug('completed docker run with exit code {0}', () => result.exitCode)

// docker run -it -v ${HOME}/.aws:/root/.aws -e AWS_PROFILE=reactiac -v $(pwd):/workspace/app public.ecr.aws/f2v6q7q7/reactiac/reactiac:latest-linux-arm64 tf gip
