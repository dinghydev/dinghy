import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/vpc_ipam_pool_cidr_allocation

export const InputSchema = z.object({
  ipam_pool_allocation_id: resolvableValue(z.string()),
  ipam_pool_id: resolvableValue(z.string()),
  cidr: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  disallowed_cidrs: resolvableValue(z.string().array().optional()),
  netmask_length: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  resource_id: z.string().optional(),
  resource_owner: z.string().optional(),
  resource_type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVpcIpamPoolCidrAllocation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_ipam_pool_cidr_allocation'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcIpamPoolCidrAllocation = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsVpcIpamPoolCidrAllocation, node, id)

export const useAwsVpcIpamPoolCidrAllocations = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsVpcIpamPoolCidrAllocation, node, id)
