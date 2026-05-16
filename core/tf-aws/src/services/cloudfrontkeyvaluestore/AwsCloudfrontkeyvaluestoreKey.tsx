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

export const AwsCloudfrontkeyvaluestoreKeyInputSchema = TfMetaSchema.extend({
  __key: resolvableValue(z.string()),
  key_value_store_arn: resolvableValue(z.string()),
  value: resolvableValue(z.string()),
})

export const AwsCloudfrontkeyvaluestoreKeyOutputSchema = z.object({
  id: z.string().optional(),
  total_size_in_bytes: z.number().optional(),
})

export const AwsCloudfrontkeyvaluestoreKeyImportSchema = z.object({
  __key: resolvableValue(z.string()),
  key_value_store_arn: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
})

export type AwsCloudfrontkeyvaluestoreKeyInputProps =
  & z.input<typeof AwsCloudfrontkeyvaluestoreKeyInputSchema>
  & z.input<typeof AwsCloudfrontkeyvaluestoreKeyImportSchema>
  & NodeProps

export type AwsCloudfrontkeyvaluestoreKeyOutputProps =
  & z.output<typeof AwsCloudfrontkeyvaluestoreKeyOutputSchema>
  & z.output<typeof AwsCloudfrontkeyvaluestoreKeyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudfrontkeyvaluestore_key

export function AwsCloudfrontkeyvaluestoreKey(
  props: Partial<AwsCloudfrontkeyvaluestoreKeyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudfrontkeyvaluestore_key'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudfrontkeyvaluestoreKeyInputSchema}
      _outputSchema={AwsCloudfrontkeyvaluestoreKeyOutputSchema}
      _importSchema={AwsCloudfrontkeyvaluestoreKeyImportSchema}
      {...props}
    />
  )
}

export const useAwsCloudfrontkeyvaluestoreKey = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudfrontkeyvaluestoreKeyOutputProps>(
    AwsCloudfrontkeyvaluestoreKey,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudfrontkeyvaluestoreKeys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudfrontkeyvaluestoreKeyOutputProps>(
    AwsCloudfrontkeyvaluestoreKey,
    idFilter,
    baseNode,
    optional,
  )
