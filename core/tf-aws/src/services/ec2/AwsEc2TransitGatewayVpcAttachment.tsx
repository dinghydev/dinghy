import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_transit_gateway_vpc_attachment

export const InputSchema = z.object({
  subnet_ids: resolvableValue(z.string().array()),
  transit_gateway_id: resolvableValue(z.string()),
  vpc_id: resolvableValue(z.string()),
  appliance_mode_support: resolvableValue(z.string().optional()),
  dns_support: resolvableValue(z.string().optional()),
  ipv6_support: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  security_group_referencing_support: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  transit_gateway_default_route_table_association: resolvableValue(
    z.boolean().optional(),
  ),
  transit_gateway_default_route_table_propagation: resolvableValue(
    z.boolean().optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_owner_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEc2TransitGatewayVpcAttachment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_vpc_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayVpcAttachment = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEc2TransitGatewayVpcAttachment, node, id)

export const useAwsEc2TransitGatewayVpcAttachments = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsEc2TransitGatewayVpcAttachment, node, id)
