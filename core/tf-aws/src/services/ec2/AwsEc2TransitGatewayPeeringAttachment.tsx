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

export const AwsEc2TransitGatewayPeeringAttachmentInputSchema = TfMetaSchema
  .extend({
    peer_region: resolvableValue(z.string()),
    peer_transit_gateway_id: resolvableValue(z.string()),
    transit_gateway_id: resolvableValue(z.string()),
    options: resolvableValue(
      z.object({
        dynamic_routing: z.string().optional(),
      }).optional(),
    ),
    peer_account_id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsEc2TransitGatewayPeeringAttachmentOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsEc2TransitGatewayPeeringAttachmentInputProps =
  & z.input<typeof AwsEc2TransitGatewayPeeringAttachmentInputSchema>
  & NodeProps

export type AwsEc2TransitGatewayPeeringAttachmentOutputProps =
  & z.output<typeof AwsEc2TransitGatewayPeeringAttachmentOutputSchema>
  & z.output<typeof AwsEc2TransitGatewayPeeringAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_peering_attachment

export function AwsEc2TransitGatewayPeeringAttachment(
  props: Partial<AwsEc2TransitGatewayPeeringAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_peering_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TransitGatewayPeeringAttachmentInputSchema}
      _outputSchema={AwsEc2TransitGatewayPeeringAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayPeeringAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TransitGatewayPeeringAttachmentOutputProps>(
    AwsEc2TransitGatewayPeeringAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TransitGatewayPeeringAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TransitGatewayPeeringAttachmentOutputProps>(
    AwsEc2TransitGatewayPeeringAttachment,
    idFilter,
    baseNode,
    optional,
  )
