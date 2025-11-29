import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/docdb_global_cluster

export const InputSchema = z.object({
  global_cluster_identifier: resolvableValue(z.string()),
  status: resolvableValue(z.string()),
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

export const OutputSchema = z.object({
  arn: z.string().optional(),
  global_cluster_members: z.object({
    db_cluster_arn: z.string(),
    is_writer: z.boolean(),
  }).array().optional(),
  global_cluster_resource_id: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDocdbGlobalCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_docdb_global_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDocdbGlobalCluster = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDocdbGlobalCluster, node, id)

export const useAwsDocdbGlobalClusters = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDocdbGlobalCluster, node, id)
