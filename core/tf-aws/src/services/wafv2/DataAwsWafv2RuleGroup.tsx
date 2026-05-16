import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsWafv2RuleGroup } from './AwsWafv2RuleGroup.tsx'

export const DataAwsWafv2RuleGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  scope: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsWafv2RuleGroupOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  id: z.string().optional(),
})

export type DataAwsWafv2RuleGroupInputProps =
  & z.input<typeof DataAwsWafv2RuleGroupInputSchema>
  & NodeProps

export type DataAwsWafv2RuleGroupOutputProps =
  & z.output<typeof DataAwsWafv2RuleGroupOutputSchema>
  & z.output<typeof DataAwsWafv2RuleGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/wafv2_rule_group

export function DataAwsWafv2RuleGroup(
  props: Partial<DataAwsWafv2RuleGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsWafv2RuleGroup
      _type='aws_wafv2_rule_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsWafv2RuleGroupInputSchema}
      _outputSchema={DataAwsWafv2RuleGroupOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsWafv2RuleGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsWafv2RuleGroupOutputProps>(
    DataAwsWafv2RuleGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsWafv2RuleGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsWafv2RuleGroupOutputProps>(
    DataAwsWafv2RuleGroup,
    idFilter,
    baseNode,
    optional,
  )
