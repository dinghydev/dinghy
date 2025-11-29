import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSesActiveReceiptRuleSet } from './AwsSesActiveReceiptRuleSet.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ses_active_receipt_rule_set

export const InputSchema = z.object({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  rule_set_name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsSesActiveReceiptRuleSet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsSesActiveReceiptRuleSet
      _type='aws_ses_active_receipt_rule_set'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSesActiveReceiptRuleSet = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsSesActiveReceiptRuleSet, node, id)

export const useDataAwsSesActiveReceiptRuleSets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsSesActiveReceiptRuleSet, node, id)
