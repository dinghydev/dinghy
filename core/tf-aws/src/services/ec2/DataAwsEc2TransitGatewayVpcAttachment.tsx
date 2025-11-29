import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEc2TransitGatewayVpcAttachment } from './AwsEc2TransitGatewayVpcAttachment.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ec2_transit_gateway_vpc_attachment

export const InputSchema = z.object({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  appliance_mode_support: z.string().optional(),
  arn: z.string().optional(),
  dns_support: z.string().optional(),
  id: z.string().optional(),
  ipv6_support: z.string().optional(),
  security_group_referencing_support: z.string().optional(),
  subnet_ids: z.string().array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
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

export function DataAwsEc2TransitGatewayVpcAttachment(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsEc2TransitGatewayVpcAttachment
      _type='aws_ec2_transit_gateway_vpc_attachment'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEc2TransitGatewayVpcAttachment = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsEc2TransitGatewayVpcAttachment, node, id)

export const useDataAwsEc2TransitGatewayVpcAttachments = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsEc2TransitGatewayVpcAttachment, node, id)
