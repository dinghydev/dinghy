import { existsSync } from '@std/fs/exists'
import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '@dinghy/cli'
import {
  hostAppHome,
  isCi,
  OPTIONS_SYMBOL,
  projectRoot,
  RUN_SYMBOL,
} from '@dinghy/cli'
import { execaSync } from 'execa'
import chalk from 'chalk'
import Debug from 'debug'
import { baseVersion, commitVersion } from '../../utils/commitVersion.ts'
import { walk } from '@std/fs/walk'
import ejs from 'ejs'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import {
  dockerManifestCreate,
  dockerPush,
  isOndemandImage,
  multiArch,
} from './dockerBuildUtils.ts'
import { supportedArchs } from './dockerBuildUtils.ts'
const debug = Debug('init')

const options: CommandOptions = {
  boolean: ['push', 'multi-arch'],
  collect: ['arch'],
  string: ['source', 'repo'],
  default: {
    source: 'docker/images',
    arch: supportedArchs,
    repo: 'dinghydev/dinghy',
    'multi-arch': multiArch,
  },
  description: {},
  cmdDescription: 'Build docker images',
}

type DockerImage = {
  name: string
  folder: string
  tag: string
}

async function init(args: CommandArgs) {
  const versionsFile = `${projectRoot}/.versions.json`
  if (existsSync(versionsFile)) {
    Deno.removeSync(versionsFile)
  }

  args.sourceFolder = args.source.startsWith('/')
    ? args.source
    : `${projectRoot}/${args.source}`
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

  args.buildContext.VERSION_RELEASE = await commitVersion(hostAppHome)
  args.buildContext.VERSION_BASE = baseVersion(hostAppHome)
  args.buildContext.DOCKER_REPO = args.repo

  args.images = Deno.readDirSync(args.sourceFolder).filter((f) => f.isDirectory)
    .map(
      (f) => f.name,
    ).toArray().sort().map((folder) => {
      const name = folder.substring(folder.indexOf('-') + 1)
      return { name, folder: `${args.sourceFolder}/${folder}` }
    }) as DockerImage[]
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
  } catch {
    return false
  }
  return true
}

function dockerCommand(args: string[]) {
  console.log(`Executing: cd ${hostAppHome}; docker ${args.join(' ')}`)
  execaSync({
    stderr: 'inherit',
    stdout: 'inherit',
    cwd: hostAppHome,
  })`docker ${args}`
}

function dockerPushEnabled(args: CommandArgs) {
  return args.push || isCi()
}

function performDockerPush(args: CommandArgs, tag: string) {
  args.imageTags.push(tag)
  if (dockerPushEnabled(args)) {
    if (tag.includes('-dirty')) {
      throw new Error(`Cannot push dirty image: ${tag}`)
    }
    dockerPush(tag)
  } else {
    console.log(`Skipping: docker push ${tag}`)
  }
}

async function populateImageTag(image: DockerImage, args: CommandArgs) {
  const files: string[] = []

  for await (const dirEntry of walk(image.folder)) {
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
    let content = args.buildContext.VERSION_BASE || ''
    for (const file of files.sort()) {
      if (files.includes(`${file}.ejs`)) {
        continue
      }
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
  // const imageArch = args.buildContext.TARGETARCH === args['default-arch']
  //   ? ''
  //   : `-linux-${args.buildContext.TARGETARCH}`
  let imageVersion
  const isReleaseImage = image.name === 'release'
  if (isReleaseImage) {
    imageVersion = `${args.buildContext.VERSION_RELEASE}`
  } else {
    imageVersion = `${image.name}-${imageHash()}`
  }
  image.tag = `${args.repo}:${imageVersion}`

  args.buildContext[`DOCKER_IMAGE_${imageKey}_TAG`] = image.tag
  args.buildContext[`DOCKER_IMAGE_${imageKey}_VERSION`] = imageVersion
  args.versions[image.name] = imageVersion
  await Deno.writeTextFile(
    `${hostAppHome}/.versions.json`,
    JSON.stringify(args.versions, null, 2),
  )
  debug('Docker image tag %s generated', image.tag)
}

async function buildImage(image: DockerImage, args: CommandArgs) {
  await populateImageTag(image, args)

  if (isTagExists(image.tag)) {
    console.log(`Tag ${image.tag} already exists, skipping build`)
    args.imageTags.push(image.tag)
    return
  }
  if (isOndemandImage(image.name)) {
    console.log(
      new Date().toISOString(),
      `Skip build ondemand image ${image.tag}`,
    )
    return
  } else {
    console.log(
      new Date().toISOString(),
      `Image ${image.tag} does not exist, building...`,
    )
  }

  if (args['multi-arch']) {
    for (const arch of args.arch) {
      await buildImageWithArch(image, args, arch)
    }
    if (dockerPushEnabled(args)) {
      dockerManifestCreate(
        image.tag,
        args.arch.map((arch) => `${image.tag}-linux-${arch}`),
      )
    } else {
      await dockerCommand([
        'tag',
        `${image.tag}-linux-${
          Deno.build.arch === 'aarch64' ? 'arm64' : 'amd64'
        }`,
        image.tag,
      ])
    }
  } else {
    await buildImageWithArch(image, args)
  }
}

async function buildImageWithArch(
  image: DockerImage,
  args: CommandArgs,
  arch?: string,
) {
  const tag = arch ? `${image.tag}-linux-${arch}` : image.tag
  const buildArgs = ['buildx', 'build']
  if (arch) {
    buildArgs.push('--platform', `linux/${arch}`)
    if (
      readFileSync(`${image.folder}/Dockerfile`, 'utf-8').includes(
        'ARG BUILD_ARCH',
      )
    ) {
      buildArgs.push('--build-arg', `BUILD_ARCH=${arch}`)
    }
  }
  buildArgs.push('-t', tag, '-f', `${image.folder}/Dockerfile`, '.')
  await dockerCommand(buildArgs)
  console.log(`Tag ${image.tag} built at`, new Date().toISOString())

  performDockerPush(args, tag)
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
