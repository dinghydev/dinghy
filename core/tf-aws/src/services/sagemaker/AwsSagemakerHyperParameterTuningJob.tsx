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
  name: resolvableValue(z.string()),
  autotune: resolvableValue(
    z.object({
      mode: z.string(),
    }).array().optional(),
  ),
  config: resolvableValue(
    z.object({
      random_seed: z.number().optional(),
      strategy: z.string(),
      training_job_early_stopping_type: z.string().optional(),
      objective: z.object({
        metric_name: z.string(),
        type: z.string(),
      }).array().optional(),
      parameter_ranges: z.object({
        auto_parameters: z.object({
          name: z.string(),
          value_hint: z.string(),
        }).array().optional(),
        categorical_parameter_ranges: z.object({
          name: z.string(),
          values: z.string().array(),
        }).array().optional(),
        continuous_parameter_ranges: z.object({
          max_value: z.string(),
          min_value: z.string(),
          name: z.string(),
          scaling_type: z.string().optional(),
        }).array().optional(),
        integer_parameter_ranges: z.object({
          max_value: z.string(),
          min_value: z.string(),
          name: z.string(),
          scaling_type: z.string().optional(),
        }).array().optional(),
      }).array().optional(),
      resource_limits: z.object({
        max_number_of_training_jobs: z.number().optional(),
        max_parallel_training_jobs: z.number(),
        max_runtime_in_seconds: z.number().optional(),
      }).array().optional(),
      strategy_config: z.object({
        hyperband_strategy_config: z.object({
          max_resource: z.number().optional(),
          min_resource: z.number().optional(),
        }).array().optional(),
      }).array().optional(),
      tuning_job_completion_criteria: z.object({
        target_objective_metric_value: z.number().optional(),
        best_objective_not_improving: z.object({
          max_number_of_training_jobs_not_improving: z.number().optional(),
        }).array().optional(),
        convergence_detected: z.object({
          complete_on_convergence: z.string().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
  training_job_definition: resolvableValue(
    z.object({
      definition_name: z.string().optional(),
      enable_inter_container_traffic_encryption: z.boolean().optional(),
      enable_managed_spot_training: z.boolean().optional(),
      enable_network_isolation: z.boolean().optional(),
      environment: z.record(z.string(), z.string()).optional(),
      retry_strategy: z.object({
        maximum_retry_attempts: z.number(),
      }).array().optional(),
      role_arn: z.string(),
      static_hyper_parameters: z.record(z.string(), z.string()).optional(),
      algorithm_specification: z.object({
        algorithm_name: z.string().optional(),
        training_image: z.string().optional(),
        training_input_mode: z.string(),
        metric_definitions: z.object({
          name: z.string(),
          regex: z.string(),
        }).array().optional(),
      }).array().optional(),
      checkpoint_config: z.object({
        local_path: z.string().optional(),
        s3_uri: z.string(),
      }).array().optional(),
      hyper_parameter_ranges: z.object({
        auto_parameters: z.object({
          name: z.string(),
          value_hint: z.string(),
        }).array().optional(),
        categorical_parameter_ranges: z.object({
          name: z.string(),
          values: z.string().array(),
        }).array().optional(),
        continuous_parameter_ranges: z.object({
          max_value: z.string(),
          min_value: z.string(),
          name: z.string(),
          scaling_type: z.string().optional(),
        }).array().optional(),
        integer_parameter_ranges: z.object({
          max_value: z.string(),
          min_value: z.string(),
          name: z.string(),
          scaling_type: z.string().optional(),
        }).array().optional(),
      }).array().optional(),
      hyper_parameter_tuning_resource_config: z.object({
        allocation_strategy: z.string().optional(),
        instance_count: z.number().optional(),
        instance_type: z.string().optional(),
        volume_kms_key_id: z.string().optional(),
        volume_size_in_gb: z.number().optional(),
        instance_configs: z.object({
          instance_count: z.number().optional(),
          instance_type: z.string().optional(),
          volume_size_in_gb: z.number().optional(),
        }).array().optional(),
      }).array().optional(),
      input_data_config: z.object({
        channel_name: z.string(),
        compression_type: z.string().optional(),
        content_type: z.string().optional(),
        input_mode: z.string().optional(),
        record_wrapper_type: z.string().optional(),
        data_source: z.object({
          file_system_data_source: z.object({
            directory_path: z.string(),
            file_system_access_mode: z.string(),
            file_system_id: z.string(),
            file_system_type: z.string(),
          }).array().optional(),
          s3_data_source: z.object({
            attribute_names: z.string().array().optional(),
            instance_group_names: z.string().array().optional(),
            s3_data_distribution_type: z.string().optional(),
            s3_data_type: z.string(),
            s3_uri: z.string(),
            hub_access_config: z.object({
              hub_content_arn: z.string(),
            }).array().optional(),
            model_access_config: z.object({
              accept_eula: z.boolean(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        shuffle_config: z.object({
          seed: z.number(),
        }).array().optional(),
      }).array().optional(),
      output_data_config: z.object({
        compression_type: z.string().optional(),
        kms_key_id: z.string().optional(),
        s3_output_path: z.string(),
      }).array().optional(),
      resource_config: z.object({
        instance_count: z.number().optional(),
        instance_type: z.string().optional(),
        keep_alive_period_in_seconds: z.number().optional(),
        training_plan_arn: z.string().optional(),
        volume_kms_key_id: z.string().optional(),
        volume_size_in_gb: z.number().optional(),
        instance_groups: z.object({
          instance_count: z.number(),
          instance_group_name: z.string(),
          instance_type: z.string(),
        }).array().optional(),
        instance_placement_config: z.object({
          enable_multiple_jobs: z.boolean().optional(),
          placement_specifications: z.object({
            instance_count: z.number(),
            ultra_server_id: z.string().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
      stopping_condition: z.object({
        max_pending_time_in_seconds: z.number().optional(),
        max_runtime_in_seconds: z.number().optional(),
        max_wait_time_in_seconds: z.number().optional(),
      }).array().optional(),
      tuning_objective: z.object({
        metric_name: z.string(),
        type: z.string(),
      }).array().optional(),
      vpc_config: z.object({
        security_group_ids: z.string().array(),
        subnets: z.string().array(),
      }).array().optional(),
    }).array().optional(),
  ),
  training_job_definitions: resolvableValue(
    z.object({
      definition_name: z.string().optional(),
      enable_inter_container_traffic_encryption: z.boolean().optional(),
      enable_managed_spot_training: z.boolean().optional(),
      enable_network_isolation: z.boolean().optional(),
      environment: z.record(z.string(), z.string()).optional(),
      retry_strategy: z.object({
        maximum_retry_attempts: z.number(),
      }).array().optional(),
      role_arn: z.string(),
      static_hyper_parameters: z.record(z.string(), z.string()).optional(),
      algorithm_specification: z.object({
        algorithm_name: z.string().optional(),
        training_image: z.string().optional(),
        training_input_mode: z.string(),
        metric_definitions: z.object({
          name: z.string(),
          regex: z.string(),
        }).array().optional(),
      }).array().optional(),
      checkpoint_config: z.object({
        local_path: z.string().optional(),
        s3_uri: z.string(),
      }).array().optional(),
      hyper_parameter_ranges: z.object({
        auto_parameters: z.object({
          name: z.string(),
          value_hint: z.string(),
        }).array().optional(),
        categorical_parameter_ranges: z.object({
          name: z.string(),
          values: z.string().array(),
        }).array().optional(),
        continuous_parameter_ranges: z.object({
          max_value: z.string(),
          min_value: z.string(),
          name: z.string(),
          scaling_type: z.string().optional(),
        }).array().optional(),
        integer_parameter_ranges: z.object({
          max_value: z.string(),
          min_value: z.string(),
          name: z.string(),
          scaling_type: z.string().optional(),
        }).array().optional(),
      }).array().optional(),
      hyper_parameter_tuning_resource_config: z.object({
        allocation_strategy: z.string().optional(),
        instance_count: z.number().optional(),
        instance_type: z.string().optional(),
        volume_kms_key_id: z.string().optional(),
        volume_size_in_gb: z.number().optional(),
        instance_configs: z.object({
          instance_count: z.number().optional(),
          instance_type: z.string().optional(),
          volume_size_in_gb: z.number().optional(),
        }).array().optional(),
      }).array().optional(),
      input_data_config: z.object({
        channel_name: z.string(),
        compression_type: z.string().optional(),
        content_type: z.string().optional(),
        input_mode: z.string().optional(),
        record_wrapper_type: z.string().optional(),
        data_source: z.object({
          file_system_data_source: z.object({
            directory_path: z.string(),
            file_system_access_mode: z.string(),
            file_system_id: z.string(),
            file_system_type: z.string(),
          }).array().optional(),
          s3_data_source: z.object({
            attribute_names: z.string().array().optional(),
            instance_group_names: z.string().array().optional(),
            s3_data_distribution_type: z.string().optional(),
            s3_data_type: z.string(),
            s3_uri: z.string(),
            hub_access_config: z.object({
              hub_content_arn: z.string(),
            }).array().optional(),
            model_access_config: z.object({
              accept_eula: z.boolean(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        shuffle_config: z.object({
          seed: z.number(),
        }).array().optional(),
      }).array().optional(),
      output_data_config: z.object({
        compression_type: z.string().optional(),
        kms_key_id: z.string().optional(),
        s3_output_path: z.string(),
      }).array().optional(),
      resource_config: z.object({
        instance_count: z.number().optional(),
        instance_type: z.string().optional(),
        keep_alive_period_in_seconds: z.number().optional(),
        training_plan_arn: z.string().optional(),
        volume_kms_key_id: z.string().optional(),
        volume_size_in_gb: z.number().optional(),
        instance_groups: z.object({
          instance_count: z.number(),
          instance_group_name: z.string(),
          instance_type: z.string(),
        }).array().optional(),
        instance_placement_config: z.object({
          enable_multiple_jobs: z.boolean().optional(),
          placement_specifications: z.object({
            instance_count: z.number(),
            ultra_server_id: z.string().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
      stopping_condition: z.object({
        max_pending_time_in_seconds: z.number().optional(),
        max_runtime_in_seconds: z.number().optional(),
        max_wait_time_in_seconds: z.number().optional(),
      }).array().optional(),
      tuning_objective: z.object({
        metric_name: z.string(),
        type: z.string(),
      }).array().optional(),
      vpc_config: z.object({
        security_group_ids: z.string().array(),
        subnets: z.string().array(),
      }).array().optional(),
    }).array().optional(),
  ),
  warm_start_config: resolvableValue(
    z.object({
      warm_start_type: z.string().optional(),
      parent_hyper_parameter_tuning_jobs: z.object({
        name: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  failure_reason: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  name: resolvableValue(z.string()),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_hyper_parameter_tuning_job

export function AwsSagemakerHyperParameterTuningJob(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_hyper_parameter_tuning_job'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerHyperParameterTuningJob = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsSagemakerHyperParameterTuningJob,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerHyperParameterTuningJobs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsSagemakerHyperParameterTuningJob,
    idFilter,
    baseNode,
    optional,
  )
