import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsIamAccessKeysInputSchema = TfMetaSchema.extend({
  user: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const DataAwsIamAccessKeysOutputSchema = z.object({
  access_keys: z.set(z.object({
    access_key_id: z.string(),
    create_date: z.string(),
    status: z.string(),
  })).optional(),
})

export type DataAwsIamAccessKeysInputProps =
  & z.input<typeof DataAwsIamAccessKeysInputSchema>
  & NodeProps

export type DataAwsIamAccessKeysOutputProps =
  & z.output<typeof DataAwsIamAccessKeysOutputSchema>
  & z.output<typeof DataAwsIamAccessKeysInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/iam_access_keys

export function DataAwsIamAccessKeys(
  props: Partial<DataAwsIamAccessKeysInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_access_keys'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIamAccessKeysInputSchema}
      _outputSchema={DataAwsIamAccessKeysOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsIamAccessKeyss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIamAccessKeysOutputProps>(
    DataAwsIamAccessKeys,
    idFilter,
    baseNode,
    optional,
  )
