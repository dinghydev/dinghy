import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/redshift_snapshot_schedule_association

export const InputSchema = z.object({
  cluster_identifier: resolvableValue(z.string()),
  schedule_identifier: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRedshiftSnapshotScheduleAssociation(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_snapshot_schedule_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftSnapshotScheduleAssociation = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsRedshiftSnapshotScheduleAssociation, node, id)

export const useAwsRedshiftSnapshotScheduleAssociations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsRedshiftSnapshotScheduleAssociation, node, id)
