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

export const InputSchema = z.object({
  identifier: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/rds_global_cluster

export function DataAwsRdsGlobalCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsRdsGlobalCluster
      _type='aws_rds_global_cluster'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRdsGlobalCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsRdsGlobalCluster,
    idFilter,
    baseNode,
    optional,
  )
