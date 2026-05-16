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

export const AwsDmsCertificateInputSchema = TfMetaSchema.extend({
  certificate_id: resolvableValue(z.string()),
  certificate_pem: resolvableValue(z.string().optional()),
  certificate_wallet: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsDmsCertificateOutputSchema = z.object({
  certificate_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsDmsCertificateInputProps =
  & z.input<typeof AwsDmsCertificateInputSchema>
  & NodeProps

export type AwsDmsCertificateOutputProps =
  & z.output<typeof AwsDmsCertificateOutputSchema>
  & z.output<typeof AwsDmsCertificateInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dms_certificate

export function AwsDmsCertificate(props: Partial<AwsDmsCertificateInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dms_certificate'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDmsCertificateInputSchema}
      _outputSchema={AwsDmsCertificateOutputSchema}
      {...props}
    />
  )
}

export const useAwsDmsCertificate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDmsCertificateOutputProps>(
    AwsDmsCertificate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDmsCertificates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDmsCertificateOutputProps>(
    AwsDmsCertificate,
    idFilter,
    baseNode,
    optional,
  )
