import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/glue_script

export const InputSchema = z.object({
  dag_edge: resolvableValue(z.object({
    source: z.string(),
    target: z.string(),
    target_parameter: z.string().optional(),
  })),
  dag_node: resolvableValue(z.object({
    id: z.string(),
    line_number: z.number().optional(),
    node_type: z.string(),
  })),
  language: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  python_script: z.string().optional(),
  scala_code: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsGlueScript(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_script'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsGlueScript = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsGlueScript, node, id)

export const useDataAwsGlueScripts = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsGlueScript, node, id)
