import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appconfig_deployment_strategy

export const InputSchema = z.object({
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

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAppconfigDeploymentStrategy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appconfig_deployment_strategy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppconfigDeploymentStrategy = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppconfigDeploymentStrategy, node, id)

export const useAwsAppconfigDeploymentStrategys = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAppconfigDeploymentStrategy, node, id)
