import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_data_quality_job_definition

export const InputSchema = z.object({
  role_arn: resolvableValue(z.string()),
  data_quality_app_specification: resolvableValue(z.object({
    environment: z.record(z.string(), z.string()).optional(),
    image_uri: z.string(),
    post_analytics_processor_source_uri: z.string().optional(),
    record_preprocessor_source_uri: z.string().optional(),
  })),
  data_quality_baseline_config: resolvableValue(
    z.object({
      constraints_resource: z.object({
        s3_uri: z.string().optional(),
      }).optional(),
      statistics_resource: z.object({
        s3_uri: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  data_quality_job_input: resolvableValue(z.object({
    batch_transform_input: z.object({
      data_captured_destination_s3_uri: z.string(),
      local_path: z.string().optional(),
      s3_data_distribution_type: z.string().optional(),
      s3_input_mode: z.string().optional(),
    }).optional(),
    endpoint_input: z.object({
      endpoint_name: z.string(),
      local_path: z.string().optional(),
      s3_data_distribution_type: z.string().optional(),
      s3_input_mode: z.string().optional(),
    }).optional(),
  })),
  data_quality_job_output_config: resolvableValue(z.object({
    kms_key_id: z.string().optional(),
  })),
  id: resolvableValue(z.string().optional()),
  job_resources: resolvableValue(z.object({
    cluster_config: z.object({
      instance_count: z.number(),
      instance_type: z.string(),
      volume_kms_key_id: z.string().optional(),
      volume_size_in_gb: z.number(),
    }),
  })),
  network_config: resolvableValue(
    z.object({
      enable_inter_container_traffic_encryption: z.boolean().optional(),
      enable_network_isolation: z.boolean().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  stopping_condition: resolvableValue(
    z.object({
      max_runtime_in_seconds: z.number().optional(),
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

export function AwsSagemakerDataQualityJobDefinition(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_data_quality_job_definition'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerDataQualityJobDefinition = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsSagemakerDataQualityJobDefinition, node, id)

export const useAwsSagemakerDataQualityJobDefinitions = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsSagemakerDataQualityJobDefinition, node, id)
