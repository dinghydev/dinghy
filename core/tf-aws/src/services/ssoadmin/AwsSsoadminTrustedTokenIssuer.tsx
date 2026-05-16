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

export const AwsSsoadminTrustedTokenIssuerInputSchema = TfMetaSchema.extend({
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
      }).array().optional(),
    }).array().optional(),
  ),
})

export const AwsSsoadminTrustedTokenIssuerOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsSsoadminTrustedTokenIssuerImportSchema = z.object({
  arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export type AwsSsoadminTrustedTokenIssuerInputProps =
  & z.input<typeof AwsSsoadminTrustedTokenIssuerInputSchema>
  & z.input<typeof AwsSsoadminTrustedTokenIssuerImportSchema>
  & NodeProps

export type AwsSsoadminTrustedTokenIssuerOutputProps =
  & z.output<typeof AwsSsoadminTrustedTokenIssuerOutputSchema>
  & z.output<typeof AwsSsoadminTrustedTokenIssuerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssoadmin_trusted_token_issuer

export function AwsSsoadminTrustedTokenIssuer(
  props: Partial<AwsSsoadminTrustedTokenIssuerInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssoadmin_trusted_token_issuer'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsoadminTrustedTokenIssuerInputSchema}
      _outputSchema={AwsSsoadminTrustedTokenIssuerOutputSchema}
      _importSchema={AwsSsoadminTrustedTokenIssuerImportSchema}
      {...props}
    />
  )
}

export const useAwsSsoadminTrustedTokenIssuer = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsoadminTrustedTokenIssuerOutputProps>(
    AwsSsoadminTrustedTokenIssuer,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsoadminTrustedTokenIssuers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsoadminTrustedTokenIssuerOutputProps>(
    AwsSsoadminTrustedTokenIssuer,
    idFilter,
    baseNode,
    optional,
  )
