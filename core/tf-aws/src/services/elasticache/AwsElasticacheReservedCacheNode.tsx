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

export const AwsElasticacheReservedCacheNodeInputSchema = TfMetaSchema.extend({
  reserved_cache_nodes_offering_id: resolvableValue(z.string()),
  cache_node_count: resolvableValue(z.number().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsElasticacheReservedCacheNodeOutputSchema = z.object({
  arn: z.string().optional(),
  cache_node_type: z.string().optional(),
  duration: z.string().optional(),
  fixed_price: z.number().optional(),
  offering_type: z.string().optional(),
  product_description: z.string().optional(),
  recurring_charges: z.object({
    recurring_charge_amount: z.number(),
    recurring_charge_frequency: z.string(),
  }).array().optional(),
  start_time: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  usage_price: z.number().optional(),
})

export type AwsElasticacheReservedCacheNodeInputProps =
  & z.input<typeof AwsElasticacheReservedCacheNodeInputSchema>
  & NodeProps

export type AwsElasticacheReservedCacheNodeOutputProps =
  & z.output<typeof AwsElasticacheReservedCacheNodeOutputSchema>
  & z.output<typeof AwsElasticacheReservedCacheNodeInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/elasticache_reserved_cache_node

export function AwsElasticacheReservedCacheNode(
  props: Partial<AwsElasticacheReservedCacheNodeInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elasticache_reserved_cache_node'
      _category='resource'
      _title={_title}
      _inputSchema={AwsElasticacheReservedCacheNodeInputSchema}
      _outputSchema={AwsElasticacheReservedCacheNodeOutputSchema}
      {...props}
    />
  )
}

export const useAwsElasticacheReservedCacheNode = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsElasticacheReservedCacheNodeOutputProps>(
    AwsElasticacheReservedCacheNode,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsElasticacheReservedCacheNodes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsElasticacheReservedCacheNodeOutputProps>(
    AwsElasticacheReservedCacheNode,
    idFilter,
    baseNode,
    optional,
  )
