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

export const AwsGlueDataQualityRulesetInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  ruleset: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  target_table: resolvableValue(
    z.object({
      catalog_id: z.string().optional(),
      database_name: z.string(),
      table_name: z.string(),
    }).optional(),
  ),
})

export const AwsGlueDataQualityRulesetOutputSchema = z.object({
  arn: z.string().optional(),
  created_on: z.string().optional(),
  last_modified_on: z.string().optional(),
  recommendation_run_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsGlueDataQualityRulesetInputProps =
  & z.input<typeof AwsGlueDataQualityRulesetInputSchema>
  & NodeProps

export type AwsGlueDataQualityRulesetOutputProps =
  & z.output<typeof AwsGlueDataQualityRulesetOutputSchema>
  & z.output<typeof AwsGlueDataQualityRulesetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/glue_data_quality_ruleset

export function AwsGlueDataQualityRuleset(
  props: Partial<AwsGlueDataQualityRulesetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_data_quality_ruleset'
      _category='resource'
      _title={_title}
      _inputSchema={AwsGlueDataQualityRulesetInputSchema}
      _outputSchema={AwsGlueDataQualityRulesetOutputSchema}
      {...props}
    />
  )
}

export const useAwsGlueDataQualityRuleset = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsGlueDataQualityRulesetOutputProps>(
    AwsGlueDataQualityRuleset,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsGlueDataQualityRulesets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsGlueDataQualityRulesetOutputProps>(
    AwsGlueDataQualityRuleset,
    idFilter,
    baseNode,
    optional,
  )
