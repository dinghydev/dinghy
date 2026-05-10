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
  monitoring_schedule_config: resolvableValue(z.object({
    monitoring_job_definition_name: z.string().optional(),
    monitoring_type: z.string(),
    monitoring_job_definition: z.object({
      environment: z.record(z.string(), z.string()).optional(),
      role_arn: z.string(),
      baseline: z.object({
        baselining_job_name: z.string().optional(),
        constraints_resource: z.object({
          s3_uri: z.string().optional(),
        }).optional(),
        statistics_resource: z.object({
          s3_uri: z.string().optional(),
        }).optional(),
      }).optional(),
      monitoring_app_specification: z.object({
        container_arguments: z.string().array().optional(),
        container_entrypoint: z.string().array().optional(),
        image_uri: z.string(),
        post_analytics_processor_source_uri: z.string().optional(),
        record_preprocessor_source_uri: z.string().optional(),
      }),
      monitoring_inputs: z.object({
        batch_transform_input: z.object({
          data_captured_destination_s3_uri: z.string(),
          end_time_offset: z.string().optional(),
          exclude_features_attribute: z.string().optional(),
          features_attribute: z.string().optional(),
          inference_attribute: z.string().optional(),
          local_path: z.string(),
          probability_attribute: z.string().optional(),
          probability_threshold_attribute: z.number().optional(),
          s3_data_distribution_type: z.string().optional(),
          s3_input_mode: z.string().optional(),
          start_time_offset: z.string().optional(),
          dataset_format: z.object({
            csv: z.object({
              header: z.boolean().optional(),
            }).optional(),
            json: z.object({
              line: z.boolean().optional(),
            }).optional(),
          }),
        }).optional(),
        endpoint_input: z.object({
          end_time_offset: z.string().optional(),
          endpoint_name: z.string(),
          exclude_features_attribute: z.string().optional(),
          features_attribute: z.string().optional(),
          inference_attribute: z.string().optional(),
          local_path: z.string(),
          probability_attribute: z.string().optional(),
          probability_threshold_attribute: z.number().optional(),
          s3_data_distribution_type: z.string().optional(),
          s3_input_mode: z.string().optional(),
          start_time_offset: z.string().optional(),
        }).optional(),
      }),
      monitoring_output_config: z.object({
        kms_key_id: z.string().optional(),
        monitoring_outputs: z.object({
          s3_output: z.object({
            local_path: z.string(),
            s3_upload_mode: z.string().optional(),
            s3_uri: z.string(),
          }),
        }),
      }),
      monitoring_resources: z.object({
        cluster_config: z.object({
          instance_count: z.number(),
          instance_type: z.string(),
          volume_kms_key_id: z.string().optional(),
          volume_size_in_gb: z.number(),
        }),
      }),
      network_config: z.object({
        enable_inter_container_traffic_encryption: z.boolean().optional(),
        enable_network_isolation: z.boolean().optional(),
        vpc_config: z.object({
          security_group_ids: z.string().array(),
          subnets: z.string().array(),
        }).optional(),
      }).optional(),
      stopping_condition: z.object({
        max_runtime_in_seconds: z.number().optional(),
      }).array().optional(),
    }).optional(),
    schedule_config: z.object({
      schedule_expression: z.string(),
    }).optional(),
  })),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  name: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_monitoring_schedule

export function AwsSagemakerMonitoringSchedule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_monitoring_schedule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerMonitoringSchedule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsSagemakerMonitoringSchedule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerMonitoringSchedules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsSagemakerMonitoringSchedule,
    idFilter,
    baseNode,
    optional,
  )
