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

export const AwsAppconfigDeploymentStrategyInputSchema = TfMetaSchema.extend({
  deployment_duration_in_minutes: resolvableValue(z.number()),
  growth_factor: resolvableValue(z.number()),
  name: resolvableValue(z.string()),
  replicate_to: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  final_bake_time_in_minutes: resolvableValue(z.number().optional()),
  growth_type: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsAppconfigDeploymentStrategyOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsAppconfigDeploymentStrategyInputProps =
  & z.input<typeof AwsAppconfigDeploymentStrategyInputSchema>
  & NodeProps

export type AwsAppconfigDeploymentStrategyOutputProps =
  & z.output<typeof AwsAppconfigDeploymentStrategyOutputSchema>
  & z.output<typeof AwsAppconfigDeploymentStrategyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appconfig_deployment_strategy

export function AwsAppconfigDeploymentStrategy(
  props: Partial<AwsAppconfigDeploymentStrategyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appconfig_deployment_strategy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppconfigDeploymentStrategyInputSchema}
      _outputSchema={AwsAppconfigDeploymentStrategyOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppconfigDeploymentStrategy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppconfigDeploymentStrategyOutputProps>(
    AwsAppconfigDeploymentStrategy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppconfigDeploymentStrategys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppconfigDeploymentStrategyOutputProps>(
    AwsAppconfigDeploymentStrategy,
    idFilter,
    baseNode,
    optional,
  )
