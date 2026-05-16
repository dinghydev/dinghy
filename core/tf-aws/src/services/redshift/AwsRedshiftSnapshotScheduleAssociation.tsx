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

export const AwsRedshiftSnapshotScheduleAssociationInputSchema = TfMetaSchema
  .extend({
    cluster_identifier: resolvableValue(z.string()),
    schedule_identifier: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsRedshiftSnapshotScheduleAssociationOutputSchema = z.object({})

export type AwsRedshiftSnapshotScheduleAssociationInputProps =
  & z.input<typeof AwsRedshiftSnapshotScheduleAssociationInputSchema>
  & NodeProps

export type AwsRedshiftSnapshotScheduleAssociationOutputProps =
  & z.output<typeof AwsRedshiftSnapshotScheduleAssociationOutputSchema>
  & z.output<typeof AwsRedshiftSnapshotScheduleAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_snapshot_schedule_association

export function AwsRedshiftSnapshotScheduleAssociation(
  props: Partial<AwsRedshiftSnapshotScheduleAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_snapshot_schedule_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftSnapshotScheduleAssociationInputSchema}
      _outputSchema={AwsRedshiftSnapshotScheduleAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftSnapshotScheduleAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftSnapshotScheduleAssociationOutputProps>(
    AwsRedshiftSnapshotScheduleAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftSnapshotScheduleAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftSnapshotScheduleAssociationOutputProps>(
    AwsRedshiftSnapshotScheduleAssociation,
    idFilter,
    baseNode,
    optional,
  )
