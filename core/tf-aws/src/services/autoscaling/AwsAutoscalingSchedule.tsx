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

export const AwsAutoscalingScheduleInputSchema = TfMetaSchema.extend({
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

export const AwsAutoscalingScheduleOutputSchema = z.object({
  arn: z.string().optional(),
})

export const AwsAutoscalingScheduleImportSchema = z.object({
  autoscaling_group_name: resolvableValue(z.string()),
  scheduled_action_name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsAutoscalingScheduleInputProps =
  & z.input<typeof AwsAutoscalingScheduleInputSchema>
  & z.input<typeof AwsAutoscalingScheduleImportSchema>
  & NodeProps

export type AwsAutoscalingScheduleOutputProps =
  & z.output<typeof AwsAutoscalingScheduleOutputSchema>
  & z.output<typeof AwsAutoscalingScheduleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/autoscaling_schedule

export function AwsAutoscalingSchedule(
  props: Partial<AwsAutoscalingScheduleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_autoscaling_schedule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAutoscalingScheduleInputSchema}
      _outputSchema={AwsAutoscalingScheduleOutputSchema}
      _importSchema={AwsAutoscalingScheduleImportSchema}
      {...props}
    />
  )
}

export const useAwsAutoscalingSchedule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAutoscalingScheduleOutputProps>(
    AwsAutoscalingSchedule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAutoscalingSchedules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAutoscalingScheduleOutputProps>(
    AwsAutoscalingSchedule,
    idFilter,
    baseNode,
    optional,
  )
