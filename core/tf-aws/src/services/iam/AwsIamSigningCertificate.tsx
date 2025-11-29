import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/iam_signing_certificate

export const InputSchema = z.object({
  certificate_body: resolvableValue(z.string()),
  user_name: resolvableValue(z.string()),
  status: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  certificate_id: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsIamSigningCertificate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_signing_certificate'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIamSigningCertificate = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsIamSigningCertificate, node, id)

export const useAwsIamSigningCertificates = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsIamSigningCertificate, node, id)
