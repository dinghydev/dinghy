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

export const DataAwsEc2TransitGatewayVpnAttachmentInputSchema = TfMetaSchema
  .extend({
    filter: resolvableValue(
      z.object({
        name: z.string(),
        values: z.string().array(),
      }).array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    timeouts: resolvableValue(
      z.object({
        read: z.string().optional(),
      }).optional(),
    ),
    transit_gateway_id: resolvableValue(z.string().optional()),
    vpn_connection_id: resolvableValue(z.string().optional()),
  })

export const DataAwsEc2TransitGatewayVpnAttachmentOutputSchema = z.object({
  id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsEc2TransitGatewayVpnAttachmentInputProps =
  & z.input<typeof DataAwsEc2TransitGatewayVpnAttachmentInputSchema>
  & NodeProps

export type DataAwsEc2TransitGatewayVpnAttachmentOutputProps =
  & z.output<typeof DataAwsEc2TransitGatewayVpnAttachmentOutputSchema>
  & z.output<typeof DataAwsEc2TransitGatewayVpnAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_transit_gateway_vpn_attachment

export function DataAwsEc2TransitGatewayVpnAttachment(
  props: Partial<DataAwsEc2TransitGatewayVpnAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_vpn_attachment'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2TransitGatewayVpnAttachmentInputSchema}
      _outputSchema={DataAwsEc2TransitGatewayVpnAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2TransitGatewayVpnAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEc2TransitGatewayVpnAttachmentOutputProps>(
    DataAwsEc2TransitGatewayVpnAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEc2TransitGatewayVpnAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2TransitGatewayVpnAttachmentOutputProps>(
    DataAwsEc2TransitGatewayVpnAttachment,
    idFilter,
    baseNode,
    optional,
  )
