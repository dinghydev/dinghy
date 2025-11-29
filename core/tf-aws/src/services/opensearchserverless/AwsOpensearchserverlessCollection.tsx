import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/opensearchserverless_collection

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  description: resolvableValue(z.string().optional()),
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
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  collection_endpoint: z.string().optional(),
  dashboard_endpoint: z.string().optional(),
  id: z.string().optional(),
  kms_key_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsOpensearchserverlessCollection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_opensearchserverless_collection'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsOpensearchserverlessCollection = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsOpensearchserverlessCollection, node, id)

export const useAwsOpensearchserverlessCollections = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsOpensearchserverlessCollection, node, id)
