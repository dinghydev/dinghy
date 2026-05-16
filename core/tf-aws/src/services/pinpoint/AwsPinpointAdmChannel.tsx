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

export const AwsPinpointAdmChannelInputSchema = TfMetaSchema.extend({
  application_id: resolvableValue(z.string()),
  client_id: resolvableValue(z.string()),
  client_secret: resolvableValue(z.string()),
  enabled: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsPinpointAdmChannelOutputSchema = z.object({})

export type AwsPinpointAdmChannelInputProps =
  & z.input<typeof AwsPinpointAdmChannelInputSchema>
  & NodeProps

export type AwsPinpointAdmChannelOutputProps =
  & z.output<typeof AwsPinpointAdmChannelOutputSchema>
  & z.output<typeof AwsPinpointAdmChannelInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_adm_channel

export function AwsPinpointAdmChannel(
  props: Partial<AwsPinpointAdmChannelInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_pinpoint_adm_channel'
      _category='resource'
      _title={_title}
      _inputSchema={AwsPinpointAdmChannelInputSchema}
      _outputSchema={AwsPinpointAdmChannelOutputSchema}
      {...props}
    />
  )
}

export const useAwsPinpointAdmChannel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsPinpointAdmChannelOutputProps>(
    AwsPinpointAdmChannel,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPinpointAdmChannels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsPinpointAdmChannelOutputProps>(
    AwsPinpointAdmChannel,
    idFilter,
    baseNode,
    optional,
  )
