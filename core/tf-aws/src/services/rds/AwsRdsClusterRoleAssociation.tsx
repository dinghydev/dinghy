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

export const AwsRdsClusterRoleAssociationInputSchema = TfMetaSchema.extend({
  db_cluster_identifier: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  feature_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsRdsClusterRoleAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsRdsClusterRoleAssociationInputProps =
  & z.input<typeof AwsRdsClusterRoleAssociationInputSchema>
  & NodeProps

export type AwsRdsClusterRoleAssociationOutputProps =
  & z.output<typeof AwsRdsClusterRoleAssociationOutputSchema>
  & z.output<typeof AwsRdsClusterRoleAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/rds_cluster_role_association

export function AwsRdsClusterRoleAssociation(
  props: Partial<AwsRdsClusterRoleAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rds_cluster_role_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRdsClusterRoleAssociationInputSchema}
      _outputSchema={AwsRdsClusterRoleAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsRdsClusterRoleAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRdsClusterRoleAssociationOutputProps>(
    AwsRdsClusterRoleAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRdsClusterRoleAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRdsClusterRoleAssociationOutputProps>(
    AwsRdsClusterRoleAssociation,
    idFilter,
    baseNode,
    optional,
  )
