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

export const AwsTransferCertificateInputSchema = TfMetaSchema.extend({
  certificate: resolvableValue(z.string()),
  usage: resolvableValue(z.string()),
  certificate_chain: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  private_key: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsTransferCertificateOutputSchema = z.object({
  active_date: z.string().optional(),
  arn: z.string().optional(),
  certificate_id: z.string().optional(),
  inactive_date: z.string().optional(),
})

export type AwsTransferCertificateInputProps =
  & z.input<typeof AwsTransferCertificateInputSchema>
  & NodeProps

export type AwsTransferCertificateOutputProps =
  & z.output<typeof AwsTransferCertificateOutputSchema>
  & z.output<typeof AwsTransferCertificateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transfer_certificate

export function AwsTransferCertificate(
  props: Partial<AwsTransferCertificateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_transfer_certificate'
      _category='resource'
      _title={_title}
      _inputSchema={AwsTransferCertificateInputSchema}
      _outputSchema={AwsTransferCertificateOutputSchema}
      {...props}
    />
  )
}

export const useAwsTransferCertificate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsTransferCertificateOutputProps>(
    AwsTransferCertificate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsTransferCertificates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsTransferCertificateOutputProps>(
    AwsTransferCertificate,
    idFilter,
    baseNode,
    optional,
  )
