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

export const InputSchema = z.object({
  domain: resolvableValue(z.string()),
  user_pool_id: resolvableValue(z.string()),
  certificate_arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  managed_login_version: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  aws_account_id: z.string().optional(),
  cloudfront_distribution: z.string().optional(),
  cloudfront_distribution_arn: z.string().optional(),
  cloudfront_distribution_zone_id: z.string().optional(),
  s3_bucket: z.string().optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cognito_user_pool_domain

export function AwsCognitoUserPoolDomain(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_user_pool_domain'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoUserPoolDomain = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsCognitoUserPoolDomain,
    idFilter,
    baseNode,
    optional,
  )
