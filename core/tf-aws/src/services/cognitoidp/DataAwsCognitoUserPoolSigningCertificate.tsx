import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cognito_user_pool_signing_certificate

export const InputSchema = z.object({
  user_pool_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  certificate: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCognitoUserPoolSigningCertificate(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_user_pool_signing_certificate'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCognitoUserPoolSigningCertificate = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(DataAwsCognitoUserPoolSigningCertificate, node, id)

export const useDataAwsCognitoUserPoolSigningCertificates = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(DataAwsCognitoUserPoolSigningCertificate, node, id)
