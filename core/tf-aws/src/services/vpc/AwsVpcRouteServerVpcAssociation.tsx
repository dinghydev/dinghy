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

export const AwsVpcRouteServerVpcAssociationInputSchema = TfMetaSchema.extend({
  route_server_id: resolvableValue(z.string()),
  vpc_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsVpcRouteServerVpcAssociationOutputSchema = z.object({})

export type AwsVpcRouteServerVpcAssociationInputProps =
  & z.input<typeof AwsVpcRouteServerVpcAssociationInputSchema>
  & NodeProps

export type AwsVpcRouteServerVpcAssociationOutputProps =
  & z.output<typeof AwsVpcRouteServerVpcAssociationOutputSchema>
  & z.output<typeof AwsVpcRouteServerVpcAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_route_server_vpc_association

export function AwsVpcRouteServerVpcAssociation(
  props: Partial<AwsVpcRouteServerVpcAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_route_server_vpc_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcRouteServerVpcAssociationInputSchema}
      _outputSchema={AwsVpcRouteServerVpcAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcRouteServerVpcAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcRouteServerVpcAssociationOutputProps>(
    AwsVpcRouteServerVpcAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcRouteServerVpcAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcRouteServerVpcAssociationOutputProps>(
    AwsVpcRouteServerVpcAssociation,
    idFilter,
    baseNode,
    optional,
  )
