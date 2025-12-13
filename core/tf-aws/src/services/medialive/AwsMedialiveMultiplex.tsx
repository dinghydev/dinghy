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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/medialive_multiplex

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

export const useAwsMedialiveMultiplex = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsMedialiveMultiplex, idFilter, baseNode)

export const useAwsMedialiveMultiplexs = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsMedialiveMultiplex, idFilter, baseNode)
