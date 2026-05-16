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

export const AwsPinpointApnsVoipChannelInputSchema = TfMetaSchema.extend({
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

export const AwsPinpointApnsVoipChannelOutputSchema = z.object({})

export type AwsPinpointApnsVoipChannelInputProps =
  & z.input<typeof AwsPinpointApnsVoipChannelInputSchema>
  & NodeProps

export type AwsPinpointApnsVoipChannelOutputProps =
  & z.output<typeof AwsPinpointApnsVoipChannelOutputSchema>
  & z.output<typeof AwsPinpointApnsVoipChannelInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_voip_channel

export function AwsPinpointApnsVoipChannel(
  props: Partial<AwsPinpointApnsVoipChannelInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_pinpoint_apns_voip_channel'
      _category='resource'
      _title={_title}
      _inputSchema={AwsPinpointApnsVoipChannelInputSchema}
      _outputSchema={AwsPinpointApnsVoipChannelOutputSchema}
      {...props}
    />
  )
}

export const useAwsPinpointApnsVoipChannel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsPinpointApnsVoipChannelOutputProps>(
    AwsPinpointApnsVoipChannel,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPinpointApnsVoipChannels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsPinpointApnsVoipChannelOutputProps>(
    AwsPinpointApnsVoipChannel,
    idFilter,
    baseNode,
    optional,
  )
