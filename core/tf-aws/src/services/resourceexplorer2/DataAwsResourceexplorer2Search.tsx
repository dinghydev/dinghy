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
  query_string: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  view_arn: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/resourceexplorer2_search

export function DataAwsResourceexplorer2Search(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useDataAwsResourceexplorer2Search = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsResourceexplorer2Search,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsResourceexplorer2Searchs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsResourceexplorer2Search,
    idFilter,
    baseNode,
    optional,
  )
