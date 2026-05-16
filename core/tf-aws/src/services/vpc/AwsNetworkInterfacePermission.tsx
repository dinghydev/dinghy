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

export const AwsNetworkInterfacePermissionInputSchema = TfMetaSchema.extend({
  aws_account_id: resolvableValue(z.string()),
  network_interface_id: resolvableValue(z.string()),
  permission: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsNetworkInterfacePermissionOutputSchema = z.object({
  network_interface_permission_id: z.string().optional(),
})

export type AwsNetworkInterfacePermissionInputProps =
  & z.input<typeof AwsNetworkInterfacePermissionInputSchema>
  & NodeProps

export type AwsNetworkInterfacePermissionOutputProps =
  & z.output<typeof AwsNetworkInterfacePermissionOutputSchema>
  & z.output<typeof AwsNetworkInterfacePermissionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/network_interface_permission

export function AwsNetworkInterfacePermission(
  props: Partial<AwsNetworkInterfacePermissionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_network_interface_permission'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkInterfacePermissionInputSchema}
      _outputSchema={AwsNetworkInterfacePermissionOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkInterfacePermission = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkInterfacePermissionOutputProps>(
    AwsNetworkInterfacePermission,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkInterfacePermissions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkInterfacePermissionOutputProps>(
    AwsNetworkInterfacePermission,
    idFilter,
    baseNode,
    optional,
  )
