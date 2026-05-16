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

export const AwsIamServerCertificateInputSchema = TfMetaSchema.extend({
  certificate_body: resolvableValue(z.string()),
  private_key: resolvableValue(z.string()),
  certificate_chain: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  path: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsIamServerCertificateOutputSchema = z.object({
  arn: z.string().optional(),
  expiration: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  upload_date: z.string().optional(),
})

export type AwsIamServerCertificateInputProps =
  & z.input<typeof AwsIamServerCertificateInputSchema>
  & NodeProps

export type AwsIamServerCertificateOutputProps =
  & z.output<typeof AwsIamServerCertificateOutputSchema>
  & z.output<typeof AwsIamServerCertificateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_server_certificate

export function AwsIamServerCertificate(
  props: Partial<AwsIamServerCertificateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_server_certificate'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamServerCertificateInputSchema}
      _outputSchema={AwsIamServerCertificateOutputSchema}
      {...props}
    />
  )
}

export const useAwsIamServerCertificate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamServerCertificateOutputProps>(
    AwsIamServerCertificate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamServerCertificates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamServerCertificateOutputProps>(
    AwsIamServerCertificate,
    idFilter,
    baseNode,
    optional,
  )
