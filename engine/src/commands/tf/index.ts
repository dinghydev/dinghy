import type { CmdInput, OptionInput } from '@dinghy/cli'

export const schema: CmdInput = {
  description: 'Terraform/OpenTofu related operations',
}

export const globalOptions: OptionInput[] = [
  {
    name: 'tf-docker-options',
    description: 'Additional options to pass to the tf docker run command',
    multiple: true,
    env: 'DINGHY_TF_DOCKER_OPTIONS',
  },
]

export const stackArgs = {
  args: [
    {
      name: 'stack',
      description: 'Stack name',
      required: false,
    },
  ],
}
