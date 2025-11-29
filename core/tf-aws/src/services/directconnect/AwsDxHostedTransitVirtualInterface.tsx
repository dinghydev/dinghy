import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dx_hosted_transit_virtual_interface

export const InputSchema = z.object({
  address_family: resolvableValue(z.string()),
  amazon_side_asn: resolvableValue(z.string()),
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

export const OutputSchema = z.object({
  arn: z.string().optional(),
  aws_device: z.string().optional(),
  id: z.string().optional(),
  jumbo_frame_capable: z.boolean().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDxHostedTransitVirtualInterface(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_hosted_transit_virtual_interface'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDxHostedTransitVirtualInterface = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsDxHostedTransitVirtualInterface, node, id)

export const useAwsDxHostedTransitVirtualInterfaces = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsDxHostedTransitVirtualInterface, node, id)
