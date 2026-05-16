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

export const AwsWafRuleInputSchema = TfMetaSchema.extend({
  metric_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  predicates: resolvableValue(
    z.object({
      data_id: z.string(),
      negated: z.boolean(),
      type: z.string(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsWafRuleOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsWafRuleInputProps =
  & z.input<typeof AwsWafRuleInputSchema>
  & NodeProps

export type AwsWafRuleOutputProps =
  & z.output<typeof AwsWafRuleOutputSchema>
  & z.output<typeof AwsWafRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/waf_rule

export function AwsWafRule(props: Partial<AwsWafRuleInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_waf_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafRuleInputSchema}
      _outputSchema={AwsWafRuleOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafRuleOutputProps>(AwsWafRule, idFilter, baseNode, optional)

export const useAwsWafRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafRuleOutputProps>(AwsWafRule, idFilter, baseNode, optional)
