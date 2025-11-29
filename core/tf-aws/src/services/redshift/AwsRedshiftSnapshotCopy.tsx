import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/redshift_snapshot_copy

export const InputSchema = z.object({
  cluster_identifier: resolvableValue(z.string()),
  destination_region: resolvableValue(z.string()),
  manual_snapshot_retention_period: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  retention_period: resolvableValue(z.number().optional()),
  snapshot_copy_grant_name: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRedshiftSnapshotCopy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_snapshot_copy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftSnapshotCopy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRedshiftSnapshotCopy, node, id)

export const useAwsRedshiftSnapshotCopys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRedshiftSnapshotCopy, node, id)
