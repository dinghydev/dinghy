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

export const AwsVpcIpamPoolCidrAllocationInputSchema = TfMetaSchema.extend({
  ipam_pool_id: resolvableValue(z.string()),
  cidr: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  disallowed_cidrs: resolvableValue(z.string().array().optional()),
  netmask_length: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsVpcIpamPoolCidrAllocationOutputSchema = z.object({
  id: z.string().optional(),
  ipam_pool_allocation_id: z.string().optional(),
  resource_id: z.string().optional(),
  resource_owner: z.string().optional(),
  resource_type: z.string().optional(),
})

export type AwsVpcIpamPoolCidrAllocationInputProps =
  & z.input<typeof AwsVpcIpamPoolCidrAllocationInputSchema>
  & NodeProps

export type AwsVpcIpamPoolCidrAllocationOutputProps =
  & z.output<typeof AwsVpcIpamPoolCidrAllocationOutputSchema>
  & z.output<typeof AwsVpcIpamPoolCidrAllocationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_pool_cidr_allocation

export function AwsVpcIpamPoolCidrAllocation(
  props: Partial<AwsVpcIpamPoolCidrAllocationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_ipam_pool_cidr_allocation'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcIpamPoolCidrAllocationInputSchema}
      _outputSchema={AwsVpcIpamPoolCidrAllocationOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcIpamPoolCidrAllocation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcIpamPoolCidrAllocationOutputProps>(
    AwsVpcIpamPoolCidrAllocation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcIpamPoolCidrAllocations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcIpamPoolCidrAllocationOutputProps>(
    AwsVpcIpamPoolCidrAllocation,
    idFilter,
    baseNode,
    optional,
  )
