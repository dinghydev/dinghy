import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/docdb_cluster_snapshot

export const InputSchema = z.object({
  db_cluster_identifier: resolvableValue(z.string()),
  db_cluster_snapshot_identifier: resolvableValue(z.string()),
  snapshot_type: resolvableValue(z.string()),
  source_db_cluster_snapshot_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  availability_zones: z.string().array().optional(),
  db_cluster_snapshot_arn: z.string().optional(),
  engine: z.string().optional(),
  engine_version: z.string().optional(),
  kms_key_id: z.string().optional(),
  port: z.number().optional(),
  status: z.string().optional(),
  storage_encrypted: z.boolean().optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDocdbClusterSnapshot(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_docdb_cluster_snapshot'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDocdbClusterSnapshot = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDocdbClusterSnapshot, node, id)

export const useAwsDocdbClusterSnapshots = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDocdbClusterSnapshot, node, id)
