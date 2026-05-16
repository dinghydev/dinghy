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

export const AwsMemorydbMultiRegionClusterInputSchema = TfMetaSchema.extend({
  multi_region_cluster_name_suffix: resolvableValue(z.string()),
  node_type: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  engine: resolvableValue(z.string().optional()),
  engine_version: resolvableValue(z.string().optional()),
  multi_region_parameter_group_name: resolvableValue(z.string().optional()),
  num_shards: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  tls_enabled: resolvableValue(z.boolean().optional()),
  update_strategy: resolvableValue(z.string().optional()),
})

export const AwsMemorydbMultiRegionClusterOutputSchema = z.object({
  arn: z.string().optional(),
  multi_region_cluster_name: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsMemorydbMultiRegionClusterInputProps =
  & z.input<typeof AwsMemorydbMultiRegionClusterInputSchema>
  & NodeProps

export type AwsMemorydbMultiRegionClusterOutputProps =
  & z.output<typeof AwsMemorydbMultiRegionClusterOutputSchema>
  & z.output<typeof AwsMemorydbMultiRegionClusterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/memorydb_multi_region_cluster

export function AwsMemorydbMultiRegionCluster(
  props: Partial<AwsMemorydbMultiRegionClusterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_memorydb_multi_region_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMemorydbMultiRegionClusterInputSchema}
      _outputSchema={AwsMemorydbMultiRegionClusterOutputSchema}
      {...props}
    />
  )
}

export const useAwsMemorydbMultiRegionCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMemorydbMultiRegionClusterOutputProps>(
    AwsMemorydbMultiRegionCluster,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMemorydbMultiRegionClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMemorydbMultiRegionClusterOutputProps>(
    AwsMemorydbMultiRegionCluster,
    idFilter,
    baseNode,
    optional,
  )
