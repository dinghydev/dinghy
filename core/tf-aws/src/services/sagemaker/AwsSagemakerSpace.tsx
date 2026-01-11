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
  domain_id: resolvableValue(z.string()),
  space_name: resolvableValue(z.string()),
  ownership_settings: resolvableValue(
    z.object({
      owner_user_profile_name: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  space_display_name: resolvableValue(z.string().optional()),
  space_settings: resolvableValue(
    z.object({
      app_type: z.string().optional(),
      code_editor_app_settings: z.object({
        app_lifecycle_management: z.object({
          idle_settings: z.object({
            idle_timeout_in_minutes: z.number().optional(),
          }).optional(),
        }).optional(),
        default_resource_spec: z.object({
          instance_type: z.string().optional(),
          lifecycle_config_arn: z.string().optional(),
          sagemaker_image_arn: z.string().optional(),
          sagemaker_image_version_alias: z.string().optional(),
          sagemaker_image_version_arn: z.string().optional(),
        }),
      }).optional(),
      custom_file_system: z.object({
        efs_file_system: z.object({
          file_system_id: z.string(),
        }),
      }).array().optional(),
      jupyter_lab_app_settings: z.object({
        app_lifecycle_management: z.object({
          idle_settings: z.object({
            idle_timeout_in_minutes: z.number().optional(),
          }).optional(),
        }).optional(),
        code_repository: z.object({
          repository_url: z.string(),
        }).array().optional(),
        default_resource_spec: z.object({
          instance_type: z.string().optional(),
          lifecycle_config_arn: z.string().optional(),
          sagemaker_image_arn: z.string().optional(),
          sagemaker_image_version_alias: z.string().optional(),
          sagemaker_image_version_arn: z.string().optional(),
        }),
      }).optional(),
      jupyter_server_app_settings: z.object({
        lifecycle_config_arns: z.string().array().optional(),
        code_repository: z.object({
          repository_url: z.string(),
        }).array().optional(),
        default_resource_spec: z.object({
          instance_type: z.string().optional(),
          lifecycle_config_arn: z.string().optional(),
          sagemaker_image_arn: z.string().optional(),
          sagemaker_image_version_alias: z.string().optional(),
          sagemaker_image_version_arn: z.string().optional(),
        }),
      }).optional(),
      kernel_gateway_app_settings: z.object({
        lifecycle_config_arns: z.string().array().optional(),
        custom_image: z.object({
          app_image_config_name: z.string(),
          image_name: z.string(),
          image_version_number: z.number().optional(),
        }).array().optional(),
        default_resource_spec: z.object({
          instance_type: z.string().optional(),
          lifecycle_config_arn: z.string().optional(),
          sagemaker_image_arn: z.string().optional(),
          sagemaker_image_version_alias: z.string().optional(),
          sagemaker_image_version_arn: z.string().optional(),
        }),
      }).optional(),
      space_storage_settings: z.object({
        ebs_storage_settings: z.object({
          ebs_volume_size_in_gb: z.number(),
        }),
      }).optional(),
    }).optional(),
  ),
  space_sharing_settings: resolvableValue(
    z.object({
      sharing_type: z.string(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  home_efs_file_system_uid: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  url: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_space

export function AwsSagemakerSpace(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_space'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerSpace = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsSagemakerSpace, idFilter, baseNode, optional)

export const useAwsSagemakerSpaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsSagemakerSpace, idFilter, baseNode, optional)
