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

export const AwsEc2TransitGatewayVpcAttachmentAccepterInputSchema = TfMetaSchema
  .extend({
    transit_gateway_attachment_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    transit_gateway_default_route_table_association: resolvableValue(
      z.boolean().optional(),
    ),
    transit_gateway_default_route_table_propagation: resolvableValue(
      z.boolean().optional(),
    ),
  })

export const AwsEc2TransitGatewayVpcAttachmentAccepterOutputSchema = z.object({
  appliance_mode_support: z.string().optional(),
  dns_support: z.string().optional(),
  id: z.string().optional(),
  ipv6_support: z.string().optional(),
  security_group_referencing_support: z.string().optional(),
  subnet_ids: z.set(z.string()).optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  transit_gateway_id: z.string().optional(),
  vpc_id: z.string().optional(),
  vpc_owner_id: z.string().optional(),
})

export type AwsEc2TransitGatewayVpcAttachmentAccepterInputProps =
  & z.input<typeof AwsEc2TransitGatewayVpcAttachmentAccepterInputSchema>
  & NodeProps

export type AwsEc2TransitGatewayVpcAttachmentAccepterOutputProps =
  & z.output<typeof AwsEc2TransitGatewayVpcAttachmentAccepterOutputSchema>
  & z.output<typeof AwsEc2TransitGatewayVpcAttachmentAccepterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter

export function AwsEc2TransitGatewayVpcAttachmentAccepter(
  props: Partial<AwsEc2TransitGatewayVpcAttachmentAccepterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_vpc_attachment_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TransitGatewayVpcAttachmentAccepterInputSchema}
      _outputSchema={AwsEc2TransitGatewayVpcAttachmentAccepterOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayVpcAttachmentAccepter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TransitGatewayVpcAttachmentAccepterOutputProps>(
    AwsEc2TransitGatewayVpcAttachmentAccepter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TransitGatewayVpcAttachmentAccepters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TransitGatewayVpcAttachmentAccepterOutputProps>(
    AwsEc2TransitGatewayVpcAttachmentAccepter,
    idFilter,
    baseNode,
    optional,
  )
