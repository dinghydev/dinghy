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

export const AwsDxHostedTransitVirtualInterfaceAccepterInputSchema =
  TfMetaSchema.extend({
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

export const AwsDxHostedTransitVirtualInterfaceAccepterOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsDxHostedTransitVirtualInterfaceAccepterInputProps =
  & z.input<typeof AwsDxHostedTransitVirtualInterfaceAccepterInputSchema>
  & NodeProps

export type AwsDxHostedTransitVirtualInterfaceAccepterOutputProps =
  & z.output<typeof AwsDxHostedTransitVirtualInterfaceAccepterOutputSchema>
  & z.output<typeof AwsDxHostedTransitVirtualInterfaceAccepterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dx_hosted_transit_virtual_interface_accepter

export function AwsDxHostedTransitVirtualInterfaceAccepter(
  props: Partial<AwsDxHostedTransitVirtualInterfaceAccepterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_hosted_transit_virtual_interface_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDxHostedTransitVirtualInterfaceAccepterInputSchema}
      _outputSchema={AwsDxHostedTransitVirtualInterfaceAccepterOutputSchema}
      {...props}
    />
  )
}

export const useAwsDxHostedTransitVirtualInterfaceAccepter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDxHostedTransitVirtualInterfaceAccepterOutputProps>(
    AwsDxHostedTransitVirtualInterfaceAccepter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDxHostedTransitVirtualInterfaceAccepters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDxHostedTransitVirtualInterfaceAccepterOutputProps>(
    AwsDxHostedTransitVirtualInterfaceAccepter,
    idFilter,
    baseNode,
    optional,
  )
