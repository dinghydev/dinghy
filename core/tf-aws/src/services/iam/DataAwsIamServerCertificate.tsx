import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsIamServerCertificate } from './AwsIamServerCertificate.tsx'

export const DataAwsIamServerCertificateInputSchema = TfMetaSchema.extend({
  latest: resolvableValue(z.boolean().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  path_prefix: resolvableValue(z.string().optional()),
})

export const DataAwsIamServerCertificateOutputSchema = z.object({
  arn: z.string().optional(),
  certificate_body: z.string().optional(),
  certificate_chain: z.string().optional(),
  expiration_date: z.string().optional(),
  id: z.string().optional(),
  path: z.string().optional(),
  upload_date: z.string().optional(),
})

export type DataAwsIamServerCertificateInputProps =
  & z.input<typeof DataAwsIamServerCertificateInputSchema>
  & NodeProps

export type DataAwsIamServerCertificateOutputProps =
  & z.output<typeof DataAwsIamServerCertificateOutputSchema>
  & z.output<typeof DataAwsIamServerCertificateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/iam_server_certificate

export function DataAwsIamServerCertificate(
  props: Partial<DataAwsIamServerCertificateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsIamServerCertificate
      _type='aws_iam_server_certificate'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIamServerCertificateInputSchema}
      _outputSchema={DataAwsIamServerCertificateOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsIamServerCertificate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsIamServerCertificateOutputProps>(
    DataAwsIamServerCertificate,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsIamServerCertificates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIamServerCertificateOutputProps>(
    DataAwsIamServerCertificate,
    idFilter,
    baseNode,
    optional,
  )
