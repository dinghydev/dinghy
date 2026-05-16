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

export const DataAwsEc2LocalGatewayVirtualInterfaceInputSchema = TfMetaSchema
  .extend({
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

export const DataAwsEc2LocalGatewayVirtualInterfaceOutputSchema = z.object({
  local_address: z.string().optional(),
  local_bgp_asn: z.number().optional(),
  local_gateway_id: z.string().optional(),
  local_gateway_virtual_interface_ids: z.set(z.string()).optional(),
  peer_address: z.string().optional(),
  peer_bgp_asn: z.number().optional(),
  vlan: z.number().optional(),
})

export type DataAwsEc2LocalGatewayVirtualInterfaceInputProps =
  & z.input<typeof DataAwsEc2LocalGatewayVirtualInterfaceInputSchema>
  & NodeProps

export type DataAwsEc2LocalGatewayVirtualInterfaceOutputProps =
  & z.output<typeof DataAwsEc2LocalGatewayVirtualInterfaceOutputSchema>
  & z.output<typeof DataAwsEc2LocalGatewayVirtualInterfaceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_local_gateway_virtual_interface

export function DataAwsEc2LocalGatewayVirtualInterface(
  props: Partial<DataAwsEc2LocalGatewayVirtualInterfaceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_local_gateway_virtual_interface'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2LocalGatewayVirtualInterfaceInputSchema}
      _outputSchema={DataAwsEc2LocalGatewayVirtualInterfaceOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2LocalGatewayVirtualInterface = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEc2LocalGatewayVirtualInterfaceOutputProps>(
    DataAwsEc2LocalGatewayVirtualInterface,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEc2LocalGatewayVirtualInterfaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2LocalGatewayVirtualInterfaceOutputProps>(
    DataAwsEc2LocalGatewayVirtualInterface,
    idFilter,
    baseNode,
    optional,
  )
