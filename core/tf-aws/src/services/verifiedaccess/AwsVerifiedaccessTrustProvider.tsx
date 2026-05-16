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

export const AwsVerifiedaccessTrustProviderInputSchema = TfMetaSchema.extend({
  policy_reference_name: resolvableValue(z.string()),
  trust_provider_type: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  device_options: resolvableValue(
    z.object({
      tenant_id: z.string().optional(),
    }).optional(),
  ),
  device_trust_provider_type: resolvableValue(z.string().optional()),
  native_application_oidc_options: resolvableValue(
    z.object({
      authorization_endpoint: z.string().optional(),
      client_id: z.string().optional(),
      client_secret: z.string(),
      issuer: z.string().optional(),
      public_signing_key_endpoint: z.string().optional(),
      scope: z.string().optional(),
      token_endpoint: z.string().optional(),
      user_info_endpoint: z.string().optional(),
    }).optional(),
  ),
  oidc_options: resolvableValue(
    z.object({
      authorization_endpoint: z.string().optional(),
      client_id: z.string().optional(),
      client_secret: z.string(),
      issuer: z.string().optional(),
      scope: z.string().optional(),
      token_endpoint: z.string().optional(),
      user_info_endpoint: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  sse_specification: resolvableValue(
    z.object({
      customer_managed_key_enabled: z.boolean().optional(),
      kms_key_arn: z.string().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  user_trust_provider_type: resolvableValue(z.string().optional()),
})

export const AwsVerifiedaccessTrustProviderOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsVerifiedaccessTrustProviderInputProps =
  & z.input<typeof AwsVerifiedaccessTrustProviderInputSchema>
  & NodeProps

export type AwsVerifiedaccessTrustProviderOutputProps =
  & z.output<typeof AwsVerifiedaccessTrustProviderOutputSchema>
  & z.output<typeof AwsVerifiedaccessTrustProviderInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/verifiedaccess_trust_provider

export function AwsVerifiedaccessTrustProvider(
  props: Partial<AwsVerifiedaccessTrustProviderInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_verifiedaccess_trust_provider'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVerifiedaccessTrustProviderInputSchema}
      _outputSchema={AwsVerifiedaccessTrustProviderOutputSchema}
      {...props}
    />
  )
}

export const useAwsVerifiedaccessTrustProvider = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVerifiedaccessTrustProviderOutputProps>(
    AwsVerifiedaccessTrustProvider,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVerifiedaccessTrustProviders = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVerifiedaccessTrustProviderOutputProps>(
    AwsVerifiedaccessTrustProvider,
    idFilter,
    baseNode,
    optional,
  )
