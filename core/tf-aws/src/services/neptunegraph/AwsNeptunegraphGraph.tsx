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

export const AwsNeptunegraphGraphInputSchema = TfMetaSchema.extend({
  provisioned_memory: resolvableValue(z.number()),
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
    }).array().optional(),
  ),
})

export const AwsNeptunegraphGraphOutputSchema = z.object({
  arn: z.string().optional(),
  endpoint: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsNeptunegraphGraphInputProps =
  & z.input<typeof AwsNeptunegraphGraphInputSchema>
  & NodeProps

export type AwsNeptunegraphGraphOutputProps =
  & z.output<typeof AwsNeptunegraphGraphOutputSchema>
  & z.output<typeof AwsNeptunegraphGraphInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/neptunegraph_graph

export function AwsNeptunegraphGraph(
  props: Partial<AwsNeptunegraphGraphInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_neptunegraph_graph'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNeptunegraphGraphInputSchema}
      _outputSchema={AwsNeptunegraphGraphOutputSchema}
      {...props}
    />
  )
}

export const useAwsNeptunegraphGraph = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNeptunegraphGraphOutputProps>(
    AwsNeptunegraphGraph,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNeptunegraphGraphs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNeptunegraphGraphOutputProps>(
    AwsNeptunegraphGraph,
    idFilter,
    baseNode,
    optional,
  )
