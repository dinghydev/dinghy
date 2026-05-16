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

export const AwsIotCertificateInputSchema = TfMetaSchema.extend({
  active: resolvableValue(z.boolean()),
  ca_pem: resolvableValue(z.string().optional()),
  certificate_pem: resolvableValue(z.string().optional()),
  csr: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsIotCertificateOutputSchema = z.object({
  arn: z.string().optional(),
  ca_certificate_id: z.string().optional(),
  certificate_pem: z.string().optional(),
  id: z.string().optional(),
  private_key: z.string().optional(),
  public_key: z.string().optional(),
})

export type AwsIotCertificateInputProps =
  & z.input<typeof AwsIotCertificateInputSchema>
  & NodeProps

export type AwsIotCertificateOutputProps =
  & z.output<typeof AwsIotCertificateOutputSchema>
  & z.output<typeof AwsIotCertificateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iot_certificate

export function AwsIotCertificate(props: Partial<AwsIotCertificateInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_certificate'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIotCertificateInputSchema}
      _outputSchema={AwsIotCertificateOutputSchema}
      {...props}
    />
  )
}

export const useAwsIotCertificate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIotCertificateOutputProps>(
    AwsIotCertificate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIotCertificates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIotCertificateOutputProps>(
    AwsIotCertificate,
    idFilter,
    baseNode,
    optional,
  )
