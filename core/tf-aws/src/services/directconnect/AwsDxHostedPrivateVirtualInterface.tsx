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

export const AwsDxHostedPrivateVirtualInterfaceInputSchema = TfMetaSchema
  .extend({
    address_family: resolvableValue(z.string()),
    bgp_asn: resolvableValue(z.number()),
    connection_id: resolvableValue(z.string()),
    name: resolvableValue(z.string()),
    owner_account_id: resolvableValue(z.string()),
    vlan: resolvableValue(z.number()),
    amazon_address: resolvableValue(z.string().optional()),
    bgp_auth_key: resolvableValue(z.string().optional()),
    customer_address: resolvableValue(z.string().optional()),
    mtu: resolvableValue(z.number().optional()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsDxHostedPrivateVirtualInterfaceOutputSchema = z.object({
  amazon_side_asn: z.string().optional(),
  arn: z.string().optional(),
  aws_device: z.string().optional(),
  id: z.string().optional(),
  jumbo_frame_capable: z.boolean().optional(),
})

export type AwsDxHostedPrivateVirtualInterfaceInputProps =
  & z.input<typeof AwsDxHostedPrivateVirtualInterfaceInputSchema>
  & NodeProps

export type AwsDxHostedPrivateVirtualInterfaceOutputProps =
  & z.output<typeof AwsDxHostedPrivateVirtualInterfaceOutputSchema>
  & z.output<typeof AwsDxHostedPrivateVirtualInterfaceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dx_hosted_private_virtual_interface

export function AwsDxHostedPrivateVirtualInterface(
  props: Partial<AwsDxHostedPrivateVirtualInterfaceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_hosted_private_virtual_interface'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDxHostedPrivateVirtualInterfaceInputSchema}
      _outputSchema={AwsDxHostedPrivateVirtualInterfaceOutputSchema}
      {...props}
    />
  )
}

export const useAwsDxHostedPrivateVirtualInterface = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDxHostedPrivateVirtualInterfaceOutputProps>(
    AwsDxHostedPrivateVirtualInterface,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDxHostedPrivateVirtualInterfaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDxHostedPrivateVirtualInterfaceOutputProps>(
    AwsDxHostedPrivateVirtualInterface,
    idFilter,
    baseNode,
    optional,
  )
