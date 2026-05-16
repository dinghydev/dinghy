import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRdsGlobalCluster } from './AwsRdsGlobalCluster.tsx'

export const DataAwsRdsGlobalClusterInputSchema = TfMetaSchema.extend({
  identifier: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsRdsGlobalClusterOutputSchema = z.object({
  arn: z.string().optional(),
  database_name: z.string().optional(),
  deletion_protection: z.boolean().optional(),
  endpoint: z.string().optional(),
  engine: z.string().optional(),
  engine_lifecycle_support: z.string().optional(),
  engine_version: z.string().optional(),
  members: z.object({
    db_cluster_arn: z.string(),
    is_writer: z.boolean(),
  }).array().optional(),
  resource_id: z.string().optional(),
  storage_encrypted: z.boolean().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsRdsGlobalClusterInputProps =
  & z.input<typeof DataAwsRdsGlobalClusterInputSchema>
  & NodeProps

export type DataAwsRdsGlobalClusterOutputProps =
  & z.output<typeof DataAwsRdsGlobalClusterOutputSchema>
  & z.output<typeof DataAwsRdsGlobalClusterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/rds_global_cluster

export function DataAwsRdsGlobalCluster(
  props: Partial<DataAwsRdsGlobalClusterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsRdsGlobalCluster
      _type='aws_rds_global_cluster'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRdsGlobalClusterInputSchema}
      _outputSchema={DataAwsRdsGlobalClusterOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRdsGlobalCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsRdsGlobalClusterOutputProps>(
    DataAwsRdsGlobalCluster,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsRdsGlobalClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRdsGlobalClusterOutputProps>(
    DataAwsRdsGlobalCluster,
    idFilter,
    baseNode,
    optional,
  )
