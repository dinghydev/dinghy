import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/medialive_multiplex

export const InputSchema = z.object({
  availability_zones: resolvableValue(z.string().array()),
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  multiplex_settings: resolvableValue(
    z.object({
      maximum_video_buffer_delay_milliseconds: z.number().optional(),
      transport_stream_bitrate: z.number(),
      transport_stream_id: z.number(),
      transport_stream_reserved_bitrate: z.number().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  start_multiplex: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsMedialiveMultiplex(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_medialive_multiplex'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsMedialiveMultiplex = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsMedialiveMultiplex, node, id)

export const useAwsMedialiveMultiplexs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsMedialiveMultiplex, node, id)
