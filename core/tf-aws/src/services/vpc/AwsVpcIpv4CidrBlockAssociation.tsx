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

export const AwsVpcIpv4CidrBlockAssociationInputSchema = TfMetaSchema.extend({
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

export const AwsVpcIpv4CidrBlockAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsVpcIpv4CidrBlockAssociationInputProps =
  & z.input<typeof AwsVpcIpv4CidrBlockAssociationInputSchema>
  & NodeProps

export type AwsVpcIpv4CidrBlockAssociationOutputProps =
  & z.output<typeof AwsVpcIpv4CidrBlockAssociationOutputSchema>
  & z.output<typeof AwsVpcIpv4CidrBlockAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_ipv4_cidr_block_association

export function AwsVpcIpv4CidrBlockAssociation(
  props: Partial<AwsVpcIpv4CidrBlockAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_ipv4_cidr_block_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcIpv4CidrBlockAssociationInputSchema}
      _outputSchema={AwsVpcIpv4CidrBlockAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcIpv4CidrBlockAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcIpv4CidrBlockAssociationOutputProps>(
    AwsVpcIpv4CidrBlockAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcIpv4CidrBlockAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcIpv4CidrBlockAssociationOutputProps>(
    AwsVpcIpv4CidrBlockAssociation,
    idFilter,
    baseNode,
    optional,
  )
