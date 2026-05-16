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

export const AwsQuicksightRoleCustomPermissionInputSchema = TfMetaSchema.extend(
  {
    custom_permissions_name: resolvableValue(z.string()),
    role: resolvableValue(z.string()),
    aws_account_id: resolvableValue(z.string().optional()),
    namespace: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  },
)

export const AwsQuicksightRoleCustomPermissionOutputSchema = z.object({})

export type AwsQuicksightRoleCustomPermissionInputProps =
  & z.input<typeof AwsQuicksightRoleCustomPermissionInputSchema>
  & NodeProps

export type AwsQuicksightRoleCustomPermissionOutputProps =
  & z.output<typeof AwsQuicksightRoleCustomPermissionOutputSchema>
  & z.output<typeof AwsQuicksightRoleCustomPermissionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/quicksight_role_custom_permission

export function AwsQuicksightRoleCustomPermission(
  props: Partial<AwsQuicksightRoleCustomPermissionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_role_custom_permission'
      _category='resource'
      _title={_title}
      _inputSchema={AwsQuicksightRoleCustomPermissionInputSchema}
      _outputSchema={AwsQuicksightRoleCustomPermissionOutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightRoleCustomPermission = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsQuicksightRoleCustomPermissionOutputProps>(
    AwsQuicksightRoleCustomPermission,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsQuicksightRoleCustomPermissions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsQuicksightRoleCustomPermissionOutputProps>(
    AwsQuicksightRoleCustomPermission,
    idFilter,
    baseNode,
    optional,
  )
