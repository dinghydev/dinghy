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

export const AwsSagemakerAlgorithmInputSchema = TfMetaSchema.extend({
  algorithm_name: resolvableValue(z.string()),
  algorithm_description: resolvableValue(z.string().optional()),
  certify_for_marketplace: resolvableValue(z.boolean().optional()),
  inference_specification: resolvableValue(
    z.object({
      supported_content_types: z.string().array().optional(),
      supported_realtime_inference_instance_types: z.string().array()
        .optional(),
      supported_response_mime_types: z.string().array().optional(),
      supported_transform_instance_types: z.string().array().optional(),
      containers: z.object({
        container_hostname: z.string().optional(),
        environment: z.record(z.string(), z.string()).optional(),
        framework: z.string().optional(),
        framework_version: z.string().optional(),
        image: z.string().optional(),
        image_digest: z.string().optional(),
        is_checkpoint: z.boolean().optional(),
        model_data_etag: z.string().optional(),
        model_data_url: z.string().optional(),
        nearest_model_name: z.string().optional(),
        product_id: z.string().optional(),
        additional_s3_data_source: z.object({
          compression_type: z.string().optional(),
          etag: z.string().optional(),
          s3_data_type: z.string(),
          s3_uri: z.string(),
        }).array().optional(),
        base_model: z.object({
          hub_content_name: z.string().optional(),
          hub_content_version: z.string().optional(),
          recipe_name: z.string().optional(),
        }).array().optional(),
        model_data_source: z.object({
          s3_data_source: z.object({
            compression_type: z.string(),
            etag: z.string().optional(),
            manifest_etag: z.string().optional(),
            manifest_s3_uri: z.string().optional(),
            s3_data_type: z.string(),
            s3_uri: z.string(),
            hub_access_config: z.object({
              hub_content_arn: z.string().optional(),
            }).array().optional(),
            model_access_config: z.object({
              accept_eula: z.boolean().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        model_input: z.object({
          data_input_config: z.string().optional(),
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
  training_specification: resolvableValue(
    z.object({
      supported_training_instance_types: z.string().array(),
      supports_distributed_training: z.boolean().optional(),
      training_image: z.string(),
      training_image_digest: z.string().optional(),
      additional_s3_data_source: z.object({
        compression_type: z.string().optional(),
        etag: z.string().optional(),
        s3_data_type: z.string(),
        s3_uri: z.string(),
      }).array().optional(),
      metric_definitions: z.object({
        name: z.string(),
        regex: z.string(),
      }).array().optional(),
      supported_hyper_parameters: z.object({
        default_value: z.string().optional(),
        description: z.string().optional(),
        is_required: z.boolean().optional(),
        is_tunable: z.boolean().optional(),
        name: z.string(),
        type: z.string(),
        range: z.object({
          categorical_parameter_range_specification: z.object({
            values: z.string().array(),
          }).array().optional(),
          continuous_parameter_range_specification: z.object({
            max_value: z.string(),
            min_value: z.string(),
          }).array().optional(),
          integer_parameter_range_specification: z.object({
            max_value: z.string(),
            min_value: z.string(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
      supported_tuning_job_objective_metrics: z.object({
        metric_name: z.string(),
        type: z.string(),
      }).array().optional(),
      training_channels: z.object({
        description: z.string().optional(),
        is_required: z.boolean().optional(),
        name: z.string(),
        supported_compression_types: z.string().array().optional(),
        supported_content_types: z.string().array(),
        supported_input_modes: z.string().array(),
      }).array().optional(),
    }).array().optional(),
  ),
  validation_specification: resolvableValue(
    z.object({
      validation_role: z.string(),
      validation_profiles: z.object({
        profile_name: z.string(),
        training_job_definition: z.object({
          hyper_parameters: z.record(z.string(), z.string()).optional(),
          training_input_mode: z.string(),
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
                  hub_content_arn: z.string().optional(),
                }).array().optional(),
                model_access_config: z.object({
                  accept_eula: z.boolean().optional(),
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
        }).array().optional(),
        transform_job_definition: z.object({
          batch_strategy: z.string().optional(),
          environment: z.record(z.string(), z.string()).optional(),
          max_concurrent_transforms: z.number().optional(),
          max_payload_in_mb: z.number().optional(),
          transform_input: z.object({
            compression_type: z.string().optional(),
            content_type: z.string().optional(),
            split_type: z.string().optional(),
            data_source: z.object({
              s3_data_source: z.object({
                s3_data_type: z.string(),
                s3_uri: z.string(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          transform_output: z.object({
            accept: z.string().optional(),
            assemble_with: z.string().optional(),
            kms_key_id: z.string().optional(),
            s3_output_path: z.string(),
          }).array().optional(),
          transform_resources: z.object({
            instance_count: z.number(),
            instance_type: z.string(),
            transform_ami_version: z.string().optional(),
            volume_kms_key_id: z.string().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
})

export const AwsSagemakerAlgorithmOutputSchema = z.object({
  algorithm_status: z.string().optional(),
  arn: z.string().optional(),
  creation_time: z.string().optional(),
  product_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsSagemakerAlgorithmImportSchema = z.object({
  algorithm_name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsSagemakerAlgorithmInputProps =
  & z.input<typeof AwsSagemakerAlgorithmInputSchema>
  & z.input<typeof AwsSagemakerAlgorithmImportSchema>
  & NodeProps

export type AwsSagemakerAlgorithmOutputProps =
  & z.output<typeof AwsSagemakerAlgorithmOutputSchema>
  & z.output<typeof AwsSagemakerAlgorithmInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_algorithm

export function AwsSagemakerAlgorithm(
  props: Partial<AwsSagemakerAlgorithmInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_algorithm'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSagemakerAlgorithmInputSchema}
      _outputSchema={AwsSagemakerAlgorithmOutputSchema}
      _importSchema={AwsSagemakerAlgorithmImportSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerAlgorithm = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSagemakerAlgorithmOutputProps>(
    AwsSagemakerAlgorithm,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerAlgorithms = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSagemakerAlgorithmOutputProps>(
    AwsSagemakerAlgorithm,
    idFilter,
    baseNode,
    optional,
  )
