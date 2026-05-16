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

export const AwsDetectiveGraphInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsDetectiveGraphOutputSchema = z.object({
  created_time: z.string().optional(),
  graph_arn: z.string().optional(),
})

export type AwsDetectiveGraphInputProps =
  & z.input<typeof AwsDetectiveGraphInputSchema>
  & NodeProps

export type AwsDetectiveGraphOutputProps =
  & z.output<typeof AwsDetectiveGraphOutputSchema>
  & z.output<typeof AwsDetectiveGraphInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/detective_graph

export function AwsDetectiveGraph(props: Partial<AwsDetectiveGraphInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_detective_graph'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDetectiveGraphInputSchema}
      _outputSchema={AwsDetectiveGraphOutputSchema}
      {...props}
    />
  )
}

export const useAwsDetectiveGraph = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDetectiveGraphOutputProps>(
    AwsDetectiveGraph,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDetectiveGraphs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDetectiveGraphOutputProps>(
    AwsDetectiveGraph,
    idFilter,
    baseNode,
    optional,
  )
