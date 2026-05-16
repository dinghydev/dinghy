import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsWafSubscribedRuleGroupInputSchema = TfMetaSchema.extend({
  metric_name: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
})

export const DataAwsWafSubscribedRuleGroupOutputSchema = z.object({
  id: z.string().optional(),
})

export type DataAwsWafSubscribedRuleGroupInputProps =
  & z.input<typeof DataAwsWafSubscribedRuleGroupInputSchema>
  & NodeProps

export type DataAwsWafSubscribedRuleGroupOutputProps =
  & z.output<typeof DataAwsWafSubscribedRuleGroupOutputSchema>
  & z.output<typeof DataAwsWafSubscribedRuleGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/waf_subscribed_rule_group

export function DataAwsWafSubscribedRuleGroup(
  props: Partial<DataAwsWafSubscribedRuleGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_waf_subscribed_rule_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsWafSubscribedRuleGroupInputSchema}
      _outputSchema={DataAwsWafSubscribedRuleGroupOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsWafSubscribedRuleGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsWafSubscribedRuleGroupOutputProps>(
    DataAwsWafSubscribedRuleGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsWafSubscribedRuleGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsWafSubscribedRuleGroupOutputProps>(
    DataAwsWafSubscribedRuleGroup,
    idFilter,
    baseNode,
    optional,
  )
