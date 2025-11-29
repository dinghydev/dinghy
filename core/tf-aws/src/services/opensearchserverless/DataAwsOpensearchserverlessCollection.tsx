import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOpensearchserverlessCollection } from './AwsOpensearchserverlessCollection.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/opensearchserverless_collection

export const InputSchema = z.object({
  failure_message: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  collection_endpoint: z.string().optional(),
  created_date: z.string().optional(),
  dashboard_endpoint: z.string().optional(),
  description: z.string().optional(),
  failure_code: z.string().optional(),
  kms_key_arn: z.string().optional(),
  last_modified_date: z.string().optional(),
  standby_replicas: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsOpensearchserverlessCollection(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsOpensearchserverlessCollection
      _type='aws_opensearchserverless_collection'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOpensearchserverlessCollection = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsOpensearchserverlessCollection, node, id)

export const useDataAwsOpensearchserverlessCollections = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsOpensearchserverlessCollection, node, id)
