import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsWafRateBasedRule } from './AwsWafRateBasedRule.tsx'

export const DataAwsWafRateBasedRuleInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
})

export const DataAwsWafRateBasedRuleOutputSchema = z.object({
  id: z.string().optional(),
})

export type DataAwsWafRateBasedRuleInputProps =
  & z.input<typeof DataAwsWafRateBasedRuleInputSchema>
  & NodeProps

export type DataAwsWafRateBasedRuleOutputProps =
  & z.output<typeof DataAwsWafRateBasedRuleOutputSchema>
  & z.output<typeof DataAwsWafRateBasedRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/waf_rate_based_rule

export function DataAwsWafRateBasedRule(
  props: Partial<DataAwsWafRateBasedRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsWafRateBasedRule
      _type='aws_waf_rate_based_rule'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsWafRateBasedRuleInputSchema}
      _outputSchema={DataAwsWafRateBasedRuleOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsWafRateBasedRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsWafRateBasedRuleOutputProps>(
    DataAwsWafRateBasedRule,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsWafRateBasedRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsWafRateBasedRuleOutputProps>(
    DataAwsWafRateBasedRule,
    idFilter,
    baseNode,
    optional,
  )
