import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/waf_subscribed_rule_group

export const InputSchema = z.object({
  metric_name: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsWafSubscribedRuleGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_waf_subscribed_rule_group'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsWafSubscribedRuleGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsWafSubscribedRuleGroup, node, id)

export const useDataAwsWafSubscribedRuleGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsWafSubscribedRuleGroup, node, id)
