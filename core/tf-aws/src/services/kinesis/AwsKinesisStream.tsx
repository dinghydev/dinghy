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
  name: resolvableValue(z.string()),
  encryption_type: resolvableValue(z.string().optional()),
  enforce_consumer_deletion: resolvableValue(z.boolean().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  max_record_size_in_kib: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  retention_period: resolvableValue(z.number().optional()),
  shard_count: resolvableValue(z.number().optional()),
  shard_level_metrics: resolvableValue(z.string().array().optional()),
  stream_mode_details: resolvableValue(
    z.object({
      stream_mode: z.string(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
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
  id: z.string().optional(),
  name: z.string().optional(),
  shard_count: z.number().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/kinesis_stream

export function AwsKinesisStream(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kinesis_stream'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsKinesisStream = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsKinesisStream, idFilter, baseNode, optional)

export const useAwsKinesisStreams = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsKinesisStream, idFilter, baseNode, optional)
