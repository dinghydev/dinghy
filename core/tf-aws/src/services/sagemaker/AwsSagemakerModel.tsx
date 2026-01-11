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
  execution_role_arn: resolvableValue(z.string()),
  container: resolvableValue(
    z.object({
      container_hostname: z.string().optional(),
      environment: z.record(z.string(), z.string()).optional(),
      image: z.string().optional(),
      inference_specification_name: z.string().optional(),
      mode: z.string().optional(),
      model_data_url: z.string().optional(),
      model_package_name: z.string().optional(),
      additional_model_data_source: z.object({
        channel_name: z.string(),
        s3_data_source: z.object({
          compression_type: z.string(),
          s3_data_type: z.string(),
          s3_uri: z.string(),
          model_access_config: z.object({
            accept_eula: z.boolean(),
          }).optional(),
        }).array(),
      }).array().optional(),
      image_config: z.object({
        repository_access_mode: z.string(),
        repository_auth_config: z.object({
          repository_credentials_provider_arn: z.string(),
        }).optional(),
      }).optional(),
      model_data_source: z.object({
        s3_data_source: z.object({
          compression_type: z.string(),
          s3_data_type: z.string(),
          s3_uri: z.string(),
          model_access_config: z.object({
            accept_eula: z.boolean(),
          }).optional(),
        }).array(),
      }).optional(),
      multi_model_config: z.object({
        model_cache_setting: z.string().optional(),
      }).optional(),
    }).array().optional(),
  ),
  enable_network_isolation: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  inference_execution_config: resolvableValue(
    z.object({
      mode: z.string(),
    }).optional(),
  ),
  name: resolvableValue(z.string().optional()),
  primary_container: resolvableValue(
    z.object({
      container_hostname: z.string().optional(),
      environment: z.record(z.string(), z.string()).optional(),
      image: z.string().optional(),
      inference_specification_name: z.string().optional(),
      mode: z.string().optional(),
      model_data_url: z.string().optional(),
      model_package_name: z.string().optional(),
      additional_model_data_source: z.object({
        channel_name: z.string(),
        s3_data_source: z.object({
          compression_type: z.string(),
          s3_data_type: z.string(),
          s3_uri: z.string(),
          model_access_config: z.object({
            accept_eula: z.boolean(),
          }).optional(),
        }).array(),
      }).array().optional(),
      image_config: z.object({
        repository_access_mode: z.string(),
        repository_auth_config: z.object({
          repository_credentials_provider_arn: z.string(),
        }).optional(),
      }).optional(),
      model_data_source: z.object({
        s3_data_source: z.object({
          compression_type: z.string(),
          s3_data_type: z.string(),
          s3_uri: z.string(),
          model_access_config: z.object({
            accept_eula: z.boolean(),
          }).optional(),
        }).array(),
      }).optional(),
      multi_model_config: z.object({
        model_cache_setting: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  vpc_config: resolvableValue(
    z.object({
      security_group_ids: z.string().array(),
      subnets: z.string().array(),
    }).optional(),
  ),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_model

export function AwsSagemakerModel(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_model'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerModel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsSagemakerModel, idFilter, baseNode, optional)

export const useAwsSagemakerModels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsSagemakerModel, idFilter, baseNode, optional)
