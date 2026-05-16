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

export const AwsDxHostedPrivateVirtualInterfaceAccepterInputSchema =
  TfMetaSchema.extend({
    virtual_interface_id: resolvableValue(z.string()),
    dx_gateway_id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
    vpn_gateway_id: resolvableValue(z.string().optional()),
  })

export const AwsDxHostedPrivateVirtualInterfaceAccepterOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsDxHostedPrivateVirtualInterfaceAccepterInputProps =
  & z.input<typeof AwsDxHostedPrivateVirtualInterfaceAccepterInputSchema>
  & NodeProps

export type AwsDxHostedPrivateVirtualInterfaceAccepterOutputProps =
  & z.output<typeof AwsDxHostedPrivateVirtualInterfaceAccepterOutputSchema>
  & z.output<typeof AwsDxHostedPrivateVirtualInterfaceAccepterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dx_hosted_private_virtual_interface_accepter

export function AwsDxHostedPrivateVirtualInterfaceAccepter(
  props: Partial<AwsDxHostedPrivateVirtualInterfaceAccepterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_hosted_private_virtual_interface_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDxHostedPrivateVirtualInterfaceAccepterInputSchema}
      _outputSchema={AwsDxHostedPrivateVirtualInterfaceAccepterOutputSchema}
      {...props}
    />
  )
}

export const useAwsDxHostedPrivateVirtualInterfaceAccepter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDxHostedPrivateVirtualInterfaceAccepterOutputProps>(
    AwsDxHostedPrivateVirtualInterfaceAccepter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDxHostedPrivateVirtualInterfaceAccepters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDxHostedPrivateVirtualInterfaceAccepterOutputProps>(
    AwsDxHostedPrivateVirtualInterfaceAccepter,
    idFilter,
    baseNode,
    optional,
  )
