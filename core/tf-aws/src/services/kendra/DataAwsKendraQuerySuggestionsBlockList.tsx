import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsKendraQuerySuggestionsBlockList } from './AwsKendraQuerySuggestionsBlockList.tsx'

export const InputSchema = z.object({
  index_id: resolvableValue(z.string()),
  query_suggestions_block_list_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  description: z.string().optional(),
  error_message: z.string().optional(),
  file_size_bytes: z.number().optional(),
  id: z.string().optional(),
  item_count: z.number().optional(),
  name: z.string().optional(),
  role_arn: z.string().optional(),
  source_s3_path: z.object({
    bucket: z.string(),
    key: z.string(),
  }).array().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  updated_at: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/kendra_query_suggestions_block_list

export function DataAwsKendraQuerySuggestionsBlockList(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsKendraQuerySuggestionsBlockList
      _type='aws_kendra_query_suggestions_block_list'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsKendraQuerySuggestionsBlockList = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsKendraQuerySuggestionsBlockList,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsKendraQuerySuggestionsBlockLists = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsKendraQuerySuggestionsBlockList,
    idFilter,
    baseNode,
    optional,
  )
