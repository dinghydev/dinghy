import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/cloudwatch_contributor_managed_insight_rules

export const InputSchema = z.object({
  resource_arn: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  managed_rules: z.object({
    resource_arn: z.string(),
    rule_state: z.object({
      rule_name: z.string(),
      state: z.string(),
    }).array(),
    template_name: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCloudwatchContributorManagedInsightRules(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_contributor_managed_insight_rules'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCloudwatchContributorManagedInsightRuless = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    DataAwsCloudwatchContributorManagedInsightRules,
    node,
    id,
  )
