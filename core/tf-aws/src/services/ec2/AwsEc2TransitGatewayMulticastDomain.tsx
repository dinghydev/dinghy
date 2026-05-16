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

export const AwsEc2TransitGatewayMulticastDomainInputSchema = TfMetaSchema
  .extend({
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

export const AwsEc2TransitGatewayMulticastDomainOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsEc2TransitGatewayMulticastDomainInputProps =
  & z.input<typeof AwsEc2TransitGatewayMulticastDomainInputSchema>
  & NodeProps

export type AwsEc2TransitGatewayMulticastDomainOutputProps =
  & z.output<typeof AwsEc2TransitGatewayMulticastDomainOutputSchema>
  & z.output<typeof AwsEc2TransitGatewayMulticastDomainInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain

export function AwsEc2TransitGatewayMulticastDomain(
  props: Partial<AwsEc2TransitGatewayMulticastDomainInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_multicast_domain'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TransitGatewayMulticastDomainInputSchema}
      _outputSchema={AwsEc2TransitGatewayMulticastDomainOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayMulticastDomain = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TransitGatewayMulticastDomainOutputProps>(
    AwsEc2TransitGatewayMulticastDomain,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TransitGatewayMulticastDomains = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TransitGatewayMulticastDomainOutputProps>(
    AwsEc2TransitGatewayMulticastDomain,
    idFilter,
    baseNode,
    optional,
  )
