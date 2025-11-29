import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/nat_gateway_eip_association

export const InputSchema = z.object({
  allocation_id: resolvableValue(z.string()),
  association_id: resolvableValue(z.string()),
  nat_gateway_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsNatGatewayEipAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_nat_gateway_eip_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNatGatewayEipAssociation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsNatGatewayEipAssociation, node, id)

export const useAwsNatGatewayEipAssociations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsNatGatewayEipAssociation, node, id)
