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

export const DataAwsResourceexplorer2SearchInputSchema = TfMetaSchema.extend({
  query_string: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  view_arn: resolvableValue(z.string().optional()),
})

export const DataAwsResourceexplorer2SearchOutputSchema = z.object({
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

export type DataAwsResourceexplorer2SearchInputProps =
  & z.input<typeof DataAwsResourceexplorer2SearchInputSchema>
  & NodeProps

export type DataAwsResourceexplorer2SearchOutputProps =
  & z.output<typeof DataAwsResourceexplorer2SearchOutputSchema>
  & z.output<typeof DataAwsResourceexplorer2SearchInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/resourceexplorer2_search

export function DataAwsResourceexplorer2Search(
  props: Partial<DataAwsResourceexplorer2SearchInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_resourceexplorer2_search'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsResourceexplorer2SearchInputSchema}
      _outputSchema={DataAwsResourceexplorer2SearchOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsResourceexplorer2Search = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsResourceexplorer2SearchOutputProps>(
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
  useTypedNodes<DataAwsResourceexplorer2SearchOutputProps>(
    DataAwsResourceexplorer2Search,
    idFilter,
    baseNode,
    optional,
  )
