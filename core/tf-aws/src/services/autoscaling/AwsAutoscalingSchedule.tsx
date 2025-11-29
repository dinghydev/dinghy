import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/autoscaling_schedule

export const InputSchema = z.object({
  autoscaling_group_name: resolvableValue(z.string()),
  scheduled_action_name: resolvableValue(z.string()),
  desired_capacity: resolvableValue(z.number().optional()),
  end_time: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  max_size: resolvableValue(z.number().optional()),
  min_size: resolvableValue(z.number().optional()),
  recurrence: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  start_time: resolvableValue(z.string().optional()),
  time_zone: resolvableValue(z.string().optional()),
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

export function AwsAutoscalingSchedule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_autoscaling_schedule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAutoscalingSchedule = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAutoscalingSchedule, node, id)

export const useAwsAutoscalingSchedules = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAutoscalingSchedule, node, id)
