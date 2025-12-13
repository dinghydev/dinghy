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

export const InputSchema = z.object({
  key_id: resolvableValue(z.string()),
  plaintext: resolvableValue(z.string()),
  context: resolvableValue(z.record(z.string(), z.string()).optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  ciphertext_blob: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/kms_ciphertext

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

export const useAwsKmsCiphertext = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsKmsCiphertext, idFilter, baseNode)

export const useAwsKmsCiphertexts = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsKmsCiphertext, idFilter, baseNode)
