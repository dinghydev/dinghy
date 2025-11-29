import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsWafRateBasedRule } from './AwsWafRateBasedRule.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/waf_rate_based_rule

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
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

export function DataAwsWafRateBasedRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsWafRateBasedRule
      _type='aws_waf_rate_based_rule'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsWafRateBasedRule = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsWafRateBasedRule, node, id)

export const useDataAwsWafRateBasedRules = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsWafRateBasedRule, node, id)
