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

export const AwsCloudwatchContributorManagedInsightRuleInputSchema =
  TfMetaSchema.extend({
    resource_arn: resolvableValue(z.string()),
    template_name: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    state: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsCloudwatchContributorManagedInsightRuleOutputSchema = z.object({
  arn: z.string().optional(),
  rule_name: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsCloudwatchContributorManagedInsightRuleInputProps =
  & z.input<typeof AwsCloudwatchContributorManagedInsightRuleInputSchema>
  & NodeProps

export type AwsCloudwatchContributorManagedInsightRuleOutputProps =
  & z.output<typeof AwsCloudwatchContributorManagedInsightRuleOutputSchema>
  & z.output<typeof AwsCloudwatchContributorManagedInsightRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_contributor_managed_insight_rule

export function AwsCloudwatchContributorManagedInsightRule(
  props: Partial<AwsCloudwatchContributorManagedInsightRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_contributor_managed_insight_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchContributorManagedInsightRuleInputSchema}
      _outputSchema={AwsCloudwatchContributorManagedInsightRuleOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchContributorManagedInsightRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchContributorManagedInsightRuleOutputProps>(
    AwsCloudwatchContributorManagedInsightRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchContributorManagedInsightRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchContributorManagedInsightRuleOutputProps>(
    AwsCloudwatchContributorManagedInsightRule,
    idFilter,
    baseNode,
    optional,
  )
