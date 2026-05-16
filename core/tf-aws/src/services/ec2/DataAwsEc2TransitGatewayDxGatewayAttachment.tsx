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

export const DataAwsEc2TransitGatewayDxGatewayAttachmentInputSchema =
  TfMetaSchema.extend({
    dx_gateway_id: resolvableValue(z.string().optional()),
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
  })

export const DataAwsEc2TransitGatewayDxGatewayAttachmentOutputSchema = z.object(
  {
    arn: z.string().optional(),
    id: z.string().optional(),
    tags: z.record(z.string(), z.string()).optional(),
  },
)

export type DataAwsEc2TransitGatewayDxGatewayAttachmentInputProps =
  & z.input<typeof DataAwsEc2TransitGatewayDxGatewayAttachmentInputSchema>
  & NodeProps

export type DataAwsEc2TransitGatewayDxGatewayAttachmentOutputProps =
  & z.output<typeof DataAwsEc2TransitGatewayDxGatewayAttachmentOutputSchema>
  & z.output<typeof DataAwsEc2TransitGatewayDxGatewayAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment

export function DataAwsEc2TransitGatewayDxGatewayAttachment(
  props: Partial<DataAwsEc2TransitGatewayDxGatewayAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_dx_gateway_attachment'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsEc2TransitGatewayDxGatewayAttachmentInputSchema}
      _outputSchema={DataAwsEc2TransitGatewayDxGatewayAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2TransitGatewayDxGatewayAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsEc2TransitGatewayDxGatewayAttachmentOutputProps>(
    DataAwsEc2TransitGatewayDxGatewayAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsEc2TransitGatewayDxGatewayAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsEc2TransitGatewayDxGatewayAttachmentOutputProps>(
    DataAwsEc2TransitGatewayDxGatewayAttachment,
    idFilter,
    baseNode,
    optional,
  )
