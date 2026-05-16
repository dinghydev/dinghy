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

export const AwsDxHostedPublicVirtualInterfaceAccepterInputSchema = TfMetaSchema
  .extend({
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

export const AwsDxHostedPublicVirtualInterfaceAccepterOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsDxHostedPublicVirtualInterfaceAccepterInputProps =
  & z.input<typeof AwsDxHostedPublicVirtualInterfaceAccepterInputSchema>
  & NodeProps

export type AwsDxHostedPublicVirtualInterfaceAccepterOutputProps =
  & z.output<typeof AwsDxHostedPublicVirtualInterfaceAccepterOutputSchema>
  & z.output<typeof AwsDxHostedPublicVirtualInterfaceAccepterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dx_hosted_public_virtual_interface_accepter

export function AwsDxHostedPublicVirtualInterfaceAccepter(
  props: Partial<AwsDxHostedPublicVirtualInterfaceAccepterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_hosted_public_virtual_interface_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDxHostedPublicVirtualInterfaceAccepterInputSchema}
      _outputSchema={AwsDxHostedPublicVirtualInterfaceAccepterOutputSchema}
      {...props}
    />
  )
}

export const useAwsDxHostedPublicVirtualInterfaceAccepter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDxHostedPublicVirtualInterfaceAccepterOutputProps>(
    AwsDxHostedPublicVirtualInterfaceAccepter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDxHostedPublicVirtualInterfaceAccepters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDxHostedPublicVirtualInterfaceAccepterOutputProps>(
    AwsDxHostedPublicVirtualInterfaceAccepter,
    idFilter,
    baseNode,
    optional,
  )
