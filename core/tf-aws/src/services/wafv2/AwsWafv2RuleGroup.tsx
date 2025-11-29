import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/wafv2_rule_group

export const InputSchema = z.object({
  capacity: resolvableValue(z.number()),
  lock_token: resolvableValue(z.string()),
  scope: resolvableValue(z.string()),
  visibility_config: resolvableValue(z.object({
    cloudwatch_metrics_enabled: z.boolean(),
    metric_name: z.string(),
    sampled_requests_enabled: z.boolean(),
  })),
  custom_response_body: resolvableValue(
    z.object({
      content: z.string(),
      content_type: z.string(),
      key: z.string(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  rule: resolvableValue(
    z.object({
      name: z.string(),
      priority: z.number(),
    }).array().optional(),
  ),
  rules_json: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsWafv2RuleGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafv2_rule_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWafv2RuleGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsWafv2RuleGroup, node, id)

export const useAwsWafv2RuleGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsWafv2RuleGroup, node, id)
