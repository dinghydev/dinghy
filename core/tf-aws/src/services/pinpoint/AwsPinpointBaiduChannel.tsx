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

export const AwsPinpointBaiduChannelInputSchema = TfMetaSchema.extend({
  api_key: resolvableValue(z.string()),
  application_id: resolvableValue(z.string()),
  secret_key: resolvableValue(z.string()),
  enabled: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsPinpointBaiduChannelOutputSchema = z.object({})

export type AwsPinpointBaiduChannelInputProps =
  & z.input<typeof AwsPinpointBaiduChannelInputSchema>
  & NodeProps

export type AwsPinpointBaiduChannelOutputProps =
  & z.output<typeof AwsPinpointBaiduChannelOutputSchema>
  & z.output<typeof AwsPinpointBaiduChannelInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_baidu_channel

export function AwsPinpointBaiduChannel(
  props: Partial<AwsPinpointBaiduChannelInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_pinpoint_baidu_channel'
      _category='resource'
      _title={_title}
      _inputSchema={AwsPinpointBaiduChannelInputSchema}
      _outputSchema={AwsPinpointBaiduChannelOutputSchema}
      {...props}
    />
  )
}

export const useAwsPinpointBaiduChannel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsPinpointBaiduChannelOutputProps>(
    AwsPinpointBaiduChannel,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPinpointBaiduChannels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsPinpointBaiduChannelOutputProps>(
    AwsPinpointBaiduChannel,
    idFilter,
    baseNode,
    optional,
  )
