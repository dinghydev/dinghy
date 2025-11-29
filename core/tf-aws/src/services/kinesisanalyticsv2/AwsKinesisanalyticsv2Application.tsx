import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/kinesisanalyticsv2_application

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  runtime_environment: resolvableValue(z.string()),
  service_execution_role: resolvableValue(z.string()),
  application_configuration: resolvableValue(
    z.object({
      application_code_configuration: z.object({
        code_content_type: z.string(),
      }),
      application_snapshot_configuration: z.object({
        snapshots_enabled: z.boolean(),
      }).optional(),
      environment_properties: z.object({
        property_group: z.object({
          property_group_id: z.string(),
          property_map: z.record(z.string(), z.string()),
        }).array(),
      }).optional(),
      flink_application_configuration: z.object({
        checkpoint_configuration: z.object({
          checkpoint_interval: z.number().optional(),
          checkpointing_enabled: z.boolean().optional(),
          configuration_type: z.string(),
          min_pause_between_checkpoints: z.number().optional(),
        }).optional(),
        monitoring_configuration: z.object({
          configuration_type: z.string(),
          log_level: z.string().optional(),
          metrics_level: z.string().optional(),
        }).optional(),
        parallelism_configuration: z.object({
          auto_scaling_enabled: z.boolean().optional(),
          configuration_type: z.string(),
          parallelism: z.number().optional(),
          parallelism_per_kpu: z.number().optional(),
        }).optional(),
      }).optional(),
      run_configuration: z.object({
        application_restore_configuration: z.object({
          application_restore_type: z.string().optional(),
          snapshot_name: z.string().optional(),
        }).optional(),
        flink_run_configuration: z.object({
          allow_non_restored_state: z.boolean().optional(),
        }).optional(),
      }).optional(),
      sql_application_configuration: z.object({
        input: z.object({
          in_app_stream_names: z.string().array(),
          input_id: z.string(),
          name_prefix: z.string(),
        }).optional(),
        output: z.object({
          name: z.string(),
          output_id: z.string(),
        }).array().optional(),
        reference_data_source: z.object({
          reference_id: z.string(),
          table_name: z.string(),
        }).optional(),
      }).optional(),
      vpc_configuration: z.object({
        security_group_ids: z.string().array(),
        subnet_ids: z.string().array(),
        vpc_configuration_id: z.string(),
        vpc_id: z.string(),
      }).optional(),
    }).optional(),
  ),
  application_mode: resolvableValue(z.string().optional()),
  cloudwatch_logging_options: resolvableValue(
    z.object({
      cloudwatch_logging_option_id: z.string(),
      log_stream_arn: z.string(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  force_stop: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  start_application: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  create_timestamp: z.string().optional(),
  id: z.string().optional(),
  last_update_timestamp: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version_id: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsKinesisanalyticsv2Application(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_kinesisanalyticsv2_application'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsKinesisanalyticsv2Application = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsKinesisanalyticsv2Application, node, id)

export const useAwsKinesisanalyticsv2Applications = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsKinesisanalyticsv2Application, node, id)
