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

export const AwsOpensearchserverlessCollectionInputSchema = TfMetaSchema.extend(
  {
    name: resolvableValue(z.string()),
    collection_group_name: resolvableValue(z.string().optional()),
    description: resolvableValue(z.string().optional()),
    encryption_config: resolvableValue(
      z.object({
        aws_owned_key: z.boolean(),
        kms_key_arn: z.string(),
      }).array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
    standby_replicas: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
    type: resolvableValue(z.string().optional()),
  },
)

export const AwsOpensearchserverlessCollectionOutputSchema = z.object({
  arn: z.string().optional(),
  collection_endpoint: z.string().optional(),
  dashboard_endpoint: z.string().optional(),
  id: z.string().optional(),
  kms_key_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsOpensearchserverlessCollectionImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsOpensearchserverlessCollectionInputProps =
  & z.input<typeof AwsOpensearchserverlessCollectionInputSchema>
  & z.input<typeof AwsOpensearchserverlessCollectionImportSchema>
  & NodeProps

export type AwsOpensearchserverlessCollectionOutputProps =
  & z.output<typeof AwsOpensearchserverlessCollectionOutputSchema>
  & z.output<typeof AwsOpensearchserverlessCollectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/opensearchserverless_collection

export function AwsOpensearchserverlessCollection(
  props: Partial<AwsOpensearchserverlessCollectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_opensearchserverless_collection'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOpensearchserverlessCollectionInputSchema}
      _outputSchema={AwsOpensearchserverlessCollectionOutputSchema}
      _importSchema={AwsOpensearchserverlessCollectionImportSchema}
      {...props}
    />
  )
}

export const useAwsOpensearchserverlessCollection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOpensearchserverlessCollectionOutputProps>(
    AwsOpensearchserverlessCollection,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOpensearchserverlessCollections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOpensearchserverlessCollectionOutputProps>(
    AwsOpensearchserverlessCollection,
    idFilter,
    baseNode,
    optional,
  )
