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
  domain_id: resolvableValue(z.string()),
  user_profile_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  single_sign_on_user_identifier: resolvableValue(z.string().optional()),
  single_sign_on_user_value: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  user_settings: resolvableValue(
    z.object({
      auto_mount_home_efs: z.string().optional(),
      default_landing_uri: z.string().optional(),
      execution_role: z.string(),
      security_groups: z.string().array().optional(),
      studio_web_portal: z.string().optional(),
      canvas_app_settings: z.object({
        direct_deploy_settings: z.object({
          status: z.string().optional(),
        }).optional(),
        emr_serverless_settings: z.object({
          execution_role_arn: z.string().optional(),
          status: z.string().optional(),
        }).optional(),
        generative_ai_settings: z.object({
          amazon_bedrock_role_arn: z.string().optional(),
        }).optional(),
        identity_provider_oauth_settings: z.object({
          data_source_name: z.string().optional(),
          secret_arn: z.string(),
          status: z.string().optional(),
        }).array().optional(),
        kendra_settings: z.object({
          status: z.string().optional(),
        }).optional(),
        model_register_settings: z.object({
          cross_account_model_register_role_arn: z.string().optional(),
          status: z.string().optional(),
        }).optional(),
        time_series_forecasting_settings: z.object({
          amazon_forecast_role_arn: z.string().optional(),
          status: z.string().optional(),
        }).optional(),
        workspace_settings: z.object({
          s3_artifact_path: z.string().optional(),
          s3_kms_key_id: z.string().optional(),
        }).optional(),
      }).optional(),
      code_editor_app_settings: z.object({
        built_in_lifecycle_config_arn: z.string().optional(),
        lifecycle_config_arns: z.string().array().optional(),
        app_lifecycle_management: z.object({
          idle_settings: z.object({
            idle_timeout_in_minutes: z.number().optional(),
            lifecycle_management: z.string().optional(),
            max_idle_timeout_in_minutes: z.number().optional(),
            min_idle_timeout_in_minutes: z.number().optional(),
          }).optional(),
        }).optional(),
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
        }).optional(),
      }).optional(),
      custom_file_system_config: z.object({
        efs_file_system_config: z.object({
          file_system_id: z.string(),
          file_system_path: z.string().optional(),
        }).array().optional(),
      }).array().optional(),
      custom_posix_user_config: z.object({
        gid: z.number(),
        uid: z.number(),
      }).optional(),
      jupyter_lab_app_settings: z.object({
        built_in_lifecycle_config_arn: z.string().optional(),
        lifecycle_config_arns: z.string().array().optional(),
        app_lifecycle_management: z.object({
          idle_settings: z.object({
            idle_timeout_in_minutes: z.number().optional(),
            lifecycle_management: z.string().optional(),
            max_idle_timeout_in_minutes: z.number().optional(),
            min_idle_timeout_in_minutes: z.number().optional(),
          }).optional(),
        }).optional(),
        code_repository: z.object({
          repository_url: z.string(),
        }).array().optional(),
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
        }).optional(),
        emr_settings: z.object({
          assumable_role_arns: z.string().array().optional(),
          execution_role_arns: z.string().array().optional(),
        }).optional(),
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
        }).optional(),
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
        }).optional(),
      }).optional(),
      r_session_app_settings: z.object({
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
        }).optional(),
      }).optional(),
      r_studio_server_pro_app_settings: z.object({
        access_status: z.string().optional(),
        user_group: z.string().optional(),
      }).optional(),
      sharing_settings: z.object({
        notebook_output_option: z.string().optional(),
        s3_kms_key_id: z.string().optional(),
        s3_output_path: z.string().optional(),
      }).optional(),
      space_storage_settings: z.object({
        default_ebs_storage_settings: z.object({
          default_ebs_volume_size_in_gb: z.number(),
          maximum_ebs_volume_size_in_gb: z.number(),
        }).optional(),
      }).optional(),
      studio_web_portal_settings: z.object({
        hidden_app_types: z.string().array().optional(),
        hidden_instance_types: z.string().array().optional(),
        hidden_ml_tools: z.string().array().optional(),
      }).optional(),
      tensor_board_app_settings: z.object({
        default_resource_spec: z.object({
          instance_type: z.string().optional(),
          lifecycle_config_arn: z.string().optional(),
          sagemaker_image_arn: z.string().optional(),
          sagemaker_image_version_alias: z.string().optional(),
          sagemaker_image_version_arn: z.string().optional(),
        }).optional(),
      }).optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  home_efs_file_system_uid: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  domain_id: resolvableValue(z.string()),
  user_profile_name: resolvableValue(z.string()),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/sagemaker_user_profile

export function AwsSagemakerUserProfile(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_user_profile'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerUserProfile = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsSagemakerUserProfile,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSagemakerUserProfiles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsSagemakerUserProfile,
    idFilter,
    baseNode,
    optional,
  )
