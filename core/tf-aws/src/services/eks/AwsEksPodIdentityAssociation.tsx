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

export const AwsEksPodIdentityAssociationInputSchema = TfMetaSchema.extend({
  cluster_name: resolvableValue(z.string()),
  namespace: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  service_account: resolvableValue(z.string()),
  disable_session_tags: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  target_role_arn: resolvableValue(z.string().optional()),
})

export const AwsEksPodIdentityAssociationOutputSchema = z.object({
  association_arn: z.string().optional(),
  association_id: z.string().optional(),
  external_id: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsEksPodIdentityAssociationImportSchema = z.object({
  association_id: resolvableValue(z.string()),
  cluster_name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsEksPodIdentityAssociationInputProps =
  & z.input<typeof AwsEksPodIdentityAssociationInputSchema>
  & z.input<typeof AwsEksPodIdentityAssociationImportSchema>
  & NodeProps

export type AwsEksPodIdentityAssociationOutputProps =
  & z.output<typeof AwsEksPodIdentityAssociationOutputSchema>
  & z.output<typeof AwsEksPodIdentityAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/eks_pod_identity_association

export function AwsEksPodIdentityAssociation(
  props: Partial<AwsEksPodIdentityAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eks_pod_identity_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEksPodIdentityAssociationInputSchema}
      _outputSchema={AwsEksPodIdentityAssociationOutputSchema}
      _importSchema={AwsEksPodIdentityAssociationImportSchema}
      {...props}
    />
  )
}

export const useAwsEksPodIdentityAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEksPodIdentityAssociationOutputProps>(
    AwsEksPodIdentityAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEksPodIdentityAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEksPodIdentityAssociationOutputProps>(
    AwsEksPodIdentityAssociation,
    idFilter,
    baseNode,
    optional,
  )
