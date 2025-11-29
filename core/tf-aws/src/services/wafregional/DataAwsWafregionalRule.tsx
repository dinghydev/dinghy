import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsWafregionalRule } from './AwsWafregionalRule.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/wafregional_rule

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
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

export function DataAwsWafregionalRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsWafregionalRule
      _type='aws_wafregional_rule'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsWafregionalRule = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsWafregionalRule, node, id)

export const useDataAwsWafregionalRules = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsWafregionalRule, node, id)
