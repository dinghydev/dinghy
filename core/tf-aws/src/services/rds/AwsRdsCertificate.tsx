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

export const AwsRdsCertificateInputSchema = TfMetaSchema.extend({
  certificate_identifier: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsRdsCertificateOutputSchema = z.object({})

export type AwsRdsCertificateInputProps =
  & z.input<typeof AwsRdsCertificateInputSchema>
  & NodeProps

export type AwsRdsCertificateOutputProps =
  & z.output<typeof AwsRdsCertificateOutputSchema>
  & z.output<typeof AwsRdsCertificateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/rds_certificate

export function AwsRdsCertificate(props: Partial<AwsRdsCertificateInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rds_certificate'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRdsCertificateInputSchema}
      _outputSchema={AwsRdsCertificateOutputSchema}
      {...props}
    />
  )
}

export const useAwsRdsCertificate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRdsCertificateOutputProps>(
    AwsRdsCertificate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRdsCertificates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRdsCertificateOutputProps>(
    AwsRdsCertificate,
    idFilter,
    baseNode,
    optional,
  )
