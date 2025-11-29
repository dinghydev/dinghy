import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/neptunegraph_graph

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  endpoint: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  provisioned_memory: resolvableValue(z.number()),
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  deletion_protection: resolvableValue(z.boolean().optional()),
  graph_name: resolvableValue(z.string().optional()),
  graph_name_prefix: resolvableValue(z.string().optional()),
  kms_key_identifier: resolvableValue(z.string().optional()),
  public_connectivity: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  replica_count: resolvableValue(z.number().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vector_search_configuration: resolvableValue(
    z.object({
      vector_search_dimension: z.number().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsNeptunegraphGraph(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_neptunegraph_graph'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNeptunegraphGraph = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsNeptunegraphGraph, node, id)

export const useAwsNeptunegraphGraphs = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsNeptunegraphGraph, node, id)
