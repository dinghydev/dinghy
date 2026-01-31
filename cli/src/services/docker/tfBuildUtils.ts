import { z } from 'zod'
import { dinghyAppConfig } from '../../utils/loadConfig.ts'
import chalk from 'chalk'
import { configGetImage } from '../../utils/dockerConfig.ts'

const TfSchema = z.object({
  vendor: z.enum(['terraform', 'opentofu']).default('terraform'),
  version: z.string().optional(),
  providers: z.record(z.string(), z.string()).optional(),
})

export const tfContainsCustomization = () =>
  Boolean(dinghyAppConfig.docker?.images?.tf)

export const tfVendorConfig = () =>
  TfSchema.parse(dinghyAppConfig.docker?.images?.tf || {})

export const customTfImage = (workingDir: string) => {
  const tfConfig = tfVendorConfig()
  if (tfConfig.providers) {
    const providersTfJsonPath =
      `${workingDir}/fs-root/terraform/providers.tf.json`
    const allProviders = JSON.parse(
      Deno.readTextFileSync(providersTfJsonPath),
    )

    Object.entries(tfConfig.providers).forEach(
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

  if (!tfConfig.version) {
    const versionsJson = JSON.parse(
      Deno.readTextFileSync(`${workingDir}/versions.json`),
    )
    tfConfig.version = versionsJson[tfConfig.vendor]
  }

  const dockerFile = `${workingDir}/Dockerfile`
  const dockerFileContent = [
    'ARG BUILD_ARCH=arm64',
    `FROM ${configGetImage('tf-base')}-linux-$BUILD_ARCH`,
    `COPY fs-root /`,
  ]

  if (tfConfig.vendor === 'terraform') {
    // https://developer.hashicorp.com/terraform/install
    dockerFileContent.push(`
      # apt list -a terraform

RUN echo 'Install terraform' \
   && curl -fsSL https://apt.releases.hashicorp.com/gpg | gpg --dearmor -o /usr/share/keyrings/hashicorp-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/hashicorp.list \
    && apt-get update \
    && apt-get -y install terraform=${tfConfig.version}${
      tfConfig.version!.includes('-') ? '' : '-1'
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
    && ./install-opentofu.sh --install-method standalone --opentofu-version ${tfConfig.version} \
    && rm -rf install-opentofu.sh \
    && ln -s /usr/local/bin/tofu /usr/bin/tf`)
  }

  dockerFileContent.push(`
RUN echo 'Install aws provider' \
     && cd /terraform \
     && tf init
    `)
  Deno.writeTextFileSync(dockerFile, dockerFileContent.join('\n'))
  Deno.writeTextFileSync(
    `${workingDir}/Dockerfile.dockerignore`,
    [
      '# Ignore everything\n**\n',
      `# Allow files and directories\n!/fs-root/**\n`,
    ].join('\n'),
  )
  console.log(`Updated ${chalk.grey(dockerFile)}`)
}
