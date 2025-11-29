import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ec2_local_gateway_virtual_interface

export const InputSchema = z.object({
  local_gateway_virtual_interface_ids: resolvableValue(z.string().array()),
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  local_address: z.string().optional(),
  local_bgp_asn: z.number().optional(),
  local_gateway_id: z.string().optional(),
  peer_address: z.string().optional(),
  peer_bgp_asn: z.number().optional(),
  vlan: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsEc2LocalGatewayVirtualInterface(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_local_gateway_virtual_interface'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2LocalGatewayVirtualInterface = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsEc2LocalGatewayVirtualInterface, node, id)

export const useDataAwsEc2LocalGatewayVirtualInterfaces = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(DataAwsEc2LocalGatewayVirtualInterface, node, id)
