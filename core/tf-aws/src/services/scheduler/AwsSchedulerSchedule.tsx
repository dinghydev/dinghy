import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/scheduler_schedule

export const InputSchema = z.object({
  schedule_expression: resolvableValue(z.string()),
  action_after_completion: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  end_date: resolvableValue(z.string().optional()),
  flexible_time_window: resolvableValue(z.object({
    maximum_window_in_minutes: z.number().optional(),
    mode: z.string(),
  })),
  group_name: resolvableValue(z.string().optional()),
  kms_key_arn: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  schedule_expression_timezone: resolvableValue(z.string().optional()),
  start_date: resolvableValue(z.string().optional()),
  state: resolvableValue(z.string().optional()),
  target: resolvableValue(z.object({
    arn: z.string(),
    input: z.string().optional(),
    role_arn: z.string(),
  })),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSchedulerSchedule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_scheduler_schedule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSchedulerSchedule = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSchedulerSchedule, node, id)

export const useAwsSchedulerSchedules = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSchedulerSchedule, node, id)
