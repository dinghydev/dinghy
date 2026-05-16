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

export const DataAwsCognitoUserPoolSigningCertificateInputSchema = TfMetaSchema
  .extend({
    user_pool_id: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsCognitoUserPoolSigningCertificateOutputSchema = z.object({
  certificate: z.string().optional(),
})

export type DataAwsCognitoUserPoolSigningCertificateInputProps =
  & z.input<typeof DataAwsCognitoUserPoolSigningCertificateInputSchema>
  & NodeProps

export type DataAwsCognitoUserPoolSigningCertificateOutputProps =
  & z.output<typeof DataAwsCognitoUserPoolSigningCertificateOutputSchema>
  & z.output<typeof DataAwsCognitoUserPoolSigningCertificateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cognito_user_pool_signing_certificate

export function DataAwsCognitoUserPoolSigningCertificate(
  props: Partial<DataAwsCognitoUserPoolSigningCertificateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_user_pool_signing_certificate'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCognitoUserPoolSigningCertificateInputSchema}
      _outputSchema={DataAwsCognitoUserPoolSigningCertificateOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCognitoUserPoolSigningCertificate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsCognitoUserPoolSigningCertificateOutputProps>(
    DataAwsCognitoUserPoolSigningCertificate,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCognitoUserPoolSigningCertificates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCognitoUserPoolSigningCertificateOutputProps>(
    DataAwsCognitoUserPoolSigningCertificate,
    idFilter,
    baseNode,
    optional,
  )
