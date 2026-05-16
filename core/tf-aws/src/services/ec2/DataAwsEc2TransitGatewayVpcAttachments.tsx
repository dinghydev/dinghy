import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEc2TransitGatewayVpcAttachmentsInputSchema = TfMetaSchema
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

export const DataAwsEc2TransitGatewayVpcAttachmentsOutputSchema = z.object({
  ids: z.string().array().optional(),
})

export type DataAwsEc2TransitGatewayVpcAttachmentsInputProps =
  & z.input<typeof DataAwsEc2TransitGatewayVpcAttachmentsInputSchema>
  & NodeProps

export type DataAwsEc2TransitGatewayVpcAttachmentsOutputProps =
  & z.output<typeof DataAwsEc2TransitGatewayVpcAttachmentsOutputSchema>
  & z.output<typeof DataAwsEc2TransitGatewayVpcAttachmentsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_transit_gateway_vpc_attachments

export function DataAwsEc2TransitGatewayVpcAttachments(
  props: Partial<DataAwsEc2TransitGatewayVpcAttachmentsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_vpc_attachments'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2TransitGatewayVpcAttachmentsInputSchema}
      _outputSchema={DataAwsEc2TransitGatewayVpcAttachmentsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2TransitGatewayVpcAttachmentss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2TransitGatewayVpcAttachmentsOutputProps>(
    DataAwsEc2TransitGatewayVpcAttachments,
    idFilter,
    baseNode,
    optional,
  )
