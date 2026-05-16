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

export const AwsElasticacheUserGroupAssociationInputSchema = TfMetaSchema
  .extend({
    user_group_id: resolvableValue(z.string()),
    user_id: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsElasticacheUserGroupAssociationOutputSchema = z.object({})

export type AwsElasticacheUserGroupAssociationInputProps =
  & z.input<typeof AwsElasticacheUserGroupAssociationInputSchema>
  & NodeProps

export type AwsElasticacheUserGroupAssociationOutputProps =
  & z.output<typeof AwsElasticacheUserGroupAssociationOutputSchema>
  & z.output<typeof AwsElasticacheUserGroupAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/elasticache_user_group_association

export function AwsElasticacheUserGroupAssociation(
  props: Partial<AwsElasticacheUserGroupAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elasticache_user_group_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsElasticacheUserGroupAssociationInputSchema}
      _outputSchema={AwsElasticacheUserGroupAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsElasticacheUserGroupAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsElasticacheUserGroupAssociationOutputProps>(
    AwsElasticacheUserGroupAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsElasticacheUserGroupAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsElasticacheUserGroupAssociationOutputProps>(
    AwsElasticacheUserGroupAssociation,
    idFilter,
    baseNode,
    optional,
  )
