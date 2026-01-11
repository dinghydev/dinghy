import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMemorydbCluster } from './AwsMemorydbCluster.tsx'

export const InputSchema = z.object({
  cluster_endpoint: resolvableValue(
    z.object({
      address: z.string(),
      port: z.number(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  acl_name: z.string().optional(),
  arn: z.string().optional(),
  auto_minor_version_upgrade: z.boolean().optional(),
  data_tiering: z.boolean().optional(),
  description: z.string().optional(),
  engine: z.string().optional(),
  engine_patch_version: z.string().optional(),
  engine_version: z.string().optional(),
  final_snapshot_name: z.string().optional(),
  id: z.string().optional(),
  kms_key_arn: z.string().optional(),
  maintenance_window: z.string().optional(),
  name: z.string().optional(),
  node_type: z.string().optional(),
  num_replicas_per_shard: z.number().optional(),
  num_shards: z.number().optional(),
  parameter_group_name: z.string().optional(),
  port: z.number().optional(),
  security_group_ids: z.set(z.string()).optional(),
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
  snapshot_retention_limit: z.number().optional(),
  snapshot_window: z.string().optional(),
  sns_topic_arn: z.string().optional(),
  subnet_group_name: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  tls_enabled: z.boolean().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/memorydb_cluster

export function DataAwsMemorydbCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsMemorydbCluster
      _type='aws_memorydb_cluster'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMemorydbCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsMemorydbCluster,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsMemorydbClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsMemorydbCluster,
    idFilter,
    baseNode,
    optional,
  )
