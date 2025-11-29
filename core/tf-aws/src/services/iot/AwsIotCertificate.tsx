import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/iot_certificate

export const InputSchema = z.object({
  active: resolvableValue(z.boolean()),
  ca_pem: resolvableValue(z.string().optional()),
  csr: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  ca_certificate_id: z.string().optional(),
  certificate_pem: z.string().optional(),
  id: z.string().optional(),
  private_key: z.string().optional(),
  public_key: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsIotCertificate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iot_certificate'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsIotCertificate = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsIotCertificate, node, id)

export const useAwsIotCertificates = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsIotCertificate, node, id)
