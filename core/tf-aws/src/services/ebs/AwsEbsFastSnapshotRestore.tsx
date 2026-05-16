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

export const AwsEbsFastSnapshotRestoreInputSchema = TfMetaSchema.extend({
  availability_zone: resolvableValue(z.string()),
  snapshot_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsEbsFastSnapshotRestoreOutputSchema = z.object({
  id: z.string().optional(),
  state: z.string().optional(),
})

export type AwsEbsFastSnapshotRestoreInputProps =
  & z.input<typeof AwsEbsFastSnapshotRestoreInputSchema>
  & NodeProps

export type AwsEbsFastSnapshotRestoreOutputProps =
  & z.output<typeof AwsEbsFastSnapshotRestoreOutputSchema>
  & z.output<typeof AwsEbsFastSnapshotRestoreInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ebs_fast_snapshot_restore

export function AwsEbsFastSnapshotRestore(
  props: Partial<AwsEbsFastSnapshotRestoreInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ebs_fast_snapshot_restore'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEbsFastSnapshotRestoreInputSchema}
      _outputSchema={AwsEbsFastSnapshotRestoreOutputSchema}
      {...props}
    />
  )
}

export const useAwsEbsFastSnapshotRestore = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEbsFastSnapshotRestoreOutputProps>(
    AwsEbsFastSnapshotRestore,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEbsFastSnapshotRestores = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEbsFastSnapshotRestoreOutputProps>(
    AwsEbsFastSnapshotRestore,
    idFilter,
    baseNode,
    optional,
  )
