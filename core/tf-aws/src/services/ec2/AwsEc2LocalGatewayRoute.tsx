import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ec2_local_gateway_route

export const InputSchema = z.object({
  destination_cidr_block: resolvableValue(z.string()),
  local_gateway_route_table_id: resolvableValue(z.string()),
  local_gateway_virtual_interface_group_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
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

export function AwsEc2LocalGatewayRoute(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_local_gateway_route'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2LocalGatewayRoute = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEc2LocalGatewayRoute, node, id)

export const useAwsEc2LocalGatewayRoutes = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEc2LocalGatewayRoute, node, id)
