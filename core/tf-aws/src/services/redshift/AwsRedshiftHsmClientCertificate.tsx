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

export const AwsRedshiftHsmClientCertificateInputSchema = TfMetaSchema.extend({
  hsm_client_certificate_identifier: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsRedshiftHsmClientCertificateOutputSchema = z.object({
  arn: z.string().optional(),
  hsm_client_certificate_public_key: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRedshiftHsmClientCertificateInputProps =
  & z.input<typeof AwsRedshiftHsmClientCertificateInputSchema>
  & NodeProps

export type AwsRedshiftHsmClientCertificateOutputProps =
  & z.output<typeof AwsRedshiftHsmClientCertificateOutputSchema>
  & z.output<typeof AwsRedshiftHsmClientCertificateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/redshift_hsm_client_certificate

export function AwsRedshiftHsmClientCertificate(
  props: Partial<AwsRedshiftHsmClientCertificateInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_redshift_hsm_client_certificate'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRedshiftHsmClientCertificateInputSchema}
      _outputSchema={AwsRedshiftHsmClientCertificateOutputSchema}
      {...props}
    />
  )
}

export const useAwsRedshiftHsmClientCertificate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRedshiftHsmClientCertificateOutputProps>(
    AwsRedshiftHsmClientCertificate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRedshiftHsmClientCertificates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRedshiftHsmClientCertificateOutputProps>(
    AwsRedshiftHsmClientCertificate,
    idFilter,
    baseNode,
    optional,
  )
