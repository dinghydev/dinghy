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
  production_variants: resolvableValue(
    z.object({
      accelerator_type: z.string().optional(),
      container_startup_health_check_timeout_in_seconds: z.number().optional(),
      enable_ssm_access: z.boolean().optional(),
      inference_ami_version: z.string().optional(),
      initial_instance_count: z.number().optional(),
      initial_variant_weight: z.number().optional(),
      instance_type: z.string().optional(),
      model_data_download_timeout_in_seconds: z.number().optional(),
      model_name: z.string().optional(),
      variant_name: z.string().optional(),
      volume_size_in_gb: z.number().optional(),
      core_dump_config: z.object({
        destination_s3_uri: z.string(),
        kms_key_id: z.string().optional(),
      }).optional(),
      managed_instance_scaling: z.object({
        max_instance_count: z.number().optional(),
        min_instance_count: z.number().optional(),
        status: z.string().optional(),
      }).optional(),
      routing_config: z.object({
        routing_strategy: z.string(),
      }).array().optional(),
      serverless_config: z.object({
        max_concurrency: z.number(),
        memory_size_in_mb: z.number(),
        provisioned_concurrency: z.number().optional(),
      }).optional(),
    }).array(),
  ),
  async_inference_config: resolvableValue(
    z.object({
      client_config: z.object({
        max_concurrent_invocations_per_instance: z.number().optional(),
      }).optional(),
      output_config: z.object({
        kms_key_id: z.string().optional(),
        s3_failure_path: z.string().optional(),
        s3_output_path: z.string(),
        notification_config: z.object({
          error_topic: z.string().optional(),
          include_inference_response_in: z.string().array().optional(),
          success_topic: z.string().optional(),
        }).optional(),
      }),
    }).optional(),
  ),
  data_capture_config: resolvableValue(
    z.object({
      destination_s3_uri: z.string(),
      enable_capture: z.boolean().optional(),
      initial_sampling_percentage: z.number(),
      kms_key_id: z.string().optional(),
      capture_content_type_header: z.object({
        csv_content_types: z.string().array().optional(),
        json_content_types: z.string().array().optional(),
      }).optional(),
      capture_options: z.object({
        capture_mode: z.string(),
      }).array(),
    }).optional(),
  ),
  execution_role_arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  kms_key_arn: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  shadow_production_variants: resolvableValue(
    z.object({
      accelerator_type: z.string().optional(),
      container_startup_health_check_timeout_in_seconds: z.number().optional(),
      enable_ssm_access: z.boolean().optional(),
      inference_ami_version: z.string().optional(),
      initial_instance_count: z.number().optional(),
      initial_variant_weight: z.number().optional(),
      instance_type: z.string().optional(),
      model_data_download_timeout_in_seconds: z.number().optional(),
      model_name: z.string().optional(),
      variant_name: z.string().optional(),
      volume_size_in_gb: z.number().optional(),
      core_dump_config: z.object({
        destination_s3_uri: z.string(),
        kms_key_id: z.string(),
      }).optional(),
      managed_instance_scaling: z.object({
        max_instance_count: z.number().optional(),
        min_instance_count: z.number().optional(),
        status: z.string().optional(),
      }).optional(),
      routing_config: z.object({
        routing_strategy: z.string(),
      }).array().optional(),
      serverless_config: z.object({
        max_concurrency: z.number(),
        memory_size_in_mb: z.number(),
        provisioned_concurrency: z.number().optional(),
      }).optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_endpoint_configuration

export function AwsSagemakerEndpointConfiguration(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_endpoint_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerEndpointConfiguration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsSagemakerEndpointConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerEndpointConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsSagemakerEndpointConfiguration,
    idFilter,
    baseNode,
    optional,
  )
