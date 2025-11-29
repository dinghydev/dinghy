import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cloudwatch_contributor_managed_insight_rule

export const InputSchema = z.object({
  resource_arn: resolvableValue(z.string()),
  rule_name: resolvableValue(z.string()),
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  template_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  state: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCloudwatchContributorManagedInsightRule(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_contributor_managed_insight_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchContributorManagedInsightRule = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsCloudwatchContributorManagedInsightRule,
    node,
    id,
  )

export const useAwsCloudwatchContributorManagedInsightRules = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsCloudwatchContributorManagedInsightRule,
    node,
    id,
  )
