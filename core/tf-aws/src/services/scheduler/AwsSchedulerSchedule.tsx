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
  flexible_time_window: resolvableValue(z.object({
    maximum_window_in_minutes: z.number().optional(),
    mode: z.string(),
  })),
  schedule_expression: resolvableValue(z.string()),
  target: resolvableValue(z.object({
    arn: z.string(),
    input: z.string().optional(),
    role_arn: z.string(),
    dead_letter_config: z.object({
      arn: z.string(),
    }).optional(),
    ecs_parameters: z.object({
      enable_ecs_managed_tags: z.boolean().optional(),
      enable_execute_command: z.boolean().optional(),
      group: z.string().optional(),
      launch_type: z.string().optional(),
      platform_version: z.string().optional(),
      propagate_tags: z.string().optional(),
      reference_id: z.string().optional(),
      tags: z.record(z.string(), z.string()).optional(),
      task_count: z.number().optional(),
      task_definition_arn: z.string(),
      capacity_provider_strategy: z.object({
        base: z.number().optional(),
        capacity_provider: z.string(),
        weight: z.number().optional(),
      }).array().optional(),
      network_configuration: z.object({
        assign_public_ip: z.boolean().optional(),
        security_groups: z.string().array().optional(),
        subnets: z.string().array(),
      }).optional(),
      placement_constraints: z.object({
        expression: z.string().optional(),
        type: z.string(),
      }).array().optional(),
      placement_strategy: z.object({
        field: z.string().optional(),
        type: z.string(),
      }).array().optional(),
    }).optional(),
    eventbridge_parameters: z.object({
      detail_type: z.string(),
      source: z.string(),
    }).optional(),
    kinesis_parameters: z.object({
      partition_key: z.string(),
    }).optional(),
    retry_policy: z.object({
      maximum_event_age_in_seconds: z.number().optional(),
      maximum_retry_attempts: z.number().optional(),
    }).optional(),
    sagemaker_pipeline_parameters: z.object({
      pipeline_parameter: z.object({
        name: z.string(),
        value: z.string(),
      }).array().optional(),
    }).optional(),
    sqs_parameters: z.object({
      message_group_id: z.string().optional(),
    }).optional(),
  })),
  action_after_completion: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  end_date: resolvableValue(z.string().optional()),
  group_name: resolvableValue(z.string().optional()),
  kms_key_arn: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  schedule_expression_timezone: resolvableValue(z.string().optional()),
  start_date: resolvableValue(z.string().optional()),
  state: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/scheduler_schedule

export function AwsSchedulerSchedule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsSchedulerSchedule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsSchedulerSchedule, idFilter, baseNode, optional)

export const useAwsSchedulerSchedules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsSchedulerSchedule, idFilter, baseNode, optional)
