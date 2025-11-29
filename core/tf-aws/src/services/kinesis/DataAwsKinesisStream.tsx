import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsKinesisStream } from './AwsKinesisStream.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/kinesis_stream

export const InputSchema = z.object({
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  closed_shards: z.string().array().optional(),
  creation_timestamp: z.number().optional(),
  encryption_type: z.string().optional(),
  id: z.string().optional(),
  kms_key_id: z.string().optional(),
  max_record_size_in_kib: z.number().optional(),
  name: z.string().optional(),
  open_shards: z.string().array().optional(),
  retention_period: z.number().optional(),
  shard_level_metrics: z.string().array().optional(),
  status: z.string().optional(),
  stream_mode_details: z.object({
    stream_mode: z.string(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsKinesisStream(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsKinesisStream
      _type='aws_kinesis_stream'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsKinesisStream = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsKinesisStream, node, id)

export const useDataAwsKinesisStreams = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsKinesisStream, node, id)
