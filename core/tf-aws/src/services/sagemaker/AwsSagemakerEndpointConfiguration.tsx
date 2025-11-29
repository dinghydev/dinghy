import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_endpoint_configuration

export const InputSchema = z.object({
  async_inference_config: resolvableValue(
    z.object({
      client_config: z.object({
        max_concurrent_invocations_per_instance: z.number().optional(),
      }).optional(),
      output_config: z.object({
        kms_key_id: z.string().optional(),
        s3_failure_path: z.string().optional(),
        s3_output_path: z.string(),
      }),
    }).optional(),
  ),
  data_capture_config: resolvableValue(
    z.object({
      destination_s3_uri: z.string(),
      enable_capture: z.boolean().optional(),
      initial_sampling_percentage: z.number(),
      kms_key_id: z.string().optional(),
    }).optional(),
  ),
  execution_role_arn: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  kms_key_arn: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  production_variants: resolvableValue(z.object({
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
  })),
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
    }).optional(),
  ),
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

export const useAwsSagemakerEndpointConfiguration = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSagemakerEndpointConfiguration, node, id)

export const useAwsSagemakerEndpointConfigurations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsSagemakerEndpointConfiguration, node, id)
