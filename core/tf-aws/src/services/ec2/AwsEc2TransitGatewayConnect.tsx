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

export const InputSchema = z.object({
  transit_gateway_id: resolvableValue(z.string()),
  transport_attachment_id: resolvableValue(z.string()),
  protocol: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  transit_gateway_default_route_table_association: resolvableValue(
    z.boolean().optional(),
  ),
  transit_gateway_default_route_table_propagation: resolvableValue(
    z.boolean().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_transit_gateway_connect

export function AwsEc2TransitGatewayConnect(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_connect'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayConnect = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsEc2TransitGatewayConnect, idFilter, baseNode)

export const useAwsEc2TransitGatewayConnects = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(AwsEc2TransitGatewayConnect, idFilter, baseNode)
