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

export const InputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  rule: resolvableValue(z.string()),
  appsync_target: resolvableValue(
    z.object({
      graphql_operation: z.string().optional(),
    }).optional(),
  ),
  batch_target: resolvableValue(
    z.object({
      array_size: z.number().optional(),
      job_attempts: z.number().optional(),
      job_definition: z.string(),
      job_name: z.string(),
    }).optional(),
  ),
  dead_letter_config: resolvableValue(
    z.object({
      arn: z.string().optional(),
    }).optional(),
  ),
  ecs_target: resolvableValue(
    z.object({
      enable_ecs_managed_tags: z.boolean().optional(),
      enable_execute_command: z.boolean().optional(),
      group: z.string().optional(),
      launch_type: z.string().optional(),
      platform_version: z.string().optional(),
      propagate_tags: z.string().optional(),
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
      ordered_placement_strategy: z.object({
        field: z.string().optional(),
        type: z.string(),
      }).array().optional(),
      placement_constraint: z.object({
        expression: z.string().optional(),
        type: z.string(),
      }).array().optional(),
    }).optional(),
  ),
  event_bus_name: resolvableValue(z.string().optional()),
  force_destroy: resolvableValue(z.boolean().optional()),
  http_target: resolvableValue(
    z.object({
      header_parameters: z.record(z.string(), z.string()).optional(),
      path_parameter_values: z.string().array().optional(),
      query_string_parameters: z.record(z.string(), z.string()).optional(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  input: resolvableValue(z.string().optional()),
  input_path: resolvableValue(z.string().optional()),
  input_transformer: resolvableValue(
    z.object({
      input_paths: z.record(z.string(), z.string()).optional(),
      input_template: z.string(),
    }).optional(),
  ),
  kinesis_target: resolvableValue(
    z.object({
      partition_key_path: z.string().optional(),
    }).optional(),
  ),
  redshift_target: resolvableValue(
    z.object({
      database: z.string(),
      db_user: z.string().optional(),
      secrets_manager_arn: z.string().optional(),
      sql: z.string().optional(),
      statement_name: z.string().optional(),
      with_event: z.boolean().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  retry_policy: resolvableValue(
    z.object({
      maximum_event_age_in_seconds: z.number().optional(),
      maximum_retry_attempts: z.number().optional(),
    }).optional(),
  ),
  role_arn: resolvableValue(z.string().optional()),
  run_command_targets: resolvableValue(
    z.object({
      key: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  sagemaker_pipeline_target: resolvableValue(
    z.object({
      pipeline_parameter_list: z.object({
        name: z.string(),
        value: z.string(),
      }).array().optional(),
    }).optional(),
  ),
  sqs_target: resolvableValue(
    z.object({
      message_group_id: z.string().optional(),
    }).optional(),
  ),
  target_id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export const ImportSchema = z.object({
  event_bus_name: resolvableValue(z.string()),
  rule: resolvableValue(z.string()),
  target_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudwatch_event_target

export function AwsCloudwatchEventTarget(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_event_target'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchEventTarget = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCloudwatchEventTarget,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchEventTargets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCloudwatchEventTarget,
    idFilter,
    baseNode,
    optional,
  )
