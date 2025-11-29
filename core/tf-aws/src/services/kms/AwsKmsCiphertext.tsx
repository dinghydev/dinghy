import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/kms_ciphertext

export const InputSchema = z.object({
  key_id: resolvableValue(z.string()),
  plaintext: resolvableValue(z.string()),
  context: resolvableValue(z.record(z.string(), z.string()).optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  ciphertext_blob: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsKmsCiphertext(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kms_ciphertext'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsKmsCiphertext = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsKmsCiphertext, node, id)

export const useAwsKmsCiphertexts = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsKmsCiphertext, node, id)
