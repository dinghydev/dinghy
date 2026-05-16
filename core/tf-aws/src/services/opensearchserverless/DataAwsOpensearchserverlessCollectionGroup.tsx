import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOpensearchserverlessCollectionGroup } from './AwsOpensearchserverlessCollectionGroup.tsx'

export const DataAwsOpensearchserverlessCollectionGroupInputSchema =
  TfMetaSchema.extend({
    id: resolvableValue(z.string().optional()),
    name: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsOpensearchserverlessCollectionGroupOutputSchema = z.object({
  arn: z.string().optional(),
  capacity_limits: z.object({
    max_indexing_capacity_in_ocu: z.number(),
    max_search_capacity_in_ocu: z.number(),
    min_indexing_capacity_in_ocu: z.number(),
    min_search_capacity_in_ocu: z.number(),
  }).array().optional(),
  created_date: z.string().optional(),
  description: z.string().optional(),
  standby_replicas: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsOpensearchserverlessCollectionGroupInputProps =
  & z.input<typeof DataAwsOpensearchserverlessCollectionGroupInputSchema>
  & NodeProps

export type DataAwsOpensearchserverlessCollectionGroupOutputProps =
  & z.output<typeof DataAwsOpensearchserverlessCollectionGroupOutputSchema>
  & z.output<typeof DataAwsOpensearchserverlessCollectionGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/opensearchserverless_collection_group

export function DataAwsOpensearchserverlessCollectionGroup(
  props: Partial<DataAwsOpensearchserverlessCollectionGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsOpensearchserverlessCollectionGroup
      _type='aws_opensearchserverless_collection_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOpensearchserverlessCollectionGroupInputSchema}
      _outputSchema={DataAwsOpensearchserverlessCollectionGroupOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOpensearchserverlessCollectionGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsOpensearchserverlessCollectionGroupOutputProps>(
    DataAwsOpensearchserverlessCollectionGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsOpensearchserverlessCollectionGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOpensearchserverlessCollectionGroupOutputProps>(
    DataAwsOpensearchserverlessCollectionGroup,
    idFilter,
    baseNode,
    optional,
  )
