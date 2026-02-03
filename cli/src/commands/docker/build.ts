import { existsSync } from '@std/fs/exists'
import { isCi } from '../../utils/gitUtils.ts'
import { hostAppHome } from '../../shared/home.ts'
import { projectRoot } from '../../utils/projectRoot.ts'
import chalk from 'chalk'
import { baseVersion, commitVersion } from '../../utils/commitVersion.ts'
import { walk } from '@std/fs/walk'
import ejs from 'ejs'
import { readFileSync } from 'node:fs'
import {
  dockerManifestCreate,
  dockerPush,
  dockerTag,
  md5Hash,
  multiArch,
} from '../../services/docker/dockerBuildUtils.ts'
import { supportedArchs } from '../../services/docker/dockerBuildUtils.ts'
import { CmdInput } from '../../services/cli/types.ts'
import { Args } from '@std/cli/parse-args'
import Debug from 'debug'
import { cmdStream } from '../../utils/cmd.ts'
import { imageExistRemotely } from '../../services/docker/imageStatusUtil.ts'
const debug = Debug('docker:build')

export const schema: CmdInput = {
  description: 'Build docker images',
  hidden: true, // keep to internal use only for now
  options: [
    {
      name: 'source',
      description: 'Source folder to build',
      default: 'docker/images',
    },
    {
      name: 'repo',
      description: 'Repository to build the images to',
      default: 'dinghydev/dinghy',
    },
    {
      name: 'push',
      description: 'Push the built images to the repository',
      boolean: true,
    },
    {
      name: 'multi-arch',
      description: 'Build multi-arch images',
      boolean: true,
      default: multiArch,
    },
    {
      name: 'dryrun',
      description: 'Dry run the build',
      boolean: true,
    },
    {
      name: 'arch',
      description: 'Architectures to build',
      multiple: true,
      default: supportedArchs,
    },
  ],
  args: [
    {
      name: 'image',
      description: 'Image to build, if not provided, all images will be built',
      required: false,
    },
  ],
}

type DockerImage = {
  name: string
  folder: string
  tag: string
}

async function init(args: Args) {
  const versionsFile = `${projectRoot}/.versions.json`
  debug('versions file: %s', versionsFile)
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
    (acc: any, [key, value]: any) => {
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
  args.versions = { release: args.buildContext.VERSION_RELEASE }
}

async function parseVersionIntoContext(path: string, buildContext: any) {
  const versionContent = await Deno.readTextFile(path)
  const versionInfo = JSON.parse(versionContent)
  Object.entries(versionInfo).forEach(([key, value]) => {
    buildContext[`VERSION_${key.toUpperCase()}`] = value
  })
}

function dockerPushEnabled(args: Args) {
  return args.push || isCi()
}

async function performDockerPush(args: Args, tag: string) {
  if (dockerPushEnabled(args)) {
    if (tag.includes('-dirty')) {
      throw new Error(`Cannot push dirty image: ${tag}`)
    }
    await dockerPush(tag)
  } else {
    console.log(`Skipping: docker push ${tag}`)
  }
}

async function populateImageTag(image: DockerImage, args: Args) {
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
      if (file.endsWith(`.ejs`)) {
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
    return md5Hash(content)
  }

  const imageKey = image.name.toUpperCase().split('-').join('_')
  let imageVersion
  const isEngineImage = image.name === 'engine'
  if (isEngineImage) {
    imageVersion = `${image.name}-${args.buildContext.VERSION_RELEASE}`
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

async function buildImage(image: DockerImage, args: Args) {
  await populateImageTag(image, args)
  args.imageTags.push(image.tag)

  if (args.dryrun) {
    console.log(`Dry run: ${image.tag} would not built`)
    return
  }

  if (await imageExistRemotely(image.tag)) {
    console.log(`Tag ${image.tag} already exists, skipping build`)
    return
  }
  console.log(
    new Date().toISOString(),
    `Image ${image.tag} does not exist, building...`,
  )

  if (args['multi-arch']) {
    for (const arch of args.arch) {
      await buildImageWithArch(image, args, arch)
    }
    if (dockerPushEnabled(args)) {
      await dockerManifestCreate(
        image.tag,
        args.arch.map((arch: string) => `${image.tag}-linux-${arch}`),
      )
    } else {
      await dockerTag(
        `${image.tag}-linux-${
          Deno.build.arch === 'aarch64' ? 'arm64' : 'amd64'
        }`,
        image.tag,
      )
    }
  } else {
    await buildImageWithArch(image, args)
  }
}

async function buildImageWithArch(
  image: DockerImage,
  args: Args,
  arch?: string,
) {
  const tag = arch ? `${image.tag}-linux-${arch}` : image.tag
  const buildArgs = ['docker', 'buildx', 'build']
  if (arch) {
    buildArgs.push('--provenance', 'false')
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
  await cmdStream(buildArgs, true)
  console.log(`Tag ${tag} built at`, new Date().toISOString())

  await performDockerPush(args, tag)
}

export async function run(args: Args) {
  await init(args)

  for (const image of args.images) {
    await buildImage(image, args)
  }
  console.log('Image tags:')
  console.log(chalk.green(args.imageTags.join('\n')))
  console.log('versions file:', `${hostAppHome}/.versions.json`)
}
