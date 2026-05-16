import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsKinesisStream } from './AwsKinesisStream.tsx'

export const DataAwsKinesisStreamInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsKinesisStreamOutputSchema = z.object({
  arn: z.string().optional(),
  closed_shards: z.set(z.string()).optional(),
  creation_timestamp: z.number().optional(),
  encryption_type: z.string().optional(),
  id: z.string().optional(),
  kms_key_id: z.string().optional(),
  max_record_size_in_kib: z.number().optional(),
  name: z.string().optional(),
  open_shards: z.set(z.string()).optional(),
  retention_period: z.number().optional(),
  shard_level_metrics: z.set(z.string()).optional(),
  status: z.string().optional(),
  stream_mode_details: z.object({
    stream_mode: z.string(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsKinesisStreamInputProps =
  & z.input<typeof DataAwsKinesisStreamInputSchema>
  & NodeProps

export type DataAwsKinesisStreamOutputProps =
  & z.output<typeof DataAwsKinesisStreamOutputSchema>
  & z.output<typeof DataAwsKinesisStreamInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/kinesis_stream

export function DataAwsKinesisStream(
  props: Partial<DataAwsKinesisStreamInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsKinesisStream
      _type='aws_kinesis_stream'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsKinesisStreamInputSchema}
      _outputSchema={DataAwsKinesisStreamOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsKinesisStream = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsKinesisStreamOutputProps>(
    DataAwsKinesisStream,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsKinesisStreams = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsKinesisStreamOutputProps>(
    DataAwsKinesisStream,
    idFilter,
    baseNode,
    optional,
  )
