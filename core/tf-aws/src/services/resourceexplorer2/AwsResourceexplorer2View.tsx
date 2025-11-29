import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/resourceexplorer2_view

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  default_view: resolvableValue(z.boolean().optional()),
  filters: resolvableValue(
    z.object({
      filter_string: z.string(),
    }).optional(),
  ),
  included_property: resolvableValue(
    z.object({
      name: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  scope: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsResourceexplorer2View(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_resourceexplorer2_view'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsResourceexplorer2View = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsResourceexplorer2View, node, id)

export const useAwsResourceexplorer2Views = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsResourceexplorer2View, node, id)
