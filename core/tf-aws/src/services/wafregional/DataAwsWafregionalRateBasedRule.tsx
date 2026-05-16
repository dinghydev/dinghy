import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsWafregionalRateBasedRule } from './AwsWafregionalRateBasedRule.tsx'

export const DataAwsWafregionalRateBasedRuleInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsWafregionalRateBasedRuleOutputSchema = z.object({
  id: z.string().optional(),
})

export type DataAwsWafregionalRateBasedRuleInputProps =
  & z.input<typeof DataAwsWafregionalRateBasedRuleInputSchema>
  & NodeProps

export type DataAwsWafregionalRateBasedRuleOutputProps =
  & z.output<typeof DataAwsWafregionalRateBasedRuleOutputSchema>
  & z.output<typeof DataAwsWafregionalRateBasedRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/wafregional_rate_based_rule

export function DataAwsWafregionalRateBasedRule(
  props: Partial<DataAwsWafregionalRateBasedRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsWafregionalRateBasedRule
      _type='aws_wafregional_rate_based_rule'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsWafregionalRateBasedRuleInputSchema}
      _outputSchema={DataAwsWafregionalRateBasedRuleOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsWafregionalRateBasedRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsWafregionalRateBasedRuleOutputProps>(
    DataAwsWafregionalRateBasedRule,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsWafregionalRateBasedRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsWafregionalRateBasedRuleOutputProps>(
    DataAwsWafregionalRateBasedRule,
    idFilter,
    baseNode,
    optional,
  )
