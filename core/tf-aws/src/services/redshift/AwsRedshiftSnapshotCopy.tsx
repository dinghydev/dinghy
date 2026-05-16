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

export const AwsRedshiftSnapshotCopyInputSchema = TfMetaSchema.extend({
  cluster_identifier: resolvableValue(z.string()),
  destination_region: resolvableValue(z.string()),
  manual_snapshot_retention_period: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  retention_period: resolvableValue(z.number().optional()),
  snapshot_copy_grant_name: resolvableValue(z.string().optional()),
})

export const AwsRedshiftSnapshotCopyOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsRedshiftSnapshotCopyInputProps =
  & z.input<typeof AwsRedshiftSnapshotCopyInputSchema>
  & NodeProps

export type AwsRedshiftSnapshotCopyOutputProps =
  & z.output<typeof AwsRedshiftSnapshotCopyOutputSchema>
  & z.output<typeof AwsRedshiftSnapshotCopyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_snapshot_copy

export function AwsRedshiftSnapshotCopy(
  props: Partial<AwsRedshiftSnapshotCopyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_snapshot_copy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftSnapshotCopyInputSchema}
      _outputSchema={AwsRedshiftSnapshotCopyOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftSnapshotCopy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftSnapshotCopyOutputProps>(
    AwsRedshiftSnapshotCopy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftSnapshotCopys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftSnapshotCopyOutputProps>(
    AwsRedshiftSnapshotCopy,
    idFilter,
    baseNode,
    optional,
  )
