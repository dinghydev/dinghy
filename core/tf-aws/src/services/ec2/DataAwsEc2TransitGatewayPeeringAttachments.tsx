import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEc2TransitGatewayPeeringAttachmentsInputSchema =
  TfMetaSchema.extend({
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

export const DataAwsEc2TransitGatewayPeeringAttachmentsOutputSchema = z.object({
  ids: z.string().array().optional(),
})

export type DataAwsEc2TransitGatewayPeeringAttachmentsInputProps =
  & z.input<typeof DataAwsEc2TransitGatewayPeeringAttachmentsInputSchema>
  & NodeProps

export type DataAwsEc2TransitGatewayPeeringAttachmentsOutputProps =
  & z.output<typeof DataAwsEc2TransitGatewayPeeringAttachmentsOutputSchema>
  & z.output<typeof DataAwsEc2TransitGatewayPeeringAttachmentsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_transit_gateway_peering_attachments

export function DataAwsEc2TransitGatewayPeeringAttachments(
  props: Partial<DataAwsEc2TransitGatewayPeeringAttachmentsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_peering_attachments'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2TransitGatewayPeeringAttachmentsInputSchema}
      _outputSchema={DataAwsEc2TransitGatewayPeeringAttachmentsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2TransitGatewayPeeringAttachmentss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2TransitGatewayPeeringAttachmentsOutputProps>(
    DataAwsEc2TransitGatewayPeeringAttachments,
    idFilter,
    baseNode,
    optional,
  )
