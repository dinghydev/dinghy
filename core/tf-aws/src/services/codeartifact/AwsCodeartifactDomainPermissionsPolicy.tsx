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

export const AwsCodeartifactDomainPermissionsPolicyInputSchema = TfMetaSchema
  .extend({
    domain: resolvableValue(z.string()),
    domain_owner: resolvableValue(z.string().optional()),
    policy_document: resolvableValue(z.string().optional()),
    policy_revision: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsCodeartifactDomainPermissionsPolicyOutputSchema = z.object({
  id: z.string().optional(),
  resource_arn: z.string().optional(),
})

export const AwsCodeartifactDomainPermissionsPolicyImportSchema = z.object({
  resource_arn: resolvableValue(z.string()),
})

export type AwsCodeartifactDomainPermissionsPolicyInputProps =
  & z.input<typeof AwsCodeartifactDomainPermissionsPolicyInputSchema>
  & z.input<typeof AwsCodeartifactDomainPermissionsPolicyImportSchema>
  & NodeProps

export type AwsCodeartifactDomainPermissionsPolicyOutputProps =
  & z.output<typeof AwsCodeartifactDomainPermissionsPolicyOutputSchema>
  & z.output<typeof AwsCodeartifactDomainPermissionsPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codeartifact_domain_permissions_policy

export function AwsCodeartifactDomainPermissionsPolicy(
  props: Partial<AwsCodeartifactDomainPermissionsPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codeartifact_domain_permissions_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodeartifactDomainPermissionsPolicyInputSchema}
      _outputSchema={AwsCodeartifactDomainPermissionsPolicyOutputSchema}
      _importSchema={AwsCodeartifactDomainPermissionsPolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsCodeartifactDomainPermissionsPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodeartifactDomainPermissionsPolicyOutputProps>(
    AwsCodeartifactDomainPermissionsPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodeartifactDomainPermissionsPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodeartifactDomainPermissionsPolicyOutputProps>(
    AwsCodeartifactDomainPermissionsPolicy,
    idFilter,
    baseNode,
    optional,
  )
