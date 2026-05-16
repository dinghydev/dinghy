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

export const AwsCodeartifactRepositoryPermissionsPolicyInputSchema =
  TfMetaSchema.extend({
    domain: resolvableValue(z.string()),
    policy_document: resolvableValue(z.string()),
    repository: resolvableValue(z.string()),
    domain_owner: resolvableValue(z.string().optional()),
    policy_revision: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsCodeartifactRepositoryPermissionsPolicyOutputSchema = z.object({
  id: z.string().optional(),
  resource_arn: z.string().optional(),
})

export const AwsCodeartifactRepositoryPermissionsPolicyImportSchema = z.object({
  resource_arn: resolvableValue(z.string()),
})

export type AwsCodeartifactRepositoryPermissionsPolicyInputProps =
  & z.input<typeof AwsCodeartifactRepositoryPermissionsPolicyInputSchema>
  & z.input<typeof AwsCodeartifactRepositoryPermissionsPolicyImportSchema>
  & NodeProps

export type AwsCodeartifactRepositoryPermissionsPolicyOutputProps =
  & z.output<typeof AwsCodeartifactRepositoryPermissionsPolicyOutputSchema>
  & z.output<typeof AwsCodeartifactRepositoryPermissionsPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codeartifact_repository_permissions_policy

export function AwsCodeartifactRepositoryPermissionsPolicy(
  props: Partial<AwsCodeartifactRepositoryPermissionsPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codeartifact_repository_permissions_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodeartifactRepositoryPermissionsPolicyInputSchema}
      _outputSchema={AwsCodeartifactRepositoryPermissionsPolicyOutputSchema}
      _importSchema={AwsCodeartifactRepositoryPermissionsPolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsCodeartifactRepositoryPermissionsPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodeartifactRepositoryPermissionsPolicyOutputProps>(
    AwsCodeartifactRepositoryPermissionsPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodeartifactRepositoryPermissionsPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodeartifactRepositoryPermissionsPolicyOutputProps>(
    AwsCodeartifactRepositoryPermissionsPolicy,
    idFilter,
    baseNode,
    optional,
  )
