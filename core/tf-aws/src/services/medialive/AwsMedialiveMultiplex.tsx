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

export const AwsMedialiveMultiplexInputSchema = TfMetaSchema.extend({
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

export const AwsMedialiveMultiplexOutputSchema = z.object({
  arn: z.string().optional(),
})

export type AwsMedialiveMultiplexInputProps =
  & z.input<typeof AwsMedialiveMultiplexInputSchema>
  & NodeProps

export type AwsMedialiveMultiplexOutputProps =
  & z.output<typeof AwsMedialiveMultiplexOutputSchema>
  & z.output<typeof AwsMedialiveMultiplexInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/medialive_multiplex

export function AwsMedialiveMultiplex(
  props: Partial<AwsMedialiveMultiplexInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_medialive_multiplex'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMedialiveMultiplexInputSchema}
      _outputSchema={AwsMedialiveMultiplexOutputSchema}
      {...props}
    />
  )
}

export const useAwsMedialiveMultiplex = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMedialiveMultiplexOutputProps>(
    AwsMedialiveMultiplex,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMedialiveMultiplexs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMedialiveMultiplexOutputProps>(
    AwsMedialiveMultiplex,
    idFilter,
    baseNode,
    optional,
  )
