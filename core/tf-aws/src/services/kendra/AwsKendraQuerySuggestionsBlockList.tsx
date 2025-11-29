import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/kendra_query_suggestions_block_list

export const InputSchema = z.object({
  index_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  source_s3_path: resolvableValue(z.object({
    bucket: z.string(),
    key: z.string(),
  })),
  status: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  query_suggestions_block_list_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsKendraQuerySuggestionsBlockList(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kendra_query_suggestions_block_list'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsKendraQuerySuggestionsBlockList = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsKendraQuerySuggestionsBlockList, node, id)

export const useAwsKendraQuerySuggestionsBlockLists = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsKendraQuerySuggestionsBlockList, node, id)
