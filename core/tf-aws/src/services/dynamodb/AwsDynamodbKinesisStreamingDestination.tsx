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

export const AwsDynamodbKinesisStreamingDestinationInputSchema = TfMetaSchema
  .extend({
    stream_arn: resolvableValue(z.string()),
    table_name: resolvableValue(z.string()),
    approximate_creation_date_time_precision: resolvableValue(
      z.string().optional(),
    ),
    region: resolvableValue(z.string().optional()),
  })

export const AwsDynamodbKinesisStreamingDestinationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsDynamodbKinesisStreamingDestinationInputProps =
  & z.input<typeof AwsDynamodbKinesisStreamingDestinationInputSchema>
  & NodeProps

export type AwsDynamodbKinesisStreamingDestinationOutputProps =
  & z.output<typeof AwsDynamodbKinesisStreamingDestinationOutputSchema>
  & z.output<typeof AwsDynamodbKinesisStreamingDestinationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dynamodb_kinesis_streaming_destination

export function AwsDynamodbKinesisStreamingDestination(
  props: Partial<AwsDynamodbKinesisStreamingDestinationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dynamodb_kinesis_streaming_destination'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDynamodbKinesisStreamingDestinationInputSchema}
      _outputSchema={AwsDynamodbKinesisStreamingDestinationOutputSchema}
      {...props}
    />
  )
}

export const useAwsDynamodbKinesisStreamingDestination = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDynamodbKinesisStreamingDestinationOutputProps>(
    AwsDynamodbKinesisStreamingDestination,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDynamodbKinesisStreamingDestinations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDynamodbKinesisStreamingDestinationOutputProps>(
    AwsDynamodbKinesisStreamingDestination,
    idFilter,
    baseNode,
    optional,
  )
