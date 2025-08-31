import { existsSync } from '@std/fs/exists'
import type {
  Command,
  CommandArgs,
  CommandContext,
  CommandOptions,
} from '../../types.ts'
import { OPTIONS_SYMBOL, RUN_SYMBOL } from '../../types.ts'
import { execaSync } from 'execa'
import chalk from 'chalk'
import Debug from 'debug'
import { hostAppHome } from '../../utils/loadConfig.ts'
import { baseVersion, commitVersion } from '../../utils/commitVersion.ts'
import { walk } from '@std/fs/walk'
import ejs from 'ejs'
import { createHash } from 'node:crypto'
import { configGetEngineRepo } from '../../utils/dockerConfig.ts'
import { isCi } from '../../utils/index.ts'
import { projectRoot } from '../../utils/projectRoot.ts'
import { readFileSync } from 'node:fs'
import { ostring } from 'zod'
const debug = Debug('init')

const options: CommandOptions = {
  boolean: ['push', 'multi-arch'],
  collect: ['arch', 'repo'],
  string: ['source'],
  default: {
    source: 'docker/images',
    arch: ['arm64', 'amd64'],
    repo: ['diacdev/diac'],
    'multi-arch': true,
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
  // args.buildContext.TARGETARCH = args.arch ||
  //   (Deno.build.arch === 'aarch64' ? 'arm64' : 'amd64')
  args.buildContext.VERSION_RELEASE = await commitVersion(hostAppHome)
  args.buildContext.VERSION_BASE = baseVersion(hostAppHome)
  args.buildContext.DOCKER_REPO = configGetEngineRepo()

  // console.log("buildContext", args.buildContext);
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

async function dockerPush(args: CommandArgs, tag: string) {
  args.imageTags.push(tag)
  if (dockerPushEnabled(args)) {
    if (tag.includes('-dirty')) {
      throw new Error(`Cannot push dirty image: ${tag}`)
    }
    await dockerCommand([
      'push',
      tag,
    ])
    for (let i = 1; i < args.repo.length; i++) {
      const repoTag = `${args.repo[i]}:${tag.split(':')[1]}`
      await dockerCommand([
        'tag',
        tag,
        repoTag,
      ])
      await dockerCommand([
        'push',
        repoTag,
      ])
    }
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
  image.tag = `${args.repo[0]}:${imageVersion}`

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
  console.log(
    new Date().toISOString(),
    `Image ${image.tag} does not exist, building...`,
  )

  const isReleaseImage = image.name === 'release'
  const releaseTags = [args.buildContext.VERSION_BASE, 'latest']
  if (args['multi-arch']) {
    for (const arch of args.arch) {
      await buildImageWithArch(image, args, arch)
    }
    if (dockerPushEnabled(args)) {
      await createManifest(image, args, image.tag.split(':')[1])
      if (isReleaseImage) {
        for (const tag of releaseTags) {
          await createManifest(image, args, tag)
        }
      }
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
    if (isReleaseImage && dockerPushEnabled(args)) {
      for (const tag of releaseTags) {
        for (const repo of args.repo) {
          const targetTag = `${repo}:${tag}`
          await dockerCommand(['tag', image.tag, targetTag])
          await dockerPush(args, targetTag)
        }
      }
    }
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

  // const baseVersionTag = `${args.buildContext.DOCKER_REPO}:${
  //   isReleaseImage ? '' : `${image.name}-`
  // }${args.buildContext.VERSION_BASE}${imageArch}`
  // await dockerCommand(['tag', tag, baseVersionTag])
  // await dockerPush(args, baseVersionTag)

  // const latestVersionTag = `${args.buildContext.DOCKER_REPO}:${
  //   isReleaseImage ? 'latest' : image.name
  // }${imageArch}`
  // await dockerCommand(['tag', tag, latestVersionTag])
  // await dockerPush(args, latestVersionTag)

  await dockerPush(args, tag)
}

async function createManifest(
  image: DockerImage,
  args: CommandArgs,
  tag: string,
) {
  for (const repo of args.repo) {
    const targetTag = `${repo}:${tag}`
    const sourceTag = `${repo}:${image.tag.split(':')[1]}`
    await dockerCommand([
      'manifest',
      'create',
      targetTag,
      ...args.arch.map((arch) => `${sourceTag}-linux-${arch}`),
    ])
    await dockerCommand(['manifest', 'push', targetTag])
  }
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
