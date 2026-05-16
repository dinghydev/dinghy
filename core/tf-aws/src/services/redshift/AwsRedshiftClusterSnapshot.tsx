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

export const AwsRedshiftClusterSnapshotInputSchema = TfMetaSchema.extend({
  cluster_identifier: resolvableValue(z.string()),
  snapshot_identifier: resolvableValue(z.string()),
  manual_snapshot_retention_period: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsRedshiftClusterSnapshotOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  kms_key_id: z.string().optional(),
  owner_account: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRedshiftClusterSnapshotInputProps =
  & z.input<typeof AwsRedshiftClusterSnapshotInputSchema>
  & NodeProps

export type AwsRedshiftClusterSnapshotOutputProps =
  & z.output<typeof AwsRedshiftClusterSnapshotOutputSchema>
  & z.output<typeof AwsRedshiftClusterSnapshotInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_cluster_snapshot

export function AwsRedshiftClusterSnapshot(
  props: Partial<AwsRedshiftClusterSnapshotInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_cluster_snapshot'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftClusterSnapshotInputSchema}
      _outputSchema={AwsRedshiftClusterSnapshotOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftClusterSnapshot = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftClusterSnapshotOutputProps>(
    AwsRedshiftClusterSnapshot,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftClusterSnapshots = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftClusterSnapshotOutputProps>(
    AwsRedshiftClusterSnapshot,
    idFilter,
    baseNode,
    optional,
  )
