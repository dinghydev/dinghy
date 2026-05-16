import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsDynamodbContributorInsightsInputSchema = TfMetaSchema.extend({
  table_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  index_name: resolvableValue(z.string().optional()),
  mode: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsDynamodbContributorInsightsOutputSchema = z.object({})

export type AwsDynamodbContributorInsightsInputProps =
  & z.input<typeof AwsDynamodbContributorInsightsInputSchema>
  & NodeProps

export type AwsDynamodbContributorInsightsOutputProps =
  & z.output<typeof AwsDynamodbContributorInsightsOutputSchema>
  & z.output<typeof AwsDynamodbContributorInsightsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dynamodb_contributor_insights

export function AwsDynamodbContributorInsights(
  props: Partial<AwsDynamodbContributorInsightsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dynamodb_contributor_insights'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDynamodbContributorInsightsInputSchema}
      _outputSchema={AwsDynamodbContributorInsightsOutputSchema}
      {...props}
    />
  )
}

export const useAwsDynamodbContributorInsightss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDynamodbContributorInsightsOutputProps>(
    AwsDynamodbContributorInsights,
    idFilter,
    baseNode,
    optional,
  )
