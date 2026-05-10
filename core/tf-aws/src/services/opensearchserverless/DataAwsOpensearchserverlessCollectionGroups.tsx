import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  collection_group_summaries: z.object({
    arn: z.string(),
    capacity_limits: z.object({
      max_indexing_capacity_in_ocu: z.number(),
      max_search_capacity_in_ocu: z.number(),
      min_indexing_capacity_in_ocu: z.number(),
      min_search_capacity_in_ocu: z.number(),
    }).array(),
    created_date: z.string(),
    id: z.string(),
    name: z.string(),
    number_of_collections: z.number(),
    standby_replicas: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/opensearchserverless_collection_groups

export function DataAwsOpensearchserverlessCollectionGroups(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_opensearchserverless_collection_groups'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOpensearchserverlessCollectionGroupss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsOpensearchserverlessCollectionGroups,
    idFilter,
    baseNode,
    optional,
  )
