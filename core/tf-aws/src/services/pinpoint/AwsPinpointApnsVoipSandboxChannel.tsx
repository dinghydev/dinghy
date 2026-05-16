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

export const AwsPinpointApnsVoipSandboxChannelInputSchema = TfMetaSchema.extend(
  {
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
  },
)

export const AwsPinpointApnsVoipSandboxChannelOutputSchema = z.object({})

export type AwsPinpointApnsVoipSandboxChannelInputProps =
  & z.input<typeof AwsPinpointApnsVoipSandboxChannelInputSchema>
  & NodeProps

export type AwsPinpointApnsVoipSandboxChannelOutputProps =
  & z.output<typeof AwsPinpointApnsVoipSandboxChannelOutputSchema>
  & z.output<typeof AwsPinpointApnsVoipSandboxChannelInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_voip_sandbox_channel

export function AwsPinpointApnsVoipSandboxChannel(
  props: Partial<AwsPinpointApnsVoipSandboxChannelInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_pinpoint_apns_voip_sandbox_channel'
      _category='resource'
      _title={_title}
      _inputSchema={AwsPinpointApnsVoipSandboxChannelInputSchema}
      _outputSchema={AwsPinpointApnsVoipSandboxChannelOutputSchema}
      {...props}
    />
  )
}

export const useAwsPinpointApnsVoipSandboxChannel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsPinpointApnsVoipSandboxChannelOutputProps>(
    AwsPinpointApnsVoipSandboxChannel,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPinpointApnsVoipSandboxChannels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsPinpointApnsVoipSandboxChannelOutputProps>(
    AwsPinpointApnsVoipSandboxChannel,
    idFilter,
    baseNode,
    optional,
  )
