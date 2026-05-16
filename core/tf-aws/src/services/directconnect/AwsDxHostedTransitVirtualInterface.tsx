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

export const AwsDxHostedTransitVirtualInterfaceInputSchema = TfMetaSchema
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

export const AwsDxHostedTransitVirtualInterfaceOutputSchema = z.object({
  amazon_side_asn: z.string().optional(),
  arn: z.string().optional(),
  aws_device: z.string().optional(),
  id: z.string().optional(),
  jumbo_frame_capable: z.boolean().optional(),
})

export type AwsDxHostedTransitVirtualInterfaceInputProps =
  & z.input<typeof AwsDxHostedTransitVirtualInterfaceInputSchema>
  & NodeProps

export type AwsDxHostedTransitVirtualInterfaceOutputProps =
  & z.output<typeof AwsDxHostedTransitVirtualInterfaceOutputSchema>
  & z.output<typeof AwsDxHostedTransitVirtualInterfaceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dx_hosted_transit_virtual_interface

export function AwsDxHostedTransitVirtualInterface(
  props: Partial<AwsDxHostedTransitVirtualInterfaceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_hosted_transit_virtual_interface'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDxHostedTransitVirtualInterfaceInputSchema}
      _outputSchema={AwsDxHostedTransitVirtualInterfaceOutputSchema}
      {...props}
    />
  )
}

export const useAwsDxHostedTransitVirtualInterface = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDxHostedTransitVirtualInterfaceOutputProps>(
    AwsDxHostedTransitVirtualInterface,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDxHostedTransitVirtualInterfaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDxHostedTransitVirtualInterfaceOutputProps>(
    AwsDxHostedTransitVirtualInterface,
    idFilter,
    baseNode,
    optional,
  )
