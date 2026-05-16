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

export const AwsRedshiftSnapshotScheduleInputSchema = TfMetaSchema.extend({
  definitions: resolvableValue(z.string().array()),
  description: resolvableValue(z.string().optional()),
  force_destroy: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  identifier: resolvableValue(z.string().optional()),
  identifier_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsRedshiftSnapshotScheduleOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRedshiftSnapshotScheduleInputProps =
  & z.input<typeof AwsRedshiftSnapshotScheduleInputSchema>
  & NodeProps

export type AwsRedshiftSnapshotScheduleOutputProps =
  & z.output<typeof AwsRedshiftSnapshotScheduleOutputSchema>
  & z.output<typeof AwsRedshiftSnapshotScheduleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_snapshot_schedule

export function AwsRedshiftSnapshotSchedule(
  props: Partial<AwsRedshiftSnapshotScheduleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_snapshot_schedule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftSnapshotScheduleInputSchema}
      _outputSchema={AwsRedshiftSnapshotScheduleOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftSnapshotSchedule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftSnapshotScheduleOutputProps>(
    AwsRedshiftSnapshotSchedule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftSnapshotSchedules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftSnapshotScheduleOutputProps>(
    AwsRedshiftSnapshotSchedule,
    idFilter,
    baseNode,
    optional,
  )
