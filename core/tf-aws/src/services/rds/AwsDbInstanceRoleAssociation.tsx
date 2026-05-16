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

export const AwsDbInstanceRoleAssociationInputSchema = TfMetaSchema.extend({
  db_instance_identifier: resolvableValue(z.string()),
  feature_name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsDbInstanceRoleAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsDbInstanceRoleAssociationInputProps =
  & z.input<typeof AwsDbInstanceRoleAssociationInputSchema>
  & NodeProps

export type AwsDbInstanceRoleAssociationOutputProps =
  & z.output<typeof AwsDbInstanceRoleAssociationOutputSchema>
  & z.output<typeof AwsDbInstanceRoleAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/db_instance_role_association

export function AwsDbInstanceRoleAssociation(
  props: Partial<AwsDbInstanceRoleAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_db_instance_role_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDbInstanceRoleAssociationInputSchema}
      _outputSchema={AwsDbInstanceRoleAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsDbInstanceRoleAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDbInstanceRoleAssociationOutputProps>(
    AwsDbInstanceRoleAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDbInstanceRoleAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDbInstanceRoleAssociationOutputProps>(
    AwsDbInstanceRoleAssociation,
    idFilter,
    baseNode,
    optional,
  )
