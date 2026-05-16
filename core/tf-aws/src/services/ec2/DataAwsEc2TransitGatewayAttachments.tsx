import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsEc2TransitGatewayAttachmentsInputSchema = TfMetaSchema
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

export const DataAwsEc2TransitGatewayAttachmentsOutputSchema = z.object({
  ids: z.string().array().optional(),
})

export type DataAwsEc2TransitGatewayAttachmentsInputProps =
  & z.input<typeof DataAwsEc2TransitGatewayAttachmentsInputSchema>
  & NodeProps

export type DataAwsEc2TransitGatewayAttachmentsOutputProps =
  & z.output<typeof DataAwsEc2TransitGatewayAttachmentsOutputSchema>
  & z.output<typeof DataAwsEc2TransitGatewayAttachmentsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_transit_gateway_attachments

export function DataAwsEc2TransitGatewayAttachments(
  props: Partial<DataAwsEc2TransitGatewayAttachmentsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_attachments'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2TransitGatewayAttachmentsInputSchema}
      _outputSchema={DataAwsEc2TransitGatewayAttachmentsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2TransitGatewayAttachmentss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2TransitGatewayAttachmentsOutputProps>(
    DataAwsEc2TransitGatewayAttachments,
    idFilter,
    baseNode,
    optional,
  )
