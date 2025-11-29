import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/resourceexplorer2_search

export const InputSchema = z.object({
  query_string: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  view_arn: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  resource_count: z.object({
    complete: z.boolean(),
    total_resources: z.number(),
  }).array().optional(),
  resources: z.object({
    arn: z.string(),
    last_reported_at: z.string(),
    owning_account_id: z.string(),
    properties: z.object({
      data: z.string(),
      last_reported_at: z.string(),
      name: z.string(),
    }).array(),
    region: z.string(),
    resource_type: z.string(),
    service: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsResourceexplorer2Search(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_resourceexplorer2_search'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsResourceexplorer2Search = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsResourceexplorer2Search, node, id)

export const useDataAwsResourceexplorer2Searchs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsResourceexplorer2Search, node, id)
