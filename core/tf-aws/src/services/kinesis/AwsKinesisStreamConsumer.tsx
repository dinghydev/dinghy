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

export const AwsKinesisStreamConsumerInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  stream_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsKinesisStreamConsumerOutputSchema = z.object({
  arn: z.string().optional(),
  creation_timestamp: z.string().optional(),
  id: z.string().optional(),
})

export type AwsKinesisStreamConsumerInputProps =
  & z.input<typeof AwsKinesisStreamConsumerInputSchema>
  & NodeProps

export type AwsKinesisStreamConsumerOutputProps =
  & z.output<typeof AwsKinesisStreamConsumerOutputSchema>
  & z.output<typeof AwsKinesisStreamConsumerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/kinesis_stream_consumer

export function AwsKinesisStreamConsumer(
  props: Partial<AwsKinesisStreamConsumerInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kinesis_stream_consumer'
      _category='resource'
      _title={_title}
      _inputSchema={AwsKinesisStreamConsumerInputSchema}
      _outputSchema={AwsKinesisStreamConsumerOutputSchema}
      {...props}
    />
  )
}

export const useAwsKinesisStreamConsumer = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsKinesisStreamConsumerOutputProps>(
    AwsKinesisStreamConsumer,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsKinesisStreamConsumers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsKinesisStreamConsumerOutputProps>(
    AwsKinesisStreamConsumer,
    idFilter,
    baseNode,
    optional,
  )
