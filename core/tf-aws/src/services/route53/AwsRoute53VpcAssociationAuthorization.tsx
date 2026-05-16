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

export const AwsRoute53VpcAssociationAuthorizationInputSchema = TfMetaSchema
  .extend({
    vpc_id: resolvableValue(z.string()),
    zone_id: resolvableValue(z.string()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        read: z.string().optional(),
      }).optional(),
    ),
    vpc_region: resolvableValue(z.string().optional()),
  })

export const AwsRoute53VpcAssociationAuthorizationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsRoute53VpcAssociationAuthorizationInputProps =
  & z.input<typeof AwsRoute53VpcAssociationAuthorizationInputSchema>
  & NodeProps

export type AwsRoute53VpcAssociationAuthorizationOutputProps =
  & z.output<typeof AwsRoute53VpcAssociationAuthorizationOutputSchema>
  & z.output<typeof AwsRoute53VpcAssociationAuthorizationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53_vpc_association_authorization

export function AwsRoute53VpcAssociationAuthorization(
  props: Partial<AwsRoute53VpcAssociationAuthorizationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_vpc_association_authorization'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53VpcAssociationAuthorizationInputSchema}
      _outputSchema={AwsRoute53VpcAssociationAuthorizationOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53VpcAssociationAuthorization = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53VpcAssociationAuthorizationOutputProps>(
    AwsRoute53VpcAssociationAuthorization,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53VpcAssociationAuthorizations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53VpcAssociationAuthorizationOutputProps>(
    AwsRoute53VpcAssociationAuthorization,
    idFilter,
    baseNode,
    optional,
  )
