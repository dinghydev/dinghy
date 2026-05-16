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

export const AwsEc2TransitGatewayPeeringAttachmentAccepterInputSchema =
  TfMetaSchema.extend({
    transit_gateway_attachment_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsEc2TransitGatewayPeeringAttachmentAccepterOutputSchema = z
  .object({
    id: z.string().optional(),
    peer_account_id: z.string().optional(),
    peer_region: z.string().optional(),
    peer_transit_gateway_id: z.string().optional(),
    tags_all: z.record(z.string(), z.string()).optional(),
    transit_gateway_id: z.string().optional(),
  })

export type AwsEc2TransitGatewayPeeringAttachmentAccepterInputProps =
  & z.input<typeof AwsEc2TransitGatewayPeeringAttachmentAccepterInputSchema>
  & NodeProps

export type AwsEc2TransitGatewayPeeringAttachmentAccepterOutputProps =
  & z.output<typeof AwsEc2TransitGatewayPeeringAttachmentAccepterOutputSchema>
  & z.output<typeof AwsEc2TransitGatewayPeeringAttachmentAccepterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_peering_attachment_accepter

export function AwsEc2TransitGatewayPeeringAttachmentAccepter(
  props: Partial<AwsEc2TransitGatewayPeeringAttachmentAccepterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_peering_attachment_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TransitGatewayPeeringAttachmentAccepterInputSchema}
      _outputSchema={AwsEc2TransitGatewayPeeringAttachmentAccepterOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayPeeringAttachmentAccepter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TransitGatewayPeeringAttachmentAccepterOutputProps>(
    AwsEc2TransitGatewayPeeringAttachmentAccepter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TransitGatewayPeeringAttachmentAccepters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TransitGatewayPeeringAttachmentAccepterOutputProps>(
    AwsEc2TransitGatewayPeeringAttachmentAccepter,
    idFilter,
    baseNode,
    optional,
  )
