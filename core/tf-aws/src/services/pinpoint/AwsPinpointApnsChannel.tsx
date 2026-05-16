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

export const AwsPinpointApnsChannelInputSchema = TfMetaSchema.extend({
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

export const AwsPinpointApnsChannelOutputSchema = z.object({})

export type AwsPinpointApnsChannelInputProps =
  & z.input<typeof AwsPinpointApnsChannelInputSchema>
  & NodeProps

export type AwsPinpointApnsChannelOutputProps =
  & z.output<typeof AwsPinpointApnsChannelOutputSchema>
  & z.output<typeof AwsPinpointApnsChannelInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_apns_channel

export function AwsPinpointApnsChannel(
  props: Partial<AwsPinpointApnsChannelInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_pinpoint_apns_channel'
      _category='resource'
      _title={_title}
      _inputSchema={AwsPinpointApnsChannelInputSchema}
      _outputSchema={AwsPinpointApnsChannelOutputSchema}
      {...props}
    />
  )
}

export const useAwsPinpointApnsChannel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsPinpointApnsChannelOutputProps>(
    AwsPinpointApnsChannel,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPinpointApnsChannels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsPinpointApnsChannelOutputProps>(
    AwsPinpointApnsChannel,
    idFilter,
    baseNode,
    optional,
  )
