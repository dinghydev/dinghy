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

export const AwsPinpointGcmChannelInputSchema = TfMetaSchema.extend({
  application_id: resolvableValue(z.string()),
  api_key: resolvableValue(z.string().optional()),
  default_authentication_method: resolvableValue(z.string().optional()),
  enabled: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  service_json: resolvableValue(z.string().optional()),
})

export const AwsPinpointGcmChannelOutputSchema = z.object({})

export type AwsPinpointGcmChannelInputProps =
  & z.input<typeof AwsPinpointGcmChannelInputSchema>
  & NodeProps

export type AwsPinpointGcmChannelOutputProps =
  & z.output<typeof AwsPinpointGcmChannelOutputSchema>
  & z.output<typeof AwsPinpointGcmChannelInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_gcm_channel

export function AwsPinpointGcmChannel(
  props: Partial<AwsPinpointGcmChannelInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_pinpoint_gcm_channel'
      _category='resource'
      _title={_title}
      _inputSchema={AwsPinpointGcmChannelInputSchema}
      _outputSchema={AwsPinpointGcmChannelOutputSchema}
      {...props}
    />
  )
}

export const useAwsPinpointGcmChannel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsPinpointGcmChannelOutputProps>(
    AwsPinpointGcmChannel,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPinpointGcmChannels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsPinpointGcmChannelOutputProps>(
    AwsPinpointGcmChannel,
    idFilter,
    baseNode,
    optional,
  )
