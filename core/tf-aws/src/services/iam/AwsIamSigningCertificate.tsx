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

export const AwsIamSigningCertificateInputSchema = TfMetaSchema.extend({
  certificate_body: resolvableValue(z.string()),
  user_name: resolvableValue(z.string()),
  status: resolvableValue(z.string().optional()),
})

export const AwsIamSigningCertificateOutputSchema = z.object({
  certificate_id: z.string().optional(),
  id: z.string().optional(),
})

export type AwsIamSigningCertificateInputProps =
  & z.input<typeof AwsIamSigningCertificateInputSchema>
  & NodeProps

export type AwsIamSigningCertificateOutputProps =
  & z.output<typeof AwsIamSigningCertificateOutputSchema>
  & z.output<typeof AwsIamSigningCertificateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_signing_certificate

export function AwsIamSigningCertificate(
  props: Partial<AwsIamSigningCertificateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_signing_certificate'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamSigningCertificateInputSchema}
      _outputSchema={AwsIamSigningCertificateOutputSchema}
      {...props}
    />
  )
}

export const useAwsIamSigningCertificate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamSigningCertificateOutputProps>(
    AwsIamSigningCertificate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamSigningCertificates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamSigningCertificateOutputProps>(
    AwsIamSigningCertificate,
    idFilter,
    baseNode,
    optional,
  )
