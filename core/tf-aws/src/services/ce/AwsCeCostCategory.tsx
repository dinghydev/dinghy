import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ce_cost_category

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  rule_version: resolvableValue(z.string()),
  default_value: resolvableValue(z.string().optional()),
  effective_start: resolvableValue(z.string().optional()),
  rule: resolvableValue(z.object({
    type: z.string().optional(),
    value: z.string().optional(),
  })),
  split_charge_rule: resolvableValue(
    z.object({
      method: z.string(),
      source: z.string(),
      targets: z.string().array(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  effective_end: z.string().optional(),
  id: z.string().optional(),
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

export function AwsCeCostCategory(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ce_cost_category'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsCeCostCategory = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCeCostCategory, node, id)

export const useAwsCeCostCategorys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCeCostCategory, node, id)
