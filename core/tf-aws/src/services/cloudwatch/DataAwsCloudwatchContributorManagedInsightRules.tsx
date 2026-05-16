import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsCloudwatchContributorManagedInsightRulesInputSchema =
  TfMetaSchema.extend({
    resource_arn: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsCloudwatchContributorManagedInsightRulesOutputSchema = z
  .object({
    managed_rules: z.object({
      resource_arn: z.string(),
      rule_state: z.object({
        rule_name: z.string(),
        state: z.string(),
      }).array(),
      template_name: z.string(),
    }).array().optional(),
  })

export type DataAwsCloudwatchContributorManagedInsightRulesInputProps =
  & z.input<typeof DataAwsCloudwatchContributorManagedInsightRulesInputSchema>
  & NodeProps

export type DataAwsCloudwatchContributorManagedInsightRulesOutputProps =
  & z.output<typeof DataAwsCloudwatchContributorManagedInsightRulesOutputSchema>
  & z.output<typeof DataAwsCloudwatchContributorManagedInsightRulesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/cloudwatch_contributor_managed_insight_rules

export function DataAwsCloudwatchContributorManagedInsightRules(
  props: Partial<DataAwsCloudwatchContributorManagedInsightRulesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_contributor_managed_insight_rules'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsCloudwatchContributorManagedInsightRulesInputSchema}
      _outputSchema={DataAwsCloudwatchContributorManagedInsightRulesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsCloudwatchContributorManagedInsightRuless = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsCloudwatchContributorManagedInsightRulesOutputProps>(
    DataAwsCloudwatchContributorManagedInsightRules,
    idFilter,
    baseNode,
    optional,
  )
