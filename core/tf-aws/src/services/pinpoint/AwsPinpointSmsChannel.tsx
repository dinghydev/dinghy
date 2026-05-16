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

export const AwsPinpointSmsChannelInputSchema = TfMetaSchema.extend({
  application_id: resolvableValue(z.string()),
  enabled: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  sender_id: resolvableValue(z.string().optional()),
  short_code: resolvableValue(z.string().optional()),
})

export const AwsPinpointSmsChannelOutputSchema = z.object({
  promotional_messages_per_second: z.number().optional(),
  transactional_messages_per_second: z.number().optional(),
})

export type AwsPinpointSmsChannelInputProps =
  & z.input<typeof AwsPinpointSmsChannelInputSchema>
  & NodeProps

export type AwsPinpointSmsChannelOutputProps =
  & z.output<typeof AwsPinpointSmsChannelOutputSchema>
  & z.output<typeof AwsPinpointSmsChannelInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_sms_channel

export function AwsPinpointSmsChannel(
  props: Partial<AwsPinpointSmsChannelInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_pinpoint_sms_channel'
      _category='resource'
      _title={_title}
      _inputSchema={AwsPinpointSmsChannelInputSchema}
      _outputSchema={AwsPinpointSmsChannelOutputSchema}
      {...props}
    />
  )
}

export const useAwsPinpointSmsChannel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsPinpointSmsChannelOutputProps>(
    AwsPinpointSmsChannel,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPinpointSmsChannels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsPinpointSmsChannelOutputProps>(
    AwsPinpointSmsChannel,
    idFilter,
    baseNode,
    optional,
  )
