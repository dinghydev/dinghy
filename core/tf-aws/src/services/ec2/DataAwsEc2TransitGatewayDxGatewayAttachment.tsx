import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ec2_transit_gateway_dx_gateway_attachment

export const InputSchema = z.object({
  dx_gateway_id: resolvableValue(z.string().optional()),
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
  transit_gateway_id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsEc2TransitGatewayDxGatewayAttachment(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_dx_gateway_attachment'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsEc2TransitGatewayDxGatewayAttachment = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    DataAwsEc2TransitGatewayDxGatewayAttachment,
    node,
    id,
  )

export const useDataAwsEc2TransitGatewayDxGatewayAttachments = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    DataAwsEc2TransitGatewayDxGatewayAttachment,
    node,
    id,
  )
