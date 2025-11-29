import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_transit_gateway_multicast_domain

export const InputSchema = z.object({
  transit_gateway_id: resolvableValue(z.string()),
  auto_accept_shared_associations: resolvableValue(z.string().optional()),
  igmpv2_support: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  static_sources_support: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEc2TransitGatewayMulticastDomain(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_multicast_domain'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayMulticastDomain = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsEc2TransitGatewayMulticastDomain, node, id)

export const useAwsEc2TransitGatewayMulticastDomains = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsEc2TransitGatewayMulticastDomain, node, id)
