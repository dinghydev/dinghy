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

export const AwsRedshiftSnapshotCopyGrantInputSchema = TfMetaSchema.extend({
  snapshot_copy_grant_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsRedshiftSnapshotCopyGrantOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRedshiftSnapshotCopyGrantInputProps =
  & z.input<typeof AwsRedshiftSnapshotCopyGrantInputSchema>
  & NodeProps

export type AwsRedshiftSnapshotCopyGrantOutputProps =
  & z.output<typeof AwsRedshiftSnapshotCopyGrantOutputSchema>
  & z.output<typeof AwsRedshiftSnapshotCopyGrantInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_snapshot_copy_grant

export function AwsRedshiftSnapshotCopyGrant(
  props: Partial<AwsRedshiftSnapshotCopyGrantInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_snapshot_copy_grant'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftSnapshotCopyGrantInputSchema}
      _outputSchema={AwsRedshiftSnapshotCopyGrantOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftSnapshotCopyGrant = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftSnapshotCopyGrantOutputProps>(
    AwsRedshiftSnapshotCopyGrant,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftSnapshotCopyGrants = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftSnapshotCopyGrantOutputProps>(
    AwsRedshiftSnapshotCopyGrant,
    idFilter,
    baseNode,
    optional,
  )
