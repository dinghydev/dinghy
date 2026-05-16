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

export const AwsRoute53profilesResourceAssociationInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    profile_id: resolvableValue(z.string()),
    resource_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    resource_properties: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        read: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsRoute53profilesResourceAssociationOutputSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  owner_id: z.string().optional(),
  resource_type: z.string().optional(),
  status: z.string().optional(),
  status_message: z.string().optional(),
})

export type AwsRoute53profilesResourceAssociationInputProps =
  & z.input<typeof AwsRoute53profilesResourceAssociationInputSchema>
  & NodeProps

export type AwsRoute53profilesResourceAssociationOutputProps =
  & z.output<typeof AwsRoute53profilesResourceAssociationOutputSchema>
  & z.output<typeof AwsRoute53profilesResourceAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53profiles_resource_association

export function AwsRoute53profilesResourceAssociation(
  props: Partial<AwsRoute53profilesResourceAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53profiles_resource_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53profilesResourceAssociationInputSchema}
      _outputSchema={AwsRoute53profilesResourceAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53profilesResourceAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53profilesResourceAssociationOutputProps>(
    AwsRoute53profilesResourceAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53profilesResourceAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53profilesResourceAssociationOutputProps>(
    AwsRoute53profilesResourceAssociation,
    idFilter,
    baseNode,
    optional,
  )
