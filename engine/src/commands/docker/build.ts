import { existsSync } from '@std/fs/exists'
import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '../../../../cli/src/types.ts'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '../../../../cli/src/types.ts'
import { execaSync } from 'execa'
import chalk from 'chalk'
import Debug from 'debug'
import { hostAppHome } from '../../utils/loadConfig.ts'
import { baseVersion, commitVersion } from '../../utils/commitVersion.ts'
import { walk } from '@std/fs/walk'
import ejs from 'ejs'
import { createHash } from 'node:crypto'
import { configGetDockerRepo } from '../../utils/dockerConfig.ts'
import { isCi } from '../../utils/index.ts'
const debug = Debug('init')

const options: CommandOptions = {
  boolean: ['push'],
  string: ['source', 'arch', 'default-arch'],
  default: {
    source: 'docker/images',
    'default-arch': 'amd64',
  },
  description: {},
  cmdDescription: 'Build docker images',
}

async function init(args: CommandArgs) {
  args.sourceFolder = args.source.startsWith('/')
    ? args.source
    : `${hostAppHome}/${args.source}`
  if (!existsSync(args.sourceFolder)) {
    throw new Error(`Source folder ${args.sourceFolder} not exist`)
  }
  args.buildContext = Object.entries(Deno.env.toObject()).reduce(
    (acc, [key, value]) => {
      acc[key] = value
      return acc
    },
    {},
  )
  args.buildContext.TARGETARCH = args.arch ||
    (Deno.build.arch === 'aarch64' ? 'arm64' : 'amd64')
  args.buildContext.VERSION_RELEASE = await commitVersion(hostAppHome)
  args.buildContext.VERSION_BASE = baseVersion(hostAppHome)
  args.buildContext.DOCKER_REPO = configGetDockerRepo()

  // console.log("buildContext", args.buildContext);
  args.images = Deno.readDirSync(args.sourceFolder).filter((f) => f.isDirectory)
    .map(
      (f) => f.name,
    ).toArray().sort().map((folder) => {
      const name = folder.substring(folder.indexOf('-') + 1)
      return { name, folder }
    })
  args.imageTags = []
  args.versions = {}
}

async function parseVersionIntoContext(path: string, buildContext: any) {
  const versionContent = await Deno.readTextFile(path)
  const versionInfo = JSON.parse(versionContent)
  Object.entries(versionInfo).forEach(([key, value]) => {
    buildContext[`VERSION_${key.toUpperCase()}`] = value
  })
}

function isTagExists(tag: string) {
  const args = ['manifest', 'inspect', tag]
  try {
    execaSync({
      stdio: 'ignore',
      cwd: hostAppHome,
    })`docker ${args}`
  } catch (e) {
    return false
  }
  return true
}

async function dockerCommand(args: string[]) {
  console.log(`Executing: docker ${args.join(' ')}`)
  execaSync({
    stderr: 'inherit',
    stdout: 'inherit',
    cwd: hostAppHome,
  })`docker ${args}`
}

async function dockerPush(args: CommandArgs, tag: string) {
  args.imageTags.push(tag)
  if (args.push || isCi()) {
    if (tag.includes('-dirty')) {
      throw new Error(`Cannot push dirty image: ${tag}`)
    }
    await dockerCommand([
      'push',
      tag,
    ])
  } else {
    console.log(`Skipping: docker push ${tag}`)
  }
}

async function buildImage(image: any, args: CommandArgs) {
  const imageFolder = `${args.sourceFolder}/${image.folder}`
  const files: string[] = []

  for await (const dirEntry of walk(imageFolder)) {
    if (dirEntry.isFile) {
      debug('discovered build file %s %s', image.name, dirEntry.path)
      files.push(dirEntry.path)
      if (dirEntry.name === 'versions.json') {
        await parseVersionIntoContext(dirEntry.path, args.buildContext)
      }
    }
  }

  for (const file of files) {
    if (file.endsWith('.ejs')) {
      const outputFile = file.replace('.ejs', '')
      debug('rendering %s to %s', file, outputFile)
      const content = await Deno.readTextFile(file)
      const template = ejs.compile(content)
      const result = template(args.buildContext)
      await Deno.writeTextFile(outputFile, result)
      if (!files.includes(outputFile)) {
        files.push(outputFile)
      }
    }
  }

  const imageHash = () => {
    let content = args.buildContext.VERSION_BASE
    for (const file of files.sort()) {
      const fileContent = Deno.readTextFileSync(file).trim()
      content += fileContent
      if (file.endsWith('Dockerfile.dockerignore')) {
        fileContent.split('\n').map((line) => {
          if (line.startsWith('!/') && !line.endsWith('*')) {
            const includedFile = `${hostAppHome}/${line.substring(2)}`
            const includedFileContent = Deno.readTextFileSync(includedFile)
              .trim()
            content += includedFileContent
          }
        })
      }
    }
    return createHash('md5')
      .update(content)
      .digest('hex')
  }

  const imageKey = image.name.toUpperCase().split('-').join('_')
  const imageArch = args.buildContext.TARGETARCH === args['default-arch']
    ? ''
    : `-linux-${args.buildContext.TARGETARCH}`
  let imageVersion
  const isReleaseImage = image.name === 'release'
  if (isReleaseImage) {
    imageVersion = `${args.buildContext.VERSION_RELEASE}`
  } else {
    imageVersion = `${image.name}-${imageHash()}`
  }
  const tag = `${args.buildContext.DOCKER_REPO}:${imageVersion}${imageArch}`
  args.buildContext[`DOCKER_IMAGE_${imageKey}_TAG`] = tag
  args.buildContext[`DOCKER_IMAGE_${imageKey}_VERSION`] = imageVersion
  args.versions[image.name] = imageVersion
  await Deno.writeTextFile(
    `${hostAppHome}/.versions.json`,
    JSON.stringify(args.versions, null, 2),
  )
  if (isTagExists(tag)) {
    console.log(`Tag ${tag} already exists, skipping build`)
    args.imageTags.push(tag)
    return
  }
  console.log(
    `Tag ${tag} does not exist, building...`,
    new Date().toISOString(),
  )
  await dockerCommand([
    'buildx',
    'build',
    '--platform',
    `linux/${args.buildContext.TARGETARCH}`,
    '-t',
    tag,
    '-f',
    `${imageFolder}/Dockerfile`,
    '.',
  ])
  console.log(`Tag ${tag} built at`, new Date().toISOString())

  const baseVersionTag = `${args.buildContext.DOCKER_REPO}:${
    isReleaseImage ? '' : `${image.name}-`
  }${args.buildContext.VERSION_BASE}${imageArch}`
  await dockerCommand(['tag', tag, baseVersionTag])
  await dockerPush(args, baseVersionTag)

  const latestVersionTag = `${args.buildContext.DOCKER_REPO}:${
    isReleaseImage ? 'latest' : image.name
  }${imageArch}`
  await dockerCommand(['tag', tag, latestVersionTag])
  await dockerPush(args, latestVersionTag)

  await dockerPush(args, tag)
}

async function run(_context: CommandContext, args: CommandArgs) {
  await init(args)

  for (const image of args.images) {
    await buildImage(image, args)
  }
  console.log('Image tags:')
  console.log(chalk.green(args.imageTags.join('\n')))
  console.log('versions file:', `${hostAppHome}/.versions.json`)
}

export default {
  [OPTIONS_SYMBOL]: options,
  [RUN_SYMBOL]: run,
} as Command
