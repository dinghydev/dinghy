import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEc2TransitGatewayPeeringAttachment } from './AwsEc2TransitGatewayPeeringAttachment.tsx'

export const DataAwsEc2TransitGatewayPeeringAttachmentInputSchema = TfMetaSchema
  .extend({
    filter: resolvableValue(
      z.object({
        name: z.string(),
        values: z.string().array(),
      }).array().optional(),
    ),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    timeouts: resolvableValue(
      z.object({
        read: z.string().optional(),
      }).optional(),
    ),
  })

export const DataAwsEc2TransitGatewayPeeringAttachmentOutputSchema = z.object({
  arn: z.string().optional(),
  peer_account_id: z.string().optional(),
  peer_region: z.string().optional(),
  peer_transit_gateway_id: z.string().optional(),
  state: z.string().optional(),
  transit_gateway_id: z.string().optional(),
})

export type DataAwsEc2TransitGatewayPeeringAttachmentInputProps =
  & z.input<typeof DataAwsEc2TransitGatewayPeeringAttachmentInputSchema>
  & NodeProps

export type DataAwsEc2TransitGatewayPeeringAttachmentOutputProps =
  & z.output<typeof DataAwsEc2TransitGatewayPeeringAttachmentOutputSchema>
  & z.output<typeof DataAwsEc2TransitGatewayPeeringAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_transit_gateway_peering_attachment

export function DataAwsEc2TransitGatewayPeeringAttachment(
  props: Partial<DataAwsEc2TransitGatewayPeeringAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsEc2TransitGatewayPeeringAttachment
      _type='aws_ec2_transit_gateway_peering_attachment'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2TransitGatewayPeeringAttachmentInputSchema}
      _outputSchema={DataAwsEc2TransitGatewayPeeringAttachmentOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEc2TransitGatewayPeeringAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEc2TransitGatewayPeeringAttachmentOutputProps>(
    DataAwsEc2TransitGatewayPeeringAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEc2TransitGatewayPeeringAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2TransitGatewayPeeringAttachmentOutputProps>(
    DataAwsEc2TransitGatewayPeeringAttachment,
    idFilter,
    baseNode,
    optional,
  )
