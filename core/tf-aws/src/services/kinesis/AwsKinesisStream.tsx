import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/kinesis_stream

export const InputSchema = z.object({
  encryption_type: resolvableValue(z.string().optional()),
  enforce_consumer_deletion: resolvableValue(z.boolean().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  max_record_size_in_kib: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  retention_period: resolvableValue(z.number().optional()),
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
})

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

export function AwsKinesisStream(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsKinesisStream = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsKinesisStream, node, id)

export const useAwsKinesisStreams = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsKinesisStream, node, id)
