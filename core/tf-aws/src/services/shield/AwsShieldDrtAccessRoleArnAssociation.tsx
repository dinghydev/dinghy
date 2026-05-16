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

export const AwsShieldDrtAccessRoleArnAssociationInputSchema = TfMetaSchema
  .extend({
    role_arn: resolvableValue(z.string()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsShieldDrtAccessRoleArnAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsShieldDrtAccessRoleArnAssociationInputProps =
  & z.input<typeof AwsShieldDrtAccessRoleArnAssociationInputSchema>
  & NodeProps

export type AwsShieldDrtAccessRoleArnAssociationOutputProps =
  & z.output<typeof AwsShieldDrtAccessRoleArnAssociationOutputSchema>
  & z.output<typeof AwsShieldDrtAccessRoleArnAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/shield_drt_access_role_arn_association

export function AwsShieldDrtAccessRoleArnAssociation(
  props: Partial<AwsShieldDrtAccessRoleArnAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_shield_drt_access_role_arn_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsShieldDrtAccessRoleArnAssociationInputSchema}
      _outputSchema={AwsShieldDrtAccessRoleArnAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsShieldDrtAccessRoleArnAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsShieldDrtAccessRoleArnAssociationOutputProps>(
    AwsShieldDrtAccessRoleArnAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsShieldDrtAccessRoleArnAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsShieldDrtAccessRoleArnAssociationOutputProps>(
    AwsShieldDrtAccessRoleArnAssociation,
    idFilter,
    baseNode,
    optional,
  )
