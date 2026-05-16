import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsKinesisStreamConsumer } from './AwsKinesisStreamConsumer.tsx'

export const DataAwsKinesisStreamConsumerInputSchema = TfMetaSchema.extend({
  stream_arn: resolvableValue(z.string()),
  arn: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const DataAwsKinesisStreamConsumerOutputSchema = z.object({
  creation_timestamp: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
})

export type DataAwsKinesisStreamConsumerInputProps =
  & z.input<typeof DataAwsKinesisStreamConsumerInputSchema>
  & NodeProps

export type DataAwsKinesisStreamConsumerOutputProps =
  & z.output<typeof DataAwsKinesisStreamConsumerOutputSchema>
  & z.output<typeof DataAwsKinesisStreamConsumerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/kinesis_stream_consumer

export function DataAwsKinesisStreamConsumer(
  props: Partial<DataAwsKinesisStreamConsumerInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsKinesisStreamConsumer
      _type='aws_kinesis_stream_consumer'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsKinesisStreamConsumerInputSchema}
      _outputSchema={DataAwsKinesisStreamConsumerOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsKinesisStreamConsumer = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsKinesisStreamConsumerOutputProps>(
    DataAwsKinesisStreamConsumer,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsKinesisStreamConsumers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsKinesisStreamConsumerOutputProps>(
    DataAwsKinesisStreamConsumer,
    idFilter,
    baseNode,
    optional,
  )
