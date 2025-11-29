import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ssoadmin_trusted_token_issuer

export const InputSchema = z.object({
  instance_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  trusted_token_issuer_type: resolvableValue(z.string()),
  client_token: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  trusted_token_issuer_configuration: resolvableValue(
    z.object({
      oidc_jwt_configuration: z.object({
        claim_attribute_path: z.string(),
        identity_store_attribute_path: z.string(),
        issuer_url: z.string(),
        jwks_retrieval_option: z.string(),
      }).optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSsoadminTrustedTokenIssuer(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_trusted_token_issuer'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSsoadminTrustedTokenIssuer = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSsoadminTrustedTokenIssuer, node, id)

export const useAwsSsoadminTrustedTokenIssuers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSsoadminTrustedTokenIssuer, node, id)
