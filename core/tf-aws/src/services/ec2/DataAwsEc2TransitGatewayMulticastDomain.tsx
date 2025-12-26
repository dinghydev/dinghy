import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEc2TransitGatewayMulticastDomain } from './AwsEc2TransitGatewayMulticastDomain.tsx'

export const InputSchema = z.object({
  state: resolvableValue(z.string()),
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
  transit_gateway_multicast_domain_id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  associations: z.object({
    subnet_id: z.string(),
    transit_gateway_attachment_id: z.string(),
  }).array().optional(),
  auto_accept_shared_associations: z.string().optional(),
  id: z.string().optional(),
  igmpv2_support: z.string().optional(),
  members: z.object({
    group_ip_address: z.string(),
    network_interface_id: z.string(),
  }).array().optional(),
  owner_id: z.string().optional(),
  sources: z.object({
    group_ip_address: z.string(),
    network_interface_id: z.string(),
  }).array().optional(),
  static_sources_support: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  transit_gateway_attachment_id: z.string().optional(),
  transit_gateway_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ec2_transit_gateway_multicast_domain

export function DataAwsEc2TransitGatewayMulticastDomain(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsEc2TransitGatewayMulticastDomain
      _type='aws_ec2_transit_gateway_multicast_domain'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEc2TransitGatewayMulticastDomain = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsEc2TransitGatewayMulticastDomain,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEc2TransitGatewayMulticastDomains = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsEc2TransitGatewayMulticastDomain,
    idFilter,
    baseNode,
    optional,
  )
