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

export const AwsDocdbGlobalClusterInputSchema = TfMetaSchema.extend({
  global_cluster_identifier: resolvableValue(z.string()),
  database_name: resolvableValue(z.string().optional()),
  deletion_protection: resolvableValue(z.boolean().optional()),
  engine: resolvableValue(z.string().optional()),
  engine_version: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  source_db_cluster_identifier: resolvableValue(z.string().optional()),
  storage_encrypted: resolvableValue(z.boolean().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsDocdbGlobalClusterOutputSchema = z.object({
  arn: z.string().optional(),
  global_cluster_members: z.set(z.object({
    db_cluster_arn: z.string(),
    is_writer: z.boolean(),
  })).optional(),
  global_cluster_resource_id: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
})

export type AwsDocdbGlobalClusterInputProps =
  & z.input<typeof AwsDocdbGlobalClusterInputSchema>
  & NodeProps

export type AwsDocdbGlobalClusterOutputProps =
  & z.output<typeof AwsDocdbGlobalClusterOutputSchema>
  & z.output<typeof AwsDocdbGlobalClusterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/docdb_global_cluster

export function AwsDocdbGlobalCluster(
  props: Partial<AwsDocdbGlobalClusterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_docdb_global_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDocdbGlobalClusterInputSchema}
      _outputSchema={AwsDocdbGlobalClusterOutputSchema}
      {...props}
    />
  )
}

export const useAwsDocdbGlobalCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDocdbGlobalClusterOutputProps>(
    AwsDocdbGlobalCluster,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDocdbGlobalClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDocdbGlobalClusterOutputProps>(
    AwsDocdbGlobalCluster,
    idFilter,
    baseNode,
    optional,
  )
