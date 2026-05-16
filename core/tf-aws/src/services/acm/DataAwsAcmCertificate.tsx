import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsAcmCertificate } from './AwsAcmCertificate.tsx'

export const DataAwsAcmCertificateInputSchema = TfMetaSchema.extend({
  domain: resolvableValue(z.string().optional()),
  key_types: resolvableValue(z.string().array().optional()),
  most_recent: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  statuses: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  types: resolvableValue(z.string().array().optional()),
})

export const DataAwsAcmCertificateOutputSchema = z.object({
  arn: z.string().optional(),
  certificate: z.string().optional(),
  certificate_chain: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsAcmCertificateInputProps =
  & z.input<typeof DataAwsAcmCertificateInputSchema>
  & NodeProps

export type DataAwsAcmCertificateOutputProps =
  & z.output<typeof DataAwsAcmCertificateOutputSchema>
  & z.output<typeof DataAwsAcmCertificateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/acm_certificate

export function DataAwsAcmCertificate(
  props: Partial<DataAwsAcmCertificateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsAcmCertificate
      _type='aws_acm_certificate'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsAcmCertificateInputSchema}
      _outputSchema={DataAwsAcmCertificateOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsAcmCertificate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsAcmCertificateOutputProps>(
    DataAwsAcmCertificate,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsAcmCertificates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsAcmCertificateOutputProps>(
    DataAwsAcmCertificate,
    idFilter,
    baseNode,
    optional,
  )
