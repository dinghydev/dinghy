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

export const AwsCognitoUserPoolDomainInputSchema = TfMetaSchema.extend({
  domain: resolvableValue(z.string()),
  user_pool_id: resolvableValue(z.string()),
  certificate_arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  managed_login_version: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsCognitoUserPoolDomainOutputSchema = z.object({
  aws_account_id: z.string().optional(),
  cloudfront_distribution: z.string().optional(),
  cloudfront_distribution_arn: z.string().optional(),
  cloudfront_distribution_zone_id: z.string().optional(),
  s3_bucket: z.string().optional(),
  version: z.string().optional(),
})

export type AwsCognitoUserPoolDomainInputProps =
  & z.input<typeof AwsCognitoUserPoolDomainInputSchema>
  & NodeProps

export type AwsCognitoUserPoolDomainOutputProps =
  & z.output<typeof AwsCognitoUserPoolDomainOutputSchema>
  & z.output<typeof AwsCognitoUserPoolDomainInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cognito_user_pool_domain

export function AwsCognitoUserPoolDomain(
  props: Partial<AwsCognitoUserPoolDomainInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_user_pool_domain'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCognitoUserPoolDomainInputSchema}
      _outputSchema={AwsCognitoUserPoolDomainOutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoUserPoolDomain = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCognitoUserPoolDomainOutputProps>(
    AwsCognitoUserPoolDomain,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCognitoUserPoolDomains = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCognitoUserPoolDomainOutputProps>(
    AwsCognitoUserPoolDomain,
    idFilter,
    baseNode,
    optional,
  )
