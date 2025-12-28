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
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/docdb_cluster_snapshot

export function AwsDocdbClusterSnapshot(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsDocdbClusterSnapshot = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsDocdbClusterSnapshot,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDocdbClusterSnapshots = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsDocdbClusterSnapshot,
    idFilter,
    baseNode,
    optional,
  )
