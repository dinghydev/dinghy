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

export const AwsEksAccessPolicyAssociationInputSchema = TfMetaSchema.extend({
  access_scope: resolvableValue(z.object({
    namespaces: z.string().array().optional(),
    type: z.string(),
  })),
  cluster_name: resolvableValue(z.string()),
  policy_arn: resolvableValue(z.string()),
  principal_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsEksAccessPolicyAssociationOutputSchema = z.object({
  associated_at: z.string().optional(),
  modified_at: z.string().optional(),
})

export const AwsEksAccessPolicyAssociationImportSchema = z.object({
  cluster_name: resolvableValue(z.string()),
  policy_arn: resolvableValue(z.string()),
  principal_arn: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsEksAccessPolicyAssociationInputProps =
  & z.input<typeof AwsEksAccessPolicyAssociationInputSchema>
  & z.input<typeof AwsEksAccessPolicyAssociationImportSchema>
  & NodeProps

export type AwsEksAccessPolicyAssociationOutputProps =
  & z.output<typeof AwsEksAccessPolicyAssociationOutputSchema>
  & z.output<typeof AwsEksAccessPolicyAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/eks_access_policy_association

export function AwsEksAccessPolicyAssociation(
  props: Partial<AwsEksAccessPolicyAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eks_access_policy_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEksAccessPolicyAssociationInputSchema}
      _outputSchema={AwsEksAccessPolicyAssociationOutputSchema}
      _importSchema={AwsEksAccessPolicyAssociationImportSchema}
      {...props}
    />
  )
}

export const useAwsEksAccessPolicyAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEksAccessPolicyAssociationOutputProps>(
    AwsEksAccessPolicyAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEksAccessPolicyAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEksAccessPolicyAssociationOutputProps>(
    AwsEksAccessPolicyAssociation,
    idFilter,
    baseNode,
    optional,
  )
