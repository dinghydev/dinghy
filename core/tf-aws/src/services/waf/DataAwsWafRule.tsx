import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsWafRule } from './AwsWafRule.tsx'

export const DataAwsWafRuleInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
})

export const DataAwsWafRuleOutputSchema = z.object({
  id: z.string().optional(),
})

export type DataAwsWafRuleInputProps =
  & z.input<typeof DataAwsWafRuleInputSchema>
  & NodeProps

export type DataAwsWafRuleOutputProps =
  & z.output<typeof DataAwsWafRuleOutputSchema>
  & z.output<typeof DataAwsWafRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/waf_rule

export function DataAwsWafRule(props: Partial<DataAwsWafRuleInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsWafRule
      _type='aws_waf_rule'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsWafRuleInputSchema}
      _outputSchema={DataAwsWafRuleOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsWafRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsWafRuleOutputProps>(
    DataAwsWafRule,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsWafRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsWafRuleOutputProps>(
    DataAwsWafRule,
    idFilter,
    baseNode,
    optional,
  )
