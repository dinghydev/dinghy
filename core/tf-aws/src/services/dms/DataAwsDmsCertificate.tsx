import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDmsCertificate } from './AwsDmsCertificate.tsx'

export const DataAwsDmsCertificateInputSchema = TfMetaSchema.extend({
  certificate_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const DataAwsDmsCertificateOutputSchema = z.object({
  certificate_arn: z.string().optional(),
  certificate_creation_date: z.string().optional(),
  certificate_owner: z.string().optional(),
  certificate_pem: z.string().optional(),
  certificate_wallet: z.string().optional(),
  key_length: z.number().optional(),
  signing_algorithm: z.string().optional(),
  valid_from_date: z.string().optional(),
  valid_to_date: z.string().optional(),
})

export type DataAwsDmsCertificateInputProps =
  & z.input<typeof DataAwsDmsCertificateInputSchema>
  & NodeProps

export type DataAwsDmsCertificateOutputProps =
  & z.output<typeof DataAwsDmsCertificateOutputSchema>
  & z.output<typeof DataAwsDmsCertificateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/dms_certificate

export function DataAwsDmsCertificate(
  props: Partial<DataAwsDmsCertificateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsDmsCertificate
      _type='aws_dms_certificate'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsDmsCertificateInputSchema}
      _outputSchema={DataAwsDmsCertificateOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDmsCertificate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsDmsCertificateOutputProps>(
    DataAwsDmsCertificate,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsDmsCertificates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsDmsCertificateOutputProps>(
    DataAwsDmsCertificate,
    idFilter,
    baseNode,
    optional,
  )
