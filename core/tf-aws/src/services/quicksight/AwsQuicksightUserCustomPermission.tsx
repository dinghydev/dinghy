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

export const AwsQuicksightUserCustomPermissionInputSchema = TfMetaSchema.extend(
  {
    custom_permissions_name: resolvableValue(z.string()),
    user_name: resolvableValue(z.string()),
    aws_account_id: resolvableValue(z.string().optional()),
    namespace: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  },
)

export const AwsQuicksightUserCustomPermissionOutputSchema = z.object({})

export type AwsQuicksightUserCustomPermissionInputProps =
  & z.input<typeof AwsQuicksightUserCustomPermissionInputSchema>
  & NodeProps

export type AwsQuicksightUserCustomPermissionOutputProps =
  & z.output<typeof AwsQuicksightUserCustomPermissionOutputSchema>
  & z.output<typeof AwsQuicksightUserCustomPermissionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/quicksight_user_custom_permission

export function AwsQuicksightUserCustomPermission(
  props: Partial<AwsQuicksightUserCustomPermissionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_user_custom_permission'
      _category='resource'
      _title={_title}
      _inputSchema={AwsQuicksightUserCustomPermissionInputSchema}
      _outputSchema={AwsQuicksightUserCustomPermissionOutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightUserCustomPermission = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsQuicksightUserCustomPermissionOutputProps>(
    AwsQuicksightUserCustomPermission,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsQuicksightUserCustomPermissions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsQuicksightUserCustomPermissionOutputProps>(
    AwsQuicksightUserCustomPermission,
    idFilter,
    baseNode,
    optional,
  )
