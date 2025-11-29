import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/pinpoint_event_stream

export const InputSchema = z.object({
  application_id: resolvableValue(z.string()),
  destination_stream_arn: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsPinpointEventStream(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_pinpoint_event_stream'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsPinpointEventStream = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsPinpointEventStream, node, id)

export const useAwsPinpointEventStreams = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsPinpointEventStream, node, id)
