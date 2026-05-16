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

export const AwsEc2TransitGatewayMulticastDomainAssociationInputSchema =
  TfMetaSchema.extend({
    subnet_id: resolvableValue(z.string()),
    transit_gateway_attachment_id: resolvableValue(z.string()),
    transit_gateway_multicast_domain_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsEc2TransitGatewayMulticastDomainAssociationOutputSchema = z
  .object({
    id: z.string().optional(),
  })

export type AwsEc2TransitGatewayMulticastDomainAssociationInputProps =
  & z.input<typeof AwsEc2TransitGatewayMulticastDomainAssociationInputSchema>
  & NodeProps

export type AwsEc2TransitGatewayMulticastDomainAssociationOutputProps =
  & z.output<typeof AwsEc2TransitGatewayMulticastDomainAssociationOutputSchema>
  & z.output<typeof AwsEc2TransitGatewayMulticastDomainAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_multicast_domain_association

export function AwsEc2TransitGatewayMulticastDomainAssociation(
  props: Partial<AwsEc2TransitGatewayMulticastDomainAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_multicast_domain_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TransitGatewayMulticastDomainAssociationInputSchema}
      _outputSchema={AwsEc2TransitGatewayMulticastDomainAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayMulticastDomainAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TransitGatewayMulticastDomainAssociationOutputProps>(
    AwsEc2TransitGatewayMulticastDomainAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TransitGatewayMulticastDomainAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TransitGatewayMulticastDomainAssociationOutputProps>(
    AwsEc2TransitGatewayMulticastDomainAssociation,
    idFilter,
    baseNode,
    optional,
  )
