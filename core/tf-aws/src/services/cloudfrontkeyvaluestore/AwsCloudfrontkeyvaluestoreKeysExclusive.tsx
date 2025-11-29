import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudfrontkeyvaluestore_keys_exclusive

export const InputSchema = z.object({
  key_value_store_arn: resolvableValue(z.string()),
  max_batch_size: resolvableValue(z.number().optional()),
  resource_key_value_pair: resolvableValue(
    z.object({
      key: z.string(),
      value: z.string(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({
  total_size_in_bytes: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudfrontkeyvaluestoreKeysExclusive(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfrontkeyvaluestore_keys_exclusive'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontkeyvaluestoreKeysExclusive = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsCloudfrontkeyvaluestoreKeysExclusive, node, id)

export const useAwsCloudfrontkeyvaluestoreKeysExclusives = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsCloudfrontkeyvaluestoreKeysExclusive, node, id)
