import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/eks_identity_provider_config

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsEksIdentityProviderConfig(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_eks_identity_provider_config'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEksIdentityProviderConfig = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsEksIdentityProviderConfig, node, id)

export const useAwsEksIdentityProviderConfigs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsEksIdentityProviderConfig, node, id)
