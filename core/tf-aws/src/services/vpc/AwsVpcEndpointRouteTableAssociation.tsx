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

export const AwsVpcEndpointRouteTableAssociationInputSchema = TfMetaSchema
  .extend({
    route_table_id: resolvableValue(z.string()),
    vpc_endpoint_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsVpcEndpointRouteTableAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsVpcEndpointRouteTableAssociationImportSchema = z.object({
  route_table_id: resolvableValue(z.string()),
  vpc_endpoint_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsVpcEndpointRouteTableAssociationInputProps =
  & z.input<typeof AwsVpcEndpointRouteTableAssociationInputSchema>
  & z.input<typeof AwsVpcEndpointRouteTableAssociationImportSchema>
  & NodeProps

export type AwsVpcEndpointRouteTableAssociationOutputProps =
  & z.output<typeof AwsVpcEndpointRouteTableAssociationOutputSchema>
  & z.output<typeof AwsVpcEndpointRouteTableAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_endpoint_route_table_association

export function AwsVpcEndpointRouteTableAssociation(
  props: Partial<AwsVpcEndpointRouteTableAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_endpoint_route_table_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcEndpointRouteTableAssociationInputSchema}
      _outputSchema={AwsVpcEndpointRouteTableAssociationOutputSchema}
      _importSchema={AwsVpcEndpointRouteTableAssociationImportSchema}
      {...props}
    />
  )
}

export const useAwsVpcEndpointRouteTableAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcEndpointRouteTableAssociationOutputProps>(
    AwsVpcEndpointRouteTableAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcEndpointRouteTableAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcEndpointRouteTableAssociationOutputProps>(
    AwsVpcEndpointRouteTableAssociation,
    idFilter,
    baseNode,
    optional,
  )
