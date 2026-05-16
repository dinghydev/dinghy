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

export const AwsDxPublicVirtualInterfaceInputSchema = TfMetaSchema.extend({
  address_family: resolvableValue(z.string()),
  bgp_asn: resolvableValue(z.number()),
  connection_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  route_filter_prefixes: resolvableValue(z.string().array()),
  vlan: resolvableValue(z.number()),
  amazon_address: resolvableValue(z.string().optional()),
  bgp_auth_key: resolvableValue(z.string().optional()),
  customer_address: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsDxPublicVirtualInterfaceOutputSchema = z.object({
  amazon_side_asn: z.string().optional(),
  arn: z.string().optional(),
  aws_device: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsDxPublicVirtualInterfaceInputProps =
  & z.input<typeof AwsDxPublicVirtualInterfaceInputSchema>
  & NodeProps

export type AwsDxPublicVirtualInterfaceOutputProps =
  & z.output<typeof AwsDxPublicVirtualInterfaceOutputSchema>
  & z.output<typeof AwsDxPublicVirtualInterfaceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dx_public_virtual_interface

export function AwsDxPublicVirtualInterface(
  props: Partial<AwsDxPublicVirtualInterfaceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_public_virtual_interface'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDxPublicVirtualInterfaceInputSchema}
      _outputSchema={AwsDxPublicVirtualInterfaceOutputSchema}
      {...props}
    />
  )
}

export const useAwsDxPublicVirtualInterface = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDxPublicVirtualInterfaceOutputProps>(
    AwsDxPublicVirtualInterface,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDxPublicVirtualInterfaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDxPublicVirtualInterfaceOutputProps>(
    AwsDxPublicVirtualInterface,
    idFilter,
    baseNode,
    optional,
  )
