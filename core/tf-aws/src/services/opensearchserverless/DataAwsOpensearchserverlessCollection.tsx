import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOpensearchserverlessCollection } from './AwsOpensearchserverlessCollection.tsx'

export const DataAwsOpensearchserverlessCollectionInputSchema = TfMetaSchema
  .extend({
    id: resolvableValue(z.string().optional()),
    name: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsOpensearchserverlessCollectionOutputSchema = z.object({
  arn: z.string().optional(),
  collection_endpoint: z.string().optional(),
  created_date: z.string().optional(),
  dashboard_endpoint: z.string().optional(),
  description: z.string().optional(),
  failure_code: z.string().optional(),
  failure_message: z.string().optional(),
  kms_key_arn: z.string().optional(),
  last_modified_date: z.string().optional(),
  standby_replicas: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
})

export type DataAwsOpensearchserverlessCollectionInputProps =
  & z.input<typeof DataAwsOpensearchserverlessCollectionInputSchema>
  & NodeProps

export type DataAwsOpensearchserverlessCollectionOutputProps =
  & z.output<typeof DataAwsOpensearchserverlessCollectionOutputSchema>
  & z.output<typeof DataAwsOpensearchserverlessCollectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/opensearchserverless_collection

export function DataAwsOpensearchserverlessCollection(
  props: Partial<DataAwsOpensearchserverlessCollectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsOpensearchserverlessCollection
      _type='aws_opensearchserverless_collection'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOpensearchserverlessCollectionInputSchema}
      _outputSchema={DataAwsOpensearchserverlessCollectionOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOpensearchserverlessCollection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsOpensearchserverlessCollectionOutputProps>(
    DataAwsOpensearchserverlessCollection,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsOpensearchserverlessCollections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOpensearchserverlessCollectionOutputProps>(
    DataAwsOpensearchserverlessCollection,
    idFilter,
    baseNode,
    optional,
  )
