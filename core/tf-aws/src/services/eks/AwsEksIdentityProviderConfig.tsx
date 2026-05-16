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

export const AwsEksIdentityProviderConfigInputSchema = TfMetaSchema.extend({
  cluster_name: resolvableValue(z.string()),
  oidc: resolvableValue(z.object({
    client_id: z.string(),
    groups_claim: z.string().optional(),
    groups_prefix: z.string().optional(),
    identity_provider_config_name: z.string(),
    issuer_url: z.string(),
    required_claims: z.record(z.string(), z.string()).optional(),
    username_claim: z.string().optional(),
    username_prefix: z.string().optional(),
  })),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsEksIdentityProviderConfigOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  identity_provider_config_name: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsEksIdentityProviderConfigImportSchema = z.object({
  cluster_name: resolvableValue(z.string()),
  identity_provider_config_name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsEksIdentityProviderConfigInputProps =
  & z.input<typeof AwsEksIdentityProviderConfigInputSchema>
  & z.input<typeof AwsEksIdentityProviderConfigImportSchema>
  & NodeProps

export type AwsEksIdentityProviderConfigOutputProps =
  & z.output<typeof AwsEksIdentityProviderConfigOutputSchema>
  & z.output<typeof AwsEksIdentityProviderConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/eks_identity_provider_config

export function AwsEksIdentityProviderConfig(
  props: Partial<AwsEksIdentityProviderConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eks_identity_provider_config'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEksIdentityProviderConfigInputSchema}
      _outputSchema={AwsEksIdentityProviderConfigOutputSchema}
      _importSchema={AwsEksIdentityProviderConfigImportSchema}
      {...props}
    />
  )
}

export const useAwsEksIdentityProviderConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEksIdentityProviderConfigOutputProps>(
    AwsEksIdentityProviderConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEksIdentityProviderConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEksIdentityProviderConfigOutputProps>(
    AwsEksIdentityProviderConfig,
    idFilter,
    baseNode,
    optional,
  )
