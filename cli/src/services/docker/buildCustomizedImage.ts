import Debug from 'debug'
import { configGetOriginalImage } from '../../utils/dockerConfig.ts'
import { hostAppHome } from '../../shared/home.ts'
import { dirname } from 'node:path'
import { imageExistLocally, imagePull } from './imageStatusUtil.ts'
import { cmdInherit } from '../../utils/cmd.ts'
import { existsSync } from '@std/fs/exists'
import chalk from 'chalk'
import { extractImageFile } from './extractImageFile.ts'
import { copy } from '@std/fs/copy'
const debug = Debug('buildCustomizedImage')

const customTfImage = async (
  workingDir: string,
  customization: any,
  dockerFileContent: string[],
) => {
  const tfBaseImage = configGetOriginalImage('tf-base')
  if (customization.providers) {
    const providersTfJsonPath =
      `${workingDir}/fs-root/terraform/providers.tf.json`
    const providersTfJsonDir = dirname(providersTfJsonPath)
    Deno.mkdirSync(providersTfJsonDir, { recursive: true })
    await extractImageFile(
      tfBaseImage,
      workingDir,
      '/terraform/providers.tf.json',
      'fs-root/terraform/providers.tf.json',
    )
    const allProviders = JSON.parse(
      Deno.readTextFileSync(providersTfJsonPath),
    )

    Object.entries(customization.providers).forEach(
      ([source, version]) => {
        const sourceId = source.replace(/\W/g, '')
        if (version === 'disabled') {
          delete allProviders.terraform.required_providers[sourceId]
        } else {
          allProviders.terraform
            .required_providers[sourceId] = {
              source,
              version,
            }
        }
      },
    )
    Deno.writeTextFileSync(
      providersTfJsonPath,
      JSON.stringify(allProviders, null, 2),
    )
    console.log(`Updated ${chalk.grey(providersTfJsonPath)}`)
  }

  if (!customization.version) {
    await extractImageFile(
      tfBaseImage,
      workingDir,
      '/terraform/versions.json',
      'versions.json',
    )
    const versionsJson = JSON.parse(
      Deno.readTextFileSync(`${workingDir}/versions.json`),
    )
    customization.version = versionsJson[customization.vendor]
  }

  if (customization.vendor === 'terraform') {
    // https://developer.hashicorp.com/terraform/install
    dockerFileContent.push(`
      # apt list -a terraform

RUN echo 'Install terraform' \
   && curl -fsSL https://apt.releases.hashicorp.com/gpg | gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/hashicorp.list \
    && apt-get update \
    && apt-get -y install terraform=${customization.version}${
      customization.version!.includes('-') ? '' : '-1'
    } \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*\
    && ln -s /usr/bin/terraform /usr/bin/tf`)
  } else {
    //  https://opentofu.org/docs/intro/install/deb/
    //  https://github.com/opentofu/opentofu/releases
    dockerFileContent.push(`

RUN echo 'Install opentofu' \
    && curl --proto '=https' --tlsv1.2 -fsSL https://get.opentofu.org/install-opentofu.sh -o install-opentofu.sh \
    && chmod +x install-opentofu.sh \
    && ./install-opentofu.sh --install-method standalone --opentofu-version ${customization.version} \
    && rm -rf install-opentofu.sh \
    && ln -s /usr/local/bin/tofu /usr/bin/tf`)
  }

  dockerFileContent.push(`
RUN echo 'Install aws provider' \
     && cd /terraform \
     && tf init
    `)
}

function createTempWorkingDir() {
  const workingDir = Deno.makeTempDirSync({
    dir: hostAppHome,
    prefix: '.tmp-dinghy-docker-build-',
  })
  debug('Created temp working directory %s ...', workingDir)
  return workingDir
}

async function copyOverrideFsRoot(workingDir: string, name: string) {
  const overrideFsRootDir =
    `.dinghy_file_override/docker/images/${name}/fs-root`
  const hasOverrideFsRoot = existsSync(`${hostAppHome}/${overrideFsRootDir}`)
  if (hasOverrideFsRoot) {
    const targetFsRootDir = `${workingDir}/fs-root`
    Deno.mkdirSync(targetFsRootDir, { recursive: true })
    await copy(`${hostAppHome}/${overrideFsRootDir}`, targetFsRootDir, {
      overwrite: true,
    })
    debug(
      'Copied override fs root from %s to %s',
      overrideFsRootDir,
      targetFsRootDir,
    )
  } else {
    debug(
      'No override fs root found from %s',
      overrideFsRootDir,
    )
  }
}

export async function buildCustomizedImage(
  image: string,
  baseImage: string,
  customization: any,
  buildArch?: string,
) {
  if (await imageExistLocally(image)) {
    return
  }
  if (await imagePull(image)) {
    return
  }

  if (!buildArch) {
    buildArch = Deno.build.arch === 'aarch64' ? 'arm64' : 'amd64'
  }

  const imageName = image.split(':')[1].split('-')[0]
  const workingDir = createTempWorkingDir()
  await copyOverrideFsRoot(workingDir, imageName)

  const dockerFile = `${workingDir}/Dockerfile`
  const dockerFileContent = [
    'ARG BUILD_ARCH=arm64',
    `FROM ${baseImage}-linux-$BUILD_ARCH`,
  ]

  if (existsSync(`${workingDir}/fs-root`)) {
    dockerFileContent.push(`COPY fs-root /`)
  }
  if (customization.runs) {
    customization.runs.forEach((run: string) => {
      dockerFileContent.push(`RUN ${run}`)
    })
  }
  if (customization.packages) {
    const cmdPrefix = imageName === 'site'
      ? 'RUN cd /opt/docusaurus && yarn add'
      : 'RUN cd /dinghy/engine && deno add'
    customization.packages.forEach((p: string) => {
      dockerFileContent.push(`${cmdPrefix} ${p}`)
    })
  }
  if (imageName === 'tf') {
    customTfImage(workingDir, customization, dockerFileContent)
  }
  Deno.writeTextFileSync(dockerFile, dockerFileContent.join('\n'))

  Deno.writeTextFileSync(
    `${workingDir}/Dockerfile.dockerignore`,
    [
      '# Ignore everything\n**\n',
      `# Allow files and directories\n!/fs-root/**\n`,
    ].join('\n'),
  )

  console.log(`Building customized docker image ${image}...`)
  await cmdInherit(
    `docker buildx build --provenance false --platform linux/${buildArch} --build-arg BUILD_ARCH=${buildArch} -t ${image} -f ${workingDir}/Dockerfile .`,
    true,
    workingDir,
  )
  debug('Removing temporary folder %s ...', workingDir)
  Deno.removeSync(workingDir, { recursive: true })
}
