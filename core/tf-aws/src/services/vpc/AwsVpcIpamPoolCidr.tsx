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

export const AwsVpcIpamPoolCidrInputSchema = TfMetaSchema.extend({
  ipam_pool_id: resolvableValue(z.string()),
  cidr: resolvableValue(z.string().optional()),
  cidr_authorization_context: resolvableValue(
    z.object({
      message: z.string().optional(),
      signature: z.string().optional(),
    }).optional(),
  ),
  netmask_length: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsVpcIpamPoolCidrOutputSchema = z.object({
  id: z.string().optional(),
  ipam_pool_cidr_id: z.string().optional(),
})

export type AwsVpcIpamPoolCidrInputProps =
  & z.input<typeof AwsVpcIpamPoolCidrInputSchema>
  & NodeProps

export type AwsVpcIpamPoolCidrOutputProps =
  & z.output<typeof AwsVpcIpamPoolCidrOutputSchema>
  & z.output<typeof AwsVpcIpamPoolCidrInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipam_pool_cidr

export function AwsVpcIpamPoolCidr(
  props: Partial<AwsVpcIpamPoolCidrInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_ipam_pool_cidr'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcIpamPoolCidrInputSchema}
      _outputSchema={AwsVpcIpamPoolCidrOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcIpamPoolCidr = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcIpamPoolCidrOutputProps>(
    AwsVpcIpamPoolCidr,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcIpamPoolCidrs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcIpamPoolCidrOutputProps>(
    AwsVpcIpamPoolCidr,
    idFilter,
    baseNode,
    optional,
  )
