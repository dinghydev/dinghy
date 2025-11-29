import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/elasticache_reserved_cache_node_offering

export const InputSchema = z.object({
  cache_node_type: resolvableValue(z.string()),
  duration: resolvableValue(z.string()),
  offering_type: resolvableValue(z.string()),
  product_description: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  fixed_price: z.number().optional(),
  offering_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsElasticacheReservedCacheNodeOffering(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elasticache_reserved_cache_node_offering'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsElasticacheReservedCacheNodeOffering = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    DataAwsElasticacheReservedCacheNodeOffering,
    node,
    id,
  )

export const useDataAwsElasticacheReservedCacheNodeOfferings = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    DataAwsElasticacheReservedCacheNodeOffering,
    node,
    id,
  )
