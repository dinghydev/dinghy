import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsKinesisFirehoseDeliveryStream } from './AwsKinesisFirehoseDeliveryStream.tsx'

export const DataAwsKinesisFirehoseDeliveryStreamInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsKinesisFirehoseDeliveryStreamOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type DataAwsKinesisFirehoseDeliveryStreamInputProps =
  & z.input<typeof DataAwsKinesisFirehoseDeliveryStreamInputSchema>
  & NodeProps

export type DataAwsKinesisFirehoseDeliveryStreamOutputProps =
  & z.output<typeof DataAwsKinesisFirehoseDeliveryStreamOutputSchema>
  & z.output<typeof DataAwsKinesisFirehoseDeliveryStreamInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/kinesis_firehose_delivery_stream

export function DataAwsKinesisFirehoseDeliveryStream(
  props: Partial<DataAwsKinesisFirehoseDeliveryStreamInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsKinesisFirehoseDeliveryStream
      _type='aws_kinesis_firehose_delivery_stream'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsKinesisFirehoseDeliveryStreamInputSchema}
      _outputSchema={DataAwsKinesisFirehoseDeliveryStreamOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsKinesisFirehoseDeliveryStream = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsKinesisFirehoseDeliveryStreamOutputProps>(
    DataAwsKinesisFirehoseDeliveryStream,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsKinesisFirehoseDeliveryStreams = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsKinesisFirehoseDeliveryStreamOutputProps>(
    DataAwsKinesisFirehoseDeliveryStream,
    idFilter,
    baseNode,
    optional,
  )
