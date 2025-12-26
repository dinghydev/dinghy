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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/autoscaling_schedule

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

export const useAwsAutoscalingSchedule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsAutoscalingSchedule,
    idFilter,
    baseNode,
    optional,
  )
