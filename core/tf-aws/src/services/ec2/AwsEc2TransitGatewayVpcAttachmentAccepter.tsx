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

export const InputSchema = z.object({
  transit_gateway_attachment_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  transit_gateway_default_route_table_association: resolvableValue(
    z.boolean().optional(),
  ),
  transit_gateway_default_route_table_propagation: resolvableValue(
    z.boolean().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter

export function AwsEc2TransitGatewayVpcAttachmentAccepter(
  props: Partial<InputProps>,
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
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayVpcAttachmentAccepter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsEc2TransitGatewayVpcAttachmentAccepter,
    idFilter,
    baseNode,
    optional,
  )
