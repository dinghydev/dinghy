import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/verifiedaccess_trust_provider

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVerifiedaccessTrustProvider(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_verifiedaccess_trust_provider'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVerifiedaccessTrustProvider = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsVerifiedaccessTrustProvider, node, id)

export const useAwsVerifiedaccessTrustProviders = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsVerifiedaccessTrustProvider, node, id)
