import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsEc2TransitGatewayVpcAttachment } from './AwsEc2TransitGatewayVpcAttachment.tsx'

export const DataAwsEc2TransitGatewayVpcAttachmentInputSchema = TfMetaSchema
  .extend({
    filter: resolvableValue(
      z.object({
        name: z.string(),
        values: z.string().array(),
      }).array().optional(),
    ),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        read: z.string().optional(),
      }).optional(),
    ),
  })

export const DataAwsEc2TransitGatewayVpcAttachmentOutputSchema = z.object({
  appliance_mode_support: z.string().optional(),
  arn: z.string().optional(),
  dns_support: z.string().optional(),
  id: z.string().optional(),
  ipv6_support: z.string().optional(),
  security_group_referencing_support: z.string().optional(),
  subnet_ids: z.set(z.string()).optional(),
  tags: z.record(z.string(), z.string()).optional(),
  transit_gateway_id: z.string().optional(),
  vpc_id: z.string().optional(),
  vpc_owner_id: z.string().optional(),
})

export type DataAwsEc2TransitGatewayVpcAttachmentInputProps =
  & z.input<typeof DataAwsEc2TransitGatewayVpcAttachmentInputSchema>
  & NodeProps

export type DataAwsEc2TransitGatewayVpcAttachmentOutputProps =
  & z.output<typeof DataAwsEc2TransitGatewayVpcAttachmentOutputSchema>
  & z.output<typeof DataAwsEc2TransitGatewayVpcAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_transit_gateway_vpc_attachment

export function DataAwsEc2TransitGatewayVpcAttachment(
  props: Partial<DataAwsEc2TransitGatewayVpcAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsEc2TransitGatewayVpcAttachment
      _type='aws_ec2_transit_gateway_vpc_attachment'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2TransitGatewayVpcAttachmentInputSchema}
      _outputSchema={DataAwsEc2TransitGatewayVpcAttachmentOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsEc2TransitGatewayVpcAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEc2TransitGatewayVpcAttachmentOutputProps>(
    DataAwsEc2TransitGatewayVpcAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEc2TransitGatewayVpcAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2TransitGatewayVpcAttachmentOutputProps>(
    DataAwsEc2TransitGatewayVpcAttachment,
    idFilter,
    baseNode,
    optional,
  )
