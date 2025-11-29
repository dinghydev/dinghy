import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_transit_gateway_prefix_list_reference

export const InputSchema = z.object({
  prefix_list_id: resolvableValue(z.string()),
  prefix_list_owner_id: resolvableValue(z.string()),
  transit_gateway_route_table_id: resolvableValue(z.string()),
  blackhole: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  transit_gateway_attachment_id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEc2TransitGatewayPrefixListReference(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_prefix_list_reference'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayPrefixListReference = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsEc2TransitGatewayPrefixListReference, node, id)

export const useAwsEc2TransitGatewayPrefixListReferences = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsEc2TransitGatewayPrefixListReference, node, id)
