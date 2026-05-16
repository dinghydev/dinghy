import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsWafregionalRule } from './AwsWafregionalRule.tsx'

export const DataAwsWafregionalRuleInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsWafregionalRuleOutputSchema = z.object({
  id: z.string().optional(),
})

export type DataAwsWafregionalRuleInputProps =
  & z.input<typeof DataAwsWafregionalRuleInputSchema>
  & NodeProps

export type DataAwsWafregionalRuleOutputProps =
  & z.output<typeof DataAwsWafregionalRuleOutputSchema>
  & z.output<typeof DataAwsWafregionalRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/wafregional_rule

export function DataAwsWafregionalRule(
  props: Partial<DataAwsWafregionalRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsWafregionalRule
      _type='aws_wafregional_rule'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsWafregionalRuleInputSchema}
      _outputSchema={DataAwsWafregionalRuleOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsWafregionalRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsWafregionalRuleOutputProps>(
    DataAwsWafregionalRule,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsWafregionalRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsWafregionalRuleOutputProps>(
    DataAwsWafregionalRule,
    idFilter,
    baseNode,
    optional,
  )
