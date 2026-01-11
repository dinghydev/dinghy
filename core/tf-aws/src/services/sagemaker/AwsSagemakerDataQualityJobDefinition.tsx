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
  data_quality_app_specification: resolvableValue(z.object({
    environment: z.record(z.string(), z.string()).optional(),
    image_uri: z.string(),
    post_analytics_processor_source_uri: z.string().optional(),
    record_preprocessor_source_uri: z.string().optional(),
  })),
  data_quality_job_input: resolvableValue(z.object({
    batch_transform_input: z.object({
      data_captured_destination_s3_uri: z.string(),
      local_path: z.string().optional(),
      s3_data_distribution_type: z.string().optional(),
      s3_input_mode: z.string().optional(),
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
      endpoint_name: z.string(),
      local_path: z.string().optional(),
      s3_data_distribution_type: z.string().optional(),
      s3_input_mode: z.string().optional(),
    }).optional(),
  })),
  data_quality_job_output_config: resolvableValue(z.object({
    kms_key_id: z.string().optional(),
    monitoring_outputs: z.object({
      s3_output: z.object({
        local_path: z.string().optional(),
        s3_upload_mode: z.string().optional(),
        s3_uri: z.string(),
      }),
    }),
  })),
  job_resources: resolvableValue(z.object({
    cluster_config: z.object({
      instance_count: z.number(),
      instance_type: z.string(),
      volume_kms_key_id: z.string().optional(),
      volume_size_in_gb: z.number(),
    }),
  })),
  role_arn: resolvableValue(z.string()),
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
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  network_config: resolvableValue(
    z.object({
      enable_inter_container_traffic_encryption: z.boolean().optional(),
      enable_network_isolation: z.boolean().optional(),
      vpc_config: z.object({
        security_group_ids: z.string().array(),
        subnets: z.string().array(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  stopping_condition: resolvableValue(
    z.object({
      max_runtime_in_seconds: z.number().optional(),
    }).optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_data_quality_job_definition

export function AwsSagemakerDataQualityJobDefinition(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsSagemakerDataQualityJobDefinition,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerDataQualityJobDefinitions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsSagemakerDataQualityJobDefinition,
    idFilter,
    baseNode,
    optional,
  )
