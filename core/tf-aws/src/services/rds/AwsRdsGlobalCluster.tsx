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
  engine_version_actual: resolvableValue(z.string()),
  global_cluster_identifier: resolvableValue(z.string()),
  database_name: resolvableValue(z.string().optional()),
  deletion_protection: resolvableValue(z.boolean().optional()),
  engine: resolvableValue(z.string().optional()),
  engine_lifecycle_support: resolvableValue(z.string().optional()),
  engine_version: resolvableValue(z.string().optional()),
  force_destroy: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  source_db_cluster_identifier: resolvableValue(z.string().optional()),
  storage_encrypted: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  endpoint: z.string().optional(),
  global_cluster_members: z.set(z.object({
    db_cluster_arn: z.string(),
    is_writer: z.boolean(),
  })).optional(),
  global_cluster_resource_id: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_global_cluster

export function AwsRdsGlobalCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rds_global_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRdsGlobalCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsRdsGlobalCluster, idFilter, baseNode, optional)

export const useAwsRdsGlobalClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsRdsGlobalCluster, idFilter, baseNode, optional)
