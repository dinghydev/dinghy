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

export const AwsSnapshotCreateVolumePermissionInputSchema = TfMetaSchema.extend(
  {
    account_id: resolvableValue(z.string()),
    snapshot_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  },
)

export const AwsSnapshotCreateVolumePermissionOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsSnapshotCreateVolumePermissionInputProps =
  & z.input<typeof AwsSnapshotCreateVolumePermissionInputSchema>
  & NodeProps

export type AwsSnapshotCreateVolumePermissionOutputProps =
  & z.output<typeof AwsSnapshotCreateVolumePermissionOutputSchema>
  & z.output<typeof AwsSnapshotCreateVolumePermissionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/snapshot_create_volume_permission

export function AwsSnapshotCreateVolumePermission(
  props: Partial<AwsSnapshotCreateVolumePermissionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_snapshot_create_volume_permission'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSnapshotCreateVolumePermissionInputSchema}
      _outputSchema={AwsSnapshotCreateVolumePermissionOutputSchema}
      {...props}
    />
  )
}

export const useAwsSnapshotCreateVolumePermission = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSnapshotCreateVolumePermissionOutputProps>(
    AwsSnapshotCreateVolumePermission,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSnapshotCreateVolumePermissions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSnapshotCreateVolumePermissionOutputProps>(
    AwsSnapshotCreateVolumePermission,
    idFilter,
    baseNode,
    optional,
  )
