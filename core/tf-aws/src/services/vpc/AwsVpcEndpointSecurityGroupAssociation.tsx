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

export const AwsVpcEndpointSecurityGroupAssociationInputSchema = TfMetaSchema
  .extend({
    security_group_id: resolvableValue(z.string()),
    vpc_endpoint_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    replace_default_association: resolvableValue(z.boolean().optional()),
  })

export const AwsVpcEndpointSecurityGroupAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsVpcEndpointSecurityGroupAssociationInputProps =
  & z.input<typeof AwsVpcEndpointSecurityGroupAssociationInputSchema>
  & NodeProps

export type AwsVpcEndpointSecurityGroupAssociationOutputProps =
  & z.output<typeof AwsVpcEndpointSecurityGroupAssociationOutputSchema>
  & z.output<typeof AwsVpcEndpointSecurityGroupAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_endpoint_security_group_association

export function AwsVpcEndpointSecurityGroupAssociation(
  props: Partial<AwsVpcEndpointSecurityGroupAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_endpoint_security_group_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcEndpointSecurityGroupAssociationInputSchema}
      _outputSchema={AwsVpcEndpointSecurityGroupAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcEndpointSecurityGroupAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcEndpointSecurityGroupAssociationOutputProps>(
    AwsVpcEndpointSecurityGroupAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcEndpointSecurityGroupAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcEndpointSecurityGroupAssociationOutputProps>(
    AwsVpcEndpointSecurityGroupAssociation,
    idFilter,
    baseNode,
    optional,
  )
