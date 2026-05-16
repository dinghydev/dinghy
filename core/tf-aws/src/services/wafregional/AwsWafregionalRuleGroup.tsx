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

export const AwsWafregionalRuleGroupInputSchema = TfMetaSchema.extend({
  metric_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  activated_rule: resolvableValue(
    z.object({
      priority: z.number(),
      rule_id: z.string(),
      type: z.string().optional(),
      action: z.object({
        type: z.string(),
      }),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsWafregionalRuleGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsWafregionalRuleGroupInputProps =
  & z.input<typeof AwsWafregionalRuleGroupInputSchema>
  & NodeProps

export type AwsWafregionalRuleGroupOutputProps =
  & z.output<typeof AwsWafregionalRuleGroupOutputSchema>
  & z.output<typeof AwsWafregionalRuleGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/wafregional_rule_group

export function AwsWafregionalRuleGroup(
  props: Partial<AwsWafregionalRuleGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafregional_rule_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafregionalRuleGroupInputSchema}
      _outputSchema={AwsWafregionalRuleGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafregionalRuleGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafregionalRuleGroupOutputProps>(
    AwsWafregionalRuleGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafregionalRuleGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafregionalRuleGroupOutputProps>(
    AwsWafregionalRuleGroup,
    idFilter,
    baseNode,
    optional,
  )
