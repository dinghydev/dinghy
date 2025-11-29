import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dynamodb_kinesis_streaming_destination

export const InputSchema = z.object({
  stream_arn: resolvableValue(z.string()),
  table_name: resolvableValue(z.string()),
  approximate_creation_date_time_precision: resolvableValue(
    z.string().optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDynamodbKinesisStreamingDestination(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dynamodb_kinesis_streaming_destination'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDynamodbKinesisStreamingDestination = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsDynamodbKinesisStreamingDestination, node, id)

export const useAwsDynamodbKinesisStreamingDestinations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsDynamodbKinesisStreamingDestination, node, id)
