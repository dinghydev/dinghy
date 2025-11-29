import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudfrontkeyvaluestore_key

export const InputSchema = z.object({
  __key: resolvableValue(z.string()),
  key_value_store_arn: resolvableValue(z.string()),
  value: resolvableValue(z.string()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  total_size_in_bytes: z.number().optional(),
})

export const ImportSchema = z.object({
  __key: resolvableValue(z.string()),
  key_value_store_arn: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudfrontkeyvaluestoreKey(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfrontkeyvaluestore_key'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontkeyvaluestoreKey = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCloudfrontkeyvaluestoreKey, node, id)

export const useAwsCloudfrontkeyvaluestoreKeys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCloudfrontkeyvaluestoreKey, node, id)
