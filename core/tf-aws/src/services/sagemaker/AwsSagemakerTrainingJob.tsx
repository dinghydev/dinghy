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

export const AwsSagemakerTrainingJobInputSchema = TfMetaSchema.extend({
  role_arn: resolvableValue(z.string()),
  training_job_name: resolvableValue(z.string()),
  algorithm_specification: resolvableValue(
    z.object({
      algorithm_name: z.string().optional(),
      container_arguments: z.string().array().optional(),
      container_entrypoint: z.string().array().optional(),
      enable_sagemaker_metrics_time_series: z.boolean().optional(),
      training_image: z.string().optional(),
      training_input_mode: z.string().optional(),
      metric_definitions: z.object({
        name: z.string(),
        regex: z.string(),
      }).array().optional(),
      training_image_config: z.object({
        training_repository_access_mode: z.string().optional(),
        training_repository_auth_config: z.object({
          training_repository_credentials_provider_arn: z.string().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  checkpoint_config: resolvableValue(
    z.object({
      local_path: z.string().optional(),
      s3_uri: z.string(),
    }).array().optional(),
  ),
  debug_hook_config: resolvableValue(
    z.object({
      hook_parameters: z.record(z.string(), z.string()).optional(),
      local_path: z.string().optional(),
      s3_output_path: z.string(),
      collection_configurations: z.object({
        collection_name: z.string().optional(),
        collection_parameters: z.record(z.string(), z.string()).optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  debug_rule_configurations: resolvableValue(
    z.object({
      instance_type: z.string().optional(),
      local_path: z.string().optional(),
      rule_configuration_name: z.string(),
      rule_evaluator_image: z.string(),
      rule_parameters: z.record(z.string(), z.string()).optional(),
      s3_output_path: z.string().optional(),
      volume_size_in_gb: z.number().optional(),
    }).array().optional(),
  ),
  delete_model_packages_on_destroy: resolvableValue(z.boolean().optional()),
  delete_vpc_enis_on_destroy: resolvableValue(z.boolean().optional()),
  enable_inter_container_traffic_encryption: resolvableValue(
    z.boolean().optional(),
  ),
  enable_managed_spot_training: resolvableValue(z.boolean().optional()),
  enable_network_isolation: resolvableValue(z.boolean().optional()),
  environment: resolvableValue(z.record(z.string(), z.string()).optional()),
  experiment_config: resolvableValue(
    z.object({
      experiment_name: z.string().optional(),
      run_name: z.string().optional(),
      trial_component_display_name: z.string().optional(),
      trial_name: z.string().optional(),
    }).array().optional(),
  ),
  hyper_parameters: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  infra_check_config: resolvableValue(
    z.object({
      enable_infra_check: z.boolean().optional(),
    }).array().optional(),
  ),
  input_data_config: resolvableValue(
    z.object({
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
        seed: z.number().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  mlflow_config: resolvableValue(
    z.object({
      mlflow_experiment_name: z.string().optional(),
      mlflow_resource_arn: z.string(),
      mlflow_run_name: z.string().optional(),
    }).array().optional(),
  ),
  model_package_config: resolvableValue(
    z.object({
      model_package_group_arn: z.string(),
      source_model_package_arn: z.string().optional(),
    }).array().optional(),
  ),
  output_data_config: resolvableValue(
    z.object({
      compression_type: z.string().optional(),
      kms_key_id: z.string().optional(),
      s3_output_path: z.string(),
    }).array().optional(),
  ),
  profiler_config: resolvableValue(
    z.object({
      disable_profiler: z.boolean().optional(),
      profiling_interval_in_milliseconds: z.number().optional(),
      profiling_parameters: z.record(z.string(), z.string()).optional(),
      s3_output_path: z.string().optional(),
    }).array().optional(),
  ),
  profiler_rule_configurations: resolvableValue(
    z.object({
      instance_type: z.string().optional(),
      local_path: z.string().optional(),
      rule_configuration_name: z.string(),
      rule_evaluator_image: z.string(),
      rule_parameters: z.record(z.string(), z.string()).optional(),
      s3_output_path: z.string().optional(),
      volume_size_in_gb: z.number().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  remote_debug_config: resolvableValue(
    z.object({
      enable_remote_debug: z.boolean().optional(),
    }).array().optional(),
  ),
  resource_config: resolvableValue(
    z.object({
      instance_count: z.number().optional(),
      instance_type: z.string().optional(),
      keep_alive_period_in_seconds: z.number().optional(),
      training_plan_arn: z.string().optional(),
      volume_kms_key_id: z.string().optional(),
      volume_size_in_gb: z.number().optional(),
      instance_groups: z.object({
        instance_count: z.number().optional(),
        instance_group_name: z.string().optional(),
        instance_type: z.string().optional(),
      }).array().optional(),
      instance_placement_config: z.object({
        enable_multiple_jobs: z.boolean().optional(),
        placement_specifications: z.object({
          instance_count: z.number().optional(),
          ultra_server_id: z.string().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  retry_strategy: resolvableValue(
    z.object({
      maximum_retry_attempts: z.number(),
    }).array().optional(),
  ),
  serverless_job_config: resolvableValue(
    z.object({
      accept_eula: z.boolean().optional(),
      base_model_arn: z.string(),
      customization_technique: z.string().optional(),
      evaluation_type: z.string().optional(),
      evaluator_arn: z.string().optional(),
      job_type: z.string(),
      peft: z.string().optional(),
    }).array().optional(),
  ),
  session_chaining_config: resolvableValue(
    z.object({
      enable_session_tag_chaining: z.boolean().optional(),
    }).array().optional(),
  ),
  stopping_condition: resolvableValue(
    z.object({
      max_pending_time_in_seconds: z.number().optional(),
      max_runtime_in_seconds: z.number().optional(),
      max_wait_time_in_seconds: z.number().optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tensor_board_output_config: resolvableValue(
    z.object({
      local_path: z.string().optional(),
      s3_output_path: z.string(),
    }).array().optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc_config: resolvableValue(
    z.object({
      security_group_ids: z.string().array(),
      subnets: z.string().array(),
    }).array().optional(),
  ),
})

export const AwsSagemakerTrainingJobOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsSagemakerTrainingJobImportSchema = z.object({
  training_job_name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsSagemakerTrainingJobInputProps =
  & z.input<typeof AwsSagemakerTrainingJobInputSchema>
  & z.input<typeof AwsSagemakerTrainingJobImportSchema>
  & NodeProps

export type AwsSagemakerTrainingJobOutputProps =
  & z.output<typeof AwsSagemakerTrainingJobOutputSchema>
  & z.output<typeof AwsSagemakerTrainingJobInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_training_job

export function AwsSagemakerTrainingJob(
  props: Partial<AwsSagemakerTrainingJobInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_training_job'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSagemakerTrainingJobInputSchema}
      _outputSchema={AwsSagemakerTrainingJobOutputSchema}
      _importSchema={AwsSagemakerTrainingJobImportSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerTrainingJob = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSagemakerTrainingJobOutputProps>(
    AwsSagemakerTrainingJob,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerTrainingJobs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSagemakerTrainingJobOutputProps>(
    AwsSagemakerTrainingJob,
    idFilter,
    baseNode,
    optional,
  )
