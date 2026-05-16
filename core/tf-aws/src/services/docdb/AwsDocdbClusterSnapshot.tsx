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

export const AwsDocdbClusterSnapshotInputSchema = TfMetaSchema.extend({
  db_cluster_identifier: resolvableValue(z.string()),
  db_cluster_snapshot_identifier: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const AwsDocdbClusterSnapshotOutputSchema = z.object({
  availability_zones: z.string().array().optional(),
  db_cluster_snapshot_arn: z.string().optional(),
  engine: z.string().optional(),
  engine_version: z.string().optional(),
  kms_key_id: z.string().optional(),
  port: z.number().optional(),
  snapshot_type: z.string().optional(),
  source_db_cluster_snapshot_arn: z.string().optional(),
  status: z.string().optional(),
  storage_encrypted: z.boolean().optional(),
  vpc_id: z.string().optional(),
})

export type AwsDocdbClusterSnapshotInputProps =
  & z.input<typeof AwsDocdbClusterSnapshotInputSchema>
  & NodeProps

export type AwsDocdbClusterSnapshotOutputProps =
  & z.output<typeof AwsDocdbClusterSnapshotOutputSchema>
  & z.output<typeof AwsDocdbClusterSnapshotInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/docdb_cluster_snapshot

export function AwsDocdbClusterSnapshot(
  props: Partial<AwsDocdbClusterSnapshotInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_docdb_cluster_snapshot'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDocdbClusterSnapshotInputSchema}
      _outputSchema={AwsDocdbClusterSnapshotOutputSchema}
      {...props}
    />
  )
}

export const useAwsDocdbClusterSnapshot = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDocdbClusterSnapshotOutputProps>(
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
  useTypedNodes<AwsDocdbClusterSnapshotOutputProps>(
    AwsDocdbClusterSnapshot,
    idFilter,
    baseNode,
    optional,
  )
