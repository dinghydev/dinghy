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

export const DataAwsWafregionalSubscribedRuleGroupInputSchema = TfMetaSchema
  .extend({
    metric_name: resolvableValue(z.string().optional()),
    name: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsWafregionalSubscribedRuleGroupOutputSchema = z.object({
  id: z.string().optional(),
})

export type DataAwsWafregionalSubscribedRuleGroupInputProps =
  & z.input<typeof DataAwsWafregionalSubscribedRuleGroupInputSchema>
  & NodeProps

export type DataAwsWafregionalSubscribedRuleGroupOutputProps =
  & z.output<typeof DataAwsWafregionalSubscribedRuleGroupOutputSchema>
  & z.output<typeof DataAwsWafregionalSubscribedRuleGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/wafregional_subscribed_rule_group

export function DataAwsWafregionalSubscribedRuleGroup(
  props: Partial<DataAwsWafregionalSubscribedRuleGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafregional_subscribed_rule_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsWafregionalSubscribedRuleGroupInputSchema}
      _outputSchema={DataAwsWafregionalSubscribedRuleGroupOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsWafregionalSubscribedRuleGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsWafregionalSubscribedRuleGroupOutputProps>(
    DataAwsWafregionalSubscribedRuleGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsWafregionalSubscribedRuleGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsWafregionalSubscribedRuleGroupOutputProps>(
    DataAwsWafregionalSubscribedRuleGroup,
    idFilter,
    baseNode,
    optional,
  )
