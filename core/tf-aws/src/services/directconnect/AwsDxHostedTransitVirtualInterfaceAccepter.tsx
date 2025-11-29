import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dx_hosted_transit_virtual_interface_accepter

export const InputSchema = z.object({
  dx_gateway_id: resolvableValue(z.string()),
  virtual_interface_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDxHostedTransitVirtualInterfaceAccepter(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_hosted_transit_virtual_interface_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDxHostedTransitVirtualInterfaceAccepter = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsDxHostedTransitVirtualInterfaceAccepter,
    node,
    id,
  )

export const useAwsDxHostedTransitVirtualInterfaceAccepters = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsDxHostedTransitVirtualInterfaceAccepter,
    node,
    id,
  )
