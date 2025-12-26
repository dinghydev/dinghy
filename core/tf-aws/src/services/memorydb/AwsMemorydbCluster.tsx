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

export const InputSchema = z.object({
  acl_name: resolvableValue(z.string()),
  cluster_endpoint: resolvableValue(
    z.object({
      address: z.string(),
      port: z.number(),
    }).array(),
  ),
  node_type: resolvableValue(z.string()),
  auto_minor_version_upgrade: resolvableValue(z.boolean().optional()),
  data_tiering: resolvableValue(z.boolean().optional()),
  description: resolvableValue(z.string().optional()),
  engine: resolvableValue(z.string().optional()),
  engine_version: resolvableValue(z.string().optional()),
  final_snapshot_name: resolvableValue(z.string().optional()),
  kms_key_arn: resolvableValue(z.string().optional()),
  maintenance_window: resolvableValue(z.string().optional()),
  multi_region_cluster_name: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  num_replicas_per_shard: resolvableValue(z.number().optional()),
  num_shards: resolvableValue(z.number().optional()),
  parameter_group_name: resolvableValue(z.string().optional()),
  port: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  security_group_ids: resolvableValue(z.string().array().optional()),
  snapshot_arns: resolvableValue(z.string().array().optional()),
  snapshot_name: resolvableValue(z.string().optional()),
  snapshot_retention_limit: resolvableValue(z.number().optional()),
  snapshot_window: resolvableValue(z.string().optional()),
  sns_topic_arn: resolvableValue(z.string().optional()),
  subnet_group_name: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  tls_enabled: resolvableValue(z.boolean().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  engine_patch_version: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  port: z.number().optional(),
  shards: z.set(z.object({
    name: z.string(),
    nodes: z.set(z.object({
      availability_zone: z.string(),
      create_time: z.string(),
      endpoint: z.object({
        address: z.string(),
        port: z.number(),
      }).array(),
      name: z.string(),
    })),
    num_nodes: z.number(),
    slots: z.string(),
  })).optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/memorydb_cluster

export function AwsMemorydbCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_memorydb_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsMemorydbCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsMemorydbCluster, idFilter, baseNode, optional)

export const useAwsMemorydbClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsMemorydbCluster, idFilter, baseNode, optional)
