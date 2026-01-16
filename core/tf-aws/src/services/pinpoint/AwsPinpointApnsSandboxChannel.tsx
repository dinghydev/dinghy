import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = TfMetaSchema.extend({
  application_id: resolvableValue(z.string()),
  bundle_id: resolvableValue(z.string().optional()),
  certificate: resolvableValue(z.string().optional()),
  default_authentication_method: resolvableValue(z.string().optional()),
  enabled: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  private_key: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  team_id: resolvableValue(z.string().optional()),
  token_key: resolvableValue(z.string().optional()),
  token_key_id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/pinpoint_apns_sandbox_channel

export function AwsPinpointApnsSandboxChannel(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_pinpoint_apns_sandbox_channel'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsPinpointApnsSandboxChannel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsPinpointApnsSandboxChannel,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPinpointApnsSandboxChannels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsPinpointApnsSandboxChannel,
    idFilter,
    baseNode,
    optional,
  )
