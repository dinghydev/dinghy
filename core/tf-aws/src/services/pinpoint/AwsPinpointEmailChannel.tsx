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

export const AwsPinpointEmailChannelInputSchema = TfMetaSchema.extend({
  application_id: resolvableValue(z.string()),
  from_address: resolvableValue(z.string()),
  identity: resolvableValue(z.string()),
  configuration_set: resolvableValue(z.string().optional()),
  enabled: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  orchestration_sending_role_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  role_arn: resolvableValue(z.string().optional()),
})

export const AwsPinpointEmailChannelOutputSchema = z.object({
  messages_per_second: z.number().optional(),
})

export type AwsPinpointEmailChannelInputProps =
  & z.input<typeof AwsPinpointEmailChannelInputSchema>
  & NodeProps

export type AwsPinpointEmailChannelOutputProps =
  & z.output<typeof AwsPinpointEmailChannelOutputSchema>
  & z.output<typeof AwsPinpointEmailChannelInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_email_channel

export function AwsPinpointEmailChannel(
  props: Partial<AwsPinpointEmailChannelInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_pinpoint_email_channel'
      _category='resource'
      _title={_title}
      _inputSchema={AwsPinpointEmailChannelInputSchema}
      _outputSchema={AwsPinpointEmailChannelOutputSchema}
      {...props}
    />
  )
}

export const useAwsPinpointEmailChannel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsPinpointEmailChannelOutputProps>(
    AwsPinpointEmailChannel,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPinpointEmailChannels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsPinpointEmailChannelOutputProps>(
    AwsPinpointEmailChannel,
    idFilter,
    baseNode,
    optional,
  )
