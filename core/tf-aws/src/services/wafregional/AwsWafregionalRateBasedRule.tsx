import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/wafregional_rate_based_rule

export const InputSchema = z.object({
  metric_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  rate_key: resolvableValue(z.string()),
  rate_limit: resolvableValue(z.number()),
  predicate: resolvableValue(
    z.object({
      data_id: z.string(),
      negated: z.boolean(),
      type: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsWafregionalRateBasedRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafregional_rate_based_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWafregionalRateBasedRule = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsWafregionalRateBasedRule, node, id)

export const useAwsWafregionalRateBasedRules = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsWafregionalRateBasedRule, node, id)
