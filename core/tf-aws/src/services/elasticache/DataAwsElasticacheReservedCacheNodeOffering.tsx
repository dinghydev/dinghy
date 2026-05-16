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

export const DataAwsElasticacheReservedCacheNodeOfferingInputSchema =
  TfMetaSchema.extend({
    cache_node_type: resolvableValue(z.string()),
    duration: resolvableValue(z.string()),
    offering_type: resolvableValue(z.string()),
    product_description: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsElasticacheReservedCacheNodeOfferingOutputSchema = z.object(
  {
    fixed_price: z.number().optional(),
    offering_id: z.string().optional(),
  },
)

export type DataAwsElasticacheReservedCacheNodeOfferingInputProps =
  & z.input<typeof DataAwsElasticacheReservedCacheNodeOfferingInputSchema>
  & NodeProps

export type DataAwsElasticacheReservedCacheNodeOfferingOutputProps =
  & z.output<typeof DataAwsElasticacheReservedCacheNodeOfferingOutputSchema>
  & z.output<typeof DataAwsElasticacheReservedCacheNodeOfferingInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/elasticache_reserved_cache_node_offering

export function DataAwsElasticacheReservedCacheNodeOffering(
  props: Partial<DataAwsElasticacheReservedCacheNodeOfferingInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elasticache_reserved_cache_node_offering'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsElasticacheReservedCacheNodeOfferingInputSchema}
      _outputSchema={DataAwsElasticacheReservedCacheNodeOfferingOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsElasticacheReservedCacheNodeOffering = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsElasticacheReservedCacheNodeOfferingOutputProps>(
    DataAwsElasticacheReservedCacheNodeOffering,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsElasticacheReservedCacheNodeOfferings = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsElasticacheReservedCacheNodeOfferingOutputProps>(
    DataAwsElasticacheReservedCacheNodeOffering,
    idFilter,
    baseNode,
    optional,
  )
