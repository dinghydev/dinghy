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

export const AwsWafregionalRuleInputSchema = TfMetaSchema.extend({
  metric_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  predicate: resolvableValue(
    z.object({
      data_id: z.string(),
      negated: z.boolean(),
      type: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsWafregionalRuleOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsWafregionalRuleInputProps =
  & z.input<typeof AwsWafregionalRuleInputSchema>
  & NodeProps

export type AwsWafregionalRuleOutputProps =
  & z.output<typeof AwsWafregionalRuleOutputSchema>
  & z.output<typeof AwsWafregionalRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/wafregional_rule

export function AwsWafregionalRule(
  props: Partial<AwsWafregionalRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafregional_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafregionalRuleInputSchema}
      _outputSchema={AwsWafregionalRuleOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafregionalRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafregionalRuleOutputProps>(
    AwsWafregionalRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafregionalRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafregionalRuleOutputProps>(
    AwsWafregionalRule,
    idFilter,
    baseNode,
    optional,
  )
