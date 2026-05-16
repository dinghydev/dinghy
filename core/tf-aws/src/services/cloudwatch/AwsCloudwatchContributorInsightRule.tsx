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

export const AwsCloudwatchContributorInsightRuleInputSchema = TfMetaSchema
  .extend({
    rule_definition: resolvableValue(z.string()),
    rule_name: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    rule_state: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsCloudwatchContributorInsightRuleOutputSchema = z.object({
  resource_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsCloudwatchContributorInsightRuleInputProps =
  & z.input<typeof AwsCloudwatchContributorInsightRuleInputSchema>
  & NodeProps

export type AwsCloudwatchContributorInsightRuleOutputProps =
  & z.output<typeof AwsCloudwatchContributorInsightRuleOutputSchema>
  & z.output<typeof AwsCloudwatchContributorInsightRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_contributor_insight_rule

export function AwsCloudwatchContributorInsightRule(
  props: Partial<AwsCloudwatchContributorInsightRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_contributor_insight_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchContributorInsightRuleInputSchema}
      _outputSchema={AwsCloudwatchContributorInsightRuleOutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchContributorInsightRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchContributorInsightRuleOutputProps>(
    AwsCloudwatchContributorInsightRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchContributorInsightRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchContributorInsightRuleOutputProps>(
    AwsCloudwatchContributorInsightRule,
    idFilter,
    baseNode,
    optional,
  )
