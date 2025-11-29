import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/transfer_certificate

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  active_date: z.string().optional(),
  arn: z.string().optional(),
  certificate_id: z.string().optional(),
  inactive_date: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsTransferCertificate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_transfer_certificate'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsTransferCertificate = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsTransferCertificate, node, id)

export const useAwsTransferCertificates = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsTransferCertificate, node, id)
