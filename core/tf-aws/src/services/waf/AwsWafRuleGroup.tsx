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

export const AwsWafRuleGroupInputSchema = TfMetaSchema.extend({
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
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsWafRuleGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsWafRuleGroupInputProps =
  & z.input<typeof AwsWafRuleGroupInputSchema>
  & NodeProps

export type AwsWafRuleGroupOutputProps =
  & z.output<typeof AwsWafRuleGroupOutputSchema>
  & z.output<typeof AwsWafRuleGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/waf_rule_group

export function AwsWafRuleGroup(props: Partial<AwsWafRuleGroupInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_waf_rule_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafRuleGroupInputSchema}
      _outputSchema={AwsWafRuleGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafRuleGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafRuleGroupOutputProps>(
    AwsWafRuleGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafRuleGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafRuleGroupOutputProps>(
    AwsWafRuleGroup,
    idFilter,
    baseNode,
    optional,
  )
