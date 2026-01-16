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
  snapshot_type: resolvableValue(z.string()),
  source_db_cluster_snapshot_identifier: resolvableValue(z.string()),
  target_db_cluster_snapshot_identifier: resolvableValue(z.string()),
  copy_tags: resolvableValue(z.boolean().optional()),
  destination_region: resolvableValue(z.string().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  presigned_url: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  shared_accounts: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  allocated_storage: z.number().optional(),
  db_cluster_snapshot_arn: z.string().optional(),
  engine: z.string().optional(),
  engine_version: z.string().optional(),
  id: z.string().optional(),
  kms_key_id: z.string().optional(),
  license_model: z.string().optional(),
  shared_accounts: z.set(z.string()).optional(),
  source_db_cluster_snapshot_identifier: z.string().optional(),
  storage_encrypted: z.boolean().optional(),
  storage_type: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/rds_cluster_snapshot_copy

export function AwsRdsClusterSnapshotCopy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rds_cluster_snapshot_copy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRdsClusterSnapshotCopy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsRdsClusterSnapshotCopy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRdsClusterSnapshotCopys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsRdsClusterSnapshotCopy,
    idFilter,
    baseNode,
    optional,
  )
