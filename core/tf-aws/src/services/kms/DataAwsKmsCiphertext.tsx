import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsKmsCiphertext } from './AwsKmsCiphertext.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/kms_ciphertext

export const InputSchema = z.object({
  key_id: resolvableValue(z.string()),
  plaintext: resolvableValue(z.string()),
  context: resolvableValue(z.record(z.string(), z.string()).optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  ciphertext_blob: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsKmsCiphertext(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsKmsCiphertext
      _type='aws_kms_ciphertext'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsKmsCiphertext = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsKmsCiphertext, node, id)

export const useDataAwsKmsCiphertexts = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsKmsCiphertext, node, id)
