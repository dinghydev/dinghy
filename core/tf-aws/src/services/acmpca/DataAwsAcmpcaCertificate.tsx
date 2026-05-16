import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAcmpcaCertificate } from './AwsAcmpcaCertificate.tsx'

export const DataAwsAcmpcaCertificateInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  certificate_authority_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsAcmpcaCertificateOutputSchema = z.object({
  certificate: z.string().optional(),
  certificate_chain: z.string().optional(),
})

export type DataAwsAcmpcaCertificateInputProps =
  & z.input<typeof DataAwsAcmpcaCertificateInputSchema>
  & NodeProps

export type DataAwsAcmpcaCertificateOutputProps =
  & z.output<typeof DataAwsAcmpcaCertificateOutputSchema>
  & z.output<typeof DataAwsAcmpcaCertificateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/acmpca_certificate

export function DataAwsAcmpcaCertificate(
  props: Partial<DataAwsAcmpcaCertificateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsAcmpcaCertificate
      _type='aws_acmpca_certificate'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsAcmpcaCertificateInputSchema}
      _outputSchema={DataAwsAcmpcaCertificateOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAcmpcaCertificate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsAcmpcaCertificateOutputProps>(
    DataAwsAcmpcaCertificate,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsAcmpcaCertificates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsAcmpcaCertificateOutputProps>(
    DataAwsAcmpcaCertificate,
    idFilter,
    baseNode,
    optional,
  )
