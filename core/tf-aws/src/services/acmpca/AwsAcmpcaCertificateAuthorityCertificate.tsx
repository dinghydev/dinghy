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

export const AwsAcmpcaCertificateAuthorityCertificateInputSchema = TfMetaSchema
  .extend({
    certificate: resolvableValue(z.string()),
    certificate_authority_arn: resolvableValue(z.string()),
    certificate_chain: resolvableValue(z.string().optional()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsAcmpcaCertificateAuthorityCertificateOutputSchema = z.object({})

export const AwsAcmpcaCertificateAuthorityCertificateImportSchema = z.object({
  certificate_authority_arn: resolvableValue(z.string()),
})

export type AwsAcmpcaCertificateAuthorityCertificateInputProps =
  & z.input<typeof AwsAcmpcaCertificateAuthorityCertificateInputSchema>
  & z.input<typeof AwsAcmpcaCertificateAuthorityCertificateImportSchema>
  & NodeProps

export type AwsAcmpcaCertificateAuthorityCertificateOutputProps =
  & z.output<typeof AwsAcmpcaCertificateAuthorityCertificateOutputSchema>
  & z.output<typeof AwsAcmpcaCertificateAuthorityCertificateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/acmpca_certificate_authority_certificate

export function AwsAcmpcaCertificateAuthorityCertificate(
  props: Partial<AwsAcmpcaCertificateAuthorityCertificateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_acmpca_certificate_authority_certificate'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAcmpcaCertificateAuthorityCertificateInputSchema}
      _outputSchema={AwsAcmpcaCertificateAuthorityCertificateOutputSchema}
      _importSchema={AwsAcmpcaCertificateAuthorityCertificateImportSchema}
      {...props}
    />
  )
}

export const useAwsAcmpcaCertificateAuthorityCertificate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAcmpcaCertificateAuthorityCertificateOutputProps>(
    AwsAcmpcaCertificateAuthorityCertificate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAcmpcaCertificateAuthorityCertificates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAcmpcaCertificateAuthorityCertificateOutputProps>(
    AwsAcmpcaCertificateAuthorityCertificate,
    idFilter,
    baseNode,
    optional,
  )
