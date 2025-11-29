import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/vpc_ipv6_cidr_block_association

export const InputSchema = z.object({
  vpc_id: resolvableValue(z.string()),
  assign_generated_ipv6_cidr_block: resolvableValue(z.boolean().optional()),
  ipv6_cidr_block: resolvableValue(z.string().optional()),
  ipv6_ipam_pool_id: resolvableValue(z.string().optional()),
  ipv6_netmask_length: resolvableValue(z.number().optional()),
  ipv6_pool: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  ip_source: z.string().optional(),
  ipv6_address_attribute: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVpcIpv6CidrBlockAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_ipv6_cidr_block_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcIpv6CidrBlockAssociation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsVpcIpv6CidrBlockAssociation, node, id)

export const useAwsVpcIpv6CidrBlockAssociations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsVpcIpv6CidrBlockAssociation, node, id)
