import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/computeoptimizer_recommendation_preferences

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  resource_type: resolvableValue(z.string()),
  enhanced_infrastructure_metrics: resolvableValue(z.string().optional()),
  external_metrics_preference: resolvableValue(
    z.object({
      source: z.string(),
    }).optional(),
  ),
  inferred_workload_types: resolvableValue(z.string().optional()),
  look_back_period: resolvableValue(z.string().optional()),
  preferred_resource: resolvableValue(
    z.object({
      exclude_list: z.string().array().optional(),
      include_list: z.string().array().optional(),
      name: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  savings_estimation_mode: resolvableValue(z.string().optional()),
  scope: resolvableValue(
    z.object({
      name: z.string(),
      value: z.string(),
    }).optional(),
  ),
  utilization_preference: resolvableValue(
    z.object({
      metric_name: z.string(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsComputeoptimizerRecommendationPreferences(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_computeoptimizer_recommendation_preferences'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsComputeoptimizerRecommendationPreferencess = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsComputeoptimizerRecommendationPreferences,
    node,
    id,
  )
