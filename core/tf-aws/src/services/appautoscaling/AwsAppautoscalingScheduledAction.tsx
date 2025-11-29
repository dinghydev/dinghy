import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/appautoscaling_scheduled_action

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  resource_id: resolvableValue(z.string()),
  scalable_dimension: resolvableValue(z.string()),
  schedule: resolvableValue(z.string()),
  service_namespace: resolvableValue(z.string()),
  end_time: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  scalable_target_action: resolvableValue(z.object({
    max_capacity: z.string().optional(),
    min_capacity: z.string().optional(),
  })),
  start_time: resolvableValue(z.string().optional()),
  timezone: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAppautoscalingScheduledAction(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appautoscaling_scheduled_action'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAppautoscalingScheduledAction = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAppautoscalingScheduledAction, node, id)

export const useAwsAppautoscalingScheduledActions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAppautoscalingScheduledAction, node, id)
