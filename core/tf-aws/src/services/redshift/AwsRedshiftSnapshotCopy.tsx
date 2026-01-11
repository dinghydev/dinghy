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

export const InputSchema = z.object({
  cluster_identifier: resolvableValue(z.string()),
  destination_region: resolvableValue(z.string()),
  manual_snapshot_retention_period: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  retention_period: resolvableValue(z.number().optional()),
  snapshot_copy_grant_name: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/redshift_snapshot_copy

export function AwsRedshiftSnapshotCopy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsRedshiftSnapshotCopy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsRedshiftSnapshotCopy,
    idFilter,
    baseNode,
    optional,
  )
