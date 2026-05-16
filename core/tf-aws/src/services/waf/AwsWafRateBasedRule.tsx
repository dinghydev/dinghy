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

export const AwsWafRateBasedRuleInputSchema = TfMetaSchema.extend({
  metric_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  rate_key: resolvableValue(z.string()),
  rate_limit: resolvableValue(z.number()),
  predicates: resolvableValue(
    z.object({
      data_id: z.string(),
      negated: z.boolean(),
      type: z.string(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsWafRateBasedRuleOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsWafRateBasedRuleInputProps =
  & z.input<typeof AwsWafRateBasedRuleInputSchema>
  & NodeProps

export type AwsWafRateBasedRuleOutputProps =
  & z.output<typeof AwsWafRateBasedRuleOutputSchema>
  & z.output<typeof AwsWafRateBasedRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/waf_rate_based_rule

export function AwsWafRateBasedRule(
  props: Partial<AwsWafRateBasedRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_waf_rate_based_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafRateBasedRuleInputSchema}
      _outputSchema={AwsWafRateBasedRuleOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafRateBasedRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafRateBasedRuleOutputProps>(
    AwsWafRateBasedRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafRateBasedRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafRateBasedRuleOutputProps>(
    AwsWafRateBasedRule,
    idFilter,
    baseNode,
    optional,
  )
