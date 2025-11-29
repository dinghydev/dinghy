import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/glue_data_quality_ruleset

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_on: z.string().optional(),
  last_modified_on: z.string().optional(),
  recommendation_run_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsGlueDataQualityRuleset(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_glue_data_quality_ruleset'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsGlueDataQualityRuleset = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsGlueDataQualityRuleset, node, id)

export const useAwsGlueDataQualityRulesets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsGlueDataQualityRuleset, node, id)
