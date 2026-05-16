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

export const AwsVpcEndpointSubnetAssociationInputSchema = TfMetaSchema.extend({
  subnet_id: resolvableValue(z.string()),
  vpc_endpoint_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsVpcEndpointSubnetAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsVpcEndpointSubnetAssociationInputProps =
  & z.input<typeof AwsVpcEndpointSubnetAssociationInputSchema>
  & NodeProps

export type AwsVpcEndpointSubnetAssociationOutputProps =
  & z.output<typeof AwsVpcEndpointSubnetAssociationOutputSchema>
  & z.output<typeof AwsVpcEndpointSubnetAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_endpoint_subnet_association

export function AwsVpcEndpointSubnetAssociation(
  props: Partial<AwsVpcEndpointSubnetAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_endpoint_subnet_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcEndpointSubnetAssociationInputSchema}
      _outputSchema={AwsVpcEndpointSubnetAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcEndpointSubnetAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcEndpointSubnetAssociationOutputProps>(
    AwsVpcEndpointSubnetAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcEndpointSubnetAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcEndpointSubnetAssociationOutputProps>(
    AwsVpcEndpointSubnetAssociation,
    idFilter,
    baseNode,
    optional,
  )
