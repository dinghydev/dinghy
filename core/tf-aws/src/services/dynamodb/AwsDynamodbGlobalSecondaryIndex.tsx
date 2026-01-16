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

export const InputSchema = TfMetaSchema.extend({
  index_name: resolvableValue(z.string()),
  table_name: resolvableValue(z.string()),
  key_schema: resolvableValue(
    z.object({
      attribute_name: z.string(),
      attribute_type: z.string(),
      key_type: z.string(),
    }).array().optional(),
  ),
  on_demand_throughput: resolvableValue(
    z.object({
      max_read_request_units: z.number().optional(),
      max_write_request_units: z.number().optional(),
    }).array().optional(),
  ),
  projection: resolvableValue(
    z.object({
      non_key_attributes: z.string().array().optional(),
      projection_type: z.string(),
    }).array().optional(),
  ),
  provisioned_throughput: resolvableValue(
    z.object({
      read_capacity_units: z.number().optional(),
      write_capacity_units: z.number().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  warm_throughput: resolvableValue(
    z.object({
      read_units_per_second: z.number(),
      write_units_per_second: z.number(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
})

export const ImportSchema = z.object({
  index_name: resolvableValue(z.string()),
  table_name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dynamodb_global_secondary_index

export function AwsDynamodbGlobalSecondaryIndex(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dynamodb_global_secondary_index'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsDynamodbGlobalSecondaryIndex = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsDynamodbGlobalSecondaryIndex,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDynamodbGlobalSecondaryIndexs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsDynamodbGlobalSecondaryIndex,
    idFilter,
    baseNode,
    optional,
  )
