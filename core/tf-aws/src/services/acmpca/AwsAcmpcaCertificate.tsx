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

export const AwsAcmpcaCertificateInputSchema = TfMetaSchema.extend({
  certificate_authority_arn: resolvableValue(z.string()),
  certificate_signing_request: resolvableValue(z.string()),
  signing_algorithm: resolvableValue(z.string()),
  validity: resolvableValue(z.object({
    type: z.string(),
    value: z.string(),
  })),
  api_passthrough: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  template_arn: resolvableValue(z.string().optional()),
})

export const AwsAcmpcaCertificateOutputSchema = z.object({
  arn: z.string().optional(),
  certificate: z.string().optional(),
  certificate_chain: z.string().optional(),
})

export const AwsAcmpcaCertificateImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsAcmpcaCertificateInputProps =
  & z.input<typeof AwsAcmpcaCertificateInputSchema>
  & z.input<typeof AwsAcmpcaCertificateImportSchema>
  & NodeProps

export type AwsAcmpcaCertificateOutputProps =
  & z.output<typeof AwsAcmpcaCertificateOutputSchema>
  & z.output<typeof AwsAcmpcaCertificateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/acmpca_certificate

export function AwsAcmpcaCertificate(
  props: Partial<AwsAcmpcaCertificateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_acmpca_certificate'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAcmpcaCertificateInputSchema}
      _outputSchema={AwsAcmpcaCertificateOutputSchema}
      _importSchema={AwsAcmpcaCertificateImportSchema}
      {...props}
    />
  )
}

export const useAwsAcmpcaCertificate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAcmpcaCertificateOutputProps>(
    AwsAcmpcaCertificate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAcmpcaCertificates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAcmpcaCertificateOutputProps>(
    AwsAcmpcaCertificate,
    idFilter,
    baseNode,
    optional,
  )
