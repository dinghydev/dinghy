import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/redshift_snapshot_schedule

export const InputSchema = z.object({
  definitions: resolvableValue(z.string().array()),
  description: resolvableValue(z.string().optional()),
  force_destroy: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  identifier: resolvableValue(z.string().optional()),
  identifier_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRedshiftSnapshotSchedule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_snapshot_schedule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftSnapshotSchedule = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRedshiftSnapshotSchedule, node, id)

export const useAwsRedshiftSnapshotSchedules = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRedshiftSnapshotSchedule, node, id)
