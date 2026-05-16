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

export const AwsPinpointEventStreamInputSchema = TfMetaSchema.extend({
  application_id: resolvableValue(z.string()),
  destination_stream_arn: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsPinpointEventStreamOutputSchema = z.object({})

export type AwsPinpointEventStreamInputProps =
  & z.input<typeof AwsPinpointEventStreamInputSchema>
  & NodeProps

export type AwsPinpointEventStreamOutputProps =
  & z.output<typeof AwsPinpointEventStreamOutputSchema>
  & z.output<typeof AwsPinpointEventStreamInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/pinpoint_event_stream

export function AwsPinpointEventStream(
  props: Partial<AwsPinpointEventStreamInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_pinpoint_event_stream'
      _category='resource'
      _title={_title}
      _inputSchema={AwsPinpointEventStreamInputSchema}
      _outputSchema={AwsPinpointEventStreamOutputSchema}
      {...props}
    />
  )
}

export const useAwsPinpointEventStream = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsPinpointEventStreamOutputProps>(
    AwsPinpointEventStream,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsPinpointEventStreams = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsPinpointEventStreamOutputProps>(
    AwsPinpointEventStream,
    idFilter,
    baseNode,
    optional,
  )
