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

export const AwsDxHostedPublicVirtualInterfaceInputSchema = TfMetaSchema.extend(
  {
    address_family: resolvableValue(z.string()),
    bgp_asn: resolvableValue(z.number()),
    connection_id: resolvableValue(z.string()),
    name: resolvableValue(z.string()),
    owner_account_id: resolvableValue(z.string()),
    route_filter_prefixes: resolvableValue(z.string().array()),
    vlan: resolvableValue(z.number()),
    amazon_address: resolvableValue(z.string().optional()),
    bgp_auth_key: resolvableValue(z.string().optional()),
    customer_address: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  },
)

export const AwsDxHostedPublicVirtualInterfaceOutputSchema = z.object({
  amazon_side_asn: z.string().optional(),
  arn: z.string().optional(),
  aws_device: z.string().optional(),
  id: z.string().optional(),
})

export type AwsDxHostedPublicVirtualInterfaceInputProps =
  & z.input<typeof AwsDxHostedPublicVirtualInterfaceInputSchema>
  & NodeProps

export type AwsDxHostedPublicVirtualInterfaceOutputProps =
  & z.output<typeof AwsDxHostedPublicVirtualInterfaceOutputSchema>
  & z.output<typeof AwsDxHostedPublicVirtualInterfaceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dx_hosted_public_virtual_interface

export function AwsDxHostedPublicVirtualInterface(
  props: Partial<AwsDxHostedPublicVirtualInterfaceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_hosted_public_virtual_interface'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDxHostedPublicVirtualInterfaceInputSchema}
      _outputSchema={AwsDxHostedPublicVirtualInterfaceOutputSchema}
      {...props}
    />
  )
}

export const useAwsDxHostedPublicVirtualInterface = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDxHostedPublicVirtualInterfaceOutputProps>(
    AwsDxHostedPublicVirtualInterface,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDxHostedPublicVirtualInterfaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDxHostedPublicVirtualInterfaceOutputProps>(
    AwsDxHostedPublicVirtualInterface,
    idFilter,
    baseNode,
    optional,
  )
