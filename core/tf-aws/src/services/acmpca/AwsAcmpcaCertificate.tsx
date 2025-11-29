import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/acmpca_certificate

export const InputSchema = z.object({
  certificate_authority_arn: resolvableValue(z.string()),
  certificate_signing_request: resolvableValue(z.string()),
  signing_algorithm: resolvableValue(z.string()),
  validity: resolvableValue(z.object({
    type: z.string(),
    value: z.string(),
  })),
  api_passthrough: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  template_arn: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  certificate: z.string().optional(),
  certificate_chain: z.string().optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAcmpcaCertificate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_acmpca_certificate'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsAcmpcaCertificate = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAcmpcaCertificate, node, id)

export const useAwsAcmpcaCertificates = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAcmpcaCertificate, node, id)
