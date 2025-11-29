import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/vpc_ipv4_cidr_block_association

export const InputSchema = z.object({
  vpc_id: resolvableValue(z.string()),
  cidr_block: resolvableValue(z.string().optional()),
  ipv4_ipam_pool_id: resolvableValue(z.string().optional()),
  ipv4_netmask_length: resolvableValue(z.number().optional()),
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
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVpcIpv4CidrBlockAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_ipv4_cidr_block_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcIpv4CidrBlockAssociation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsVpcIpv4CidrBlockAssociation, node, id)

export const useAwsVpcIpv4CidrBlockAssociations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsVpcIpv4CidrBlockAssociation, node, id)
