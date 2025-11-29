import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appautoscaling_target

export const InputSchema = z.object({
  max_capacity: resolvableValue(z.number()),
  min_capacity: resolvableValue(z.number()),
  resource_id: resolvableValue(z.string()),
  scalable_dimension: resolvableValue(z.string()),
  service_namespace: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  role_arn: resolvableValue(z.string().optional()),
  suspended_state: resolvableValue(
    z.object({
      dynamic_scaling_in_suspended: z.boolean().optional(),
      dynamic_scaling_out_suspended: z.boolean().optional(),
      scheduled_scaling_suspended: z.boolean().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAppautoscalingTarget(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appautoscaling_target'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppautoscalingTarget = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppautoscalingTarget, node, id)

export const useAwsAppautoscalingTargets = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAppautoscalingTarget, node, id)
