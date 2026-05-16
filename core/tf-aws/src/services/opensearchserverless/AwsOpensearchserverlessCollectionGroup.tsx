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

export const AwsOpensearchserverlessCollectionGroupInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    standby_replicas: resolvableValue(z.string()),
    capacity_limits: resolvableValue(
      z.object({
        max_indexing_capacity_in_ocu: z.number(),
        max_search_capacity_in_ocu: z.number(),
        min_indexing_capacity_in_ocu: z.number(),
        min_search_capacity_in_ocu: z.number(),
      }).array().optional(),
    ),
    description: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsOpensearchserverlessCollectionGroupOutputSchema = z.object({
  arn: z.string().optional(),
  created_date: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsOpensearchserverlessCollectionGroupImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsOpensearchserverlessCollectionGroupInputProps =
  & z.input<typeof AwsOpensearchserverlessCollectionGroupInputSchema>
  & z.input<typeof AwsOpensearchserverlessCollectionGroupImportSchema>
  & NodeProps

export type AwsOpensearchserverlessCollectionGroupOutputProps =
  & z.output<typeof AwsOpensearchserverlessCollectionGroupOutputSchema>
  & z.output<typeof AwsOpensearchserverlessCollectionGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection_group

export function AwsOpensearchserverlessCollectionGroup(
  props: Partial<AwsOpensearchserverlessCollectionGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_opensearchserverless_collection_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOpensearchserverlessCollectionGroupInputSchema}
      _outputSchema={AwsOpensearchserverlessCollectionGroupOutputSchema}
      _importSchema={AwsOpensearchserverlessCollectionGroupImportSchema}
      {...props}
    />
  )
}

export const useAwsOpensearchserverlessCollectionGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOpensearchserverlessCollectionGroupOutputProps>(
    AwsOpensearchserverlessCollectionGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOpensearchserverlessCollectionGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOpensearchserverlessCollectionGroupOutputProps>(
    AwsOpensearchserverlessCollectionGroup,
    idFilter,
    baseNode,
    optional,
  )
