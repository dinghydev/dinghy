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
  name: resolvableValue(z.string()),
  account_recovery_setting: resolvableValue(
    z.object({
      recovery_mechanism: z.object({
        name: z.string(),
        priority: z.number(),
      }).array().optional(),
    }).optional(),
  ),
  admin_create_user_config: resolvableValue(
    z.object({
      allow_admin_create_user_only: z.boolean().optional(),
      invite_message_template: z.object({
        email_message: z.string().optional(),
        email_subject: z.string().optional(),
        sms_message: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  alias_attributes: resolvableValue(z.string().array().optional()),
  auto_verified_attributes: resolvableValue(z.string().array().optional()),
  deletion_protection: resolvableValue(z.string().optional()),
  device_configuration: resolvableValue(
    z.object({
      challenge_required_on_new_device: z.boolean().optional(),
      device_only_remembered_on_user_prompt: z.boolean().optional(),
    }).optional(),
  ),
  email_configuration: resolvableValue(
    z.object({
      configuration_set: z.string().optional(),
      email_sending_account: z.string().optional(),
      from_email_address: z.string().optional(),
      reply_to_email_address: z.string().optional(),
      source_arn: z.string().optional(),
    }).optional(),
  ),
  email_mfa_configuration: resolvableValue(
    z.object({
      message: z.string().optional(),
      subject: z.string().optional(),
    }).optional(),
  ),
  email_verification_message: resolvableValue(z.string().optional()),
  email_verification_subject: resolvableValue(z.string().optional()),
  lambda_config: resolvableValue(
    z.object({
      create_auth_challenge: z.string().optional(),
      custom_message: z.string().optional(),
      define_auth_challenge: z.string().optional(),
      kms_key_id: z.string().optional(),
      post_authentication: z.string().optional(),
      post_confirmation: z.string().optional(),
      pre_authentication: z.string().optional(),
      pre_sign_up: z.string().optional(),
      pre_token_generation: z.string().optional(),
      user_migration: z.string().optional(),
      verify_auth_challenge_response: z.string().optional(),
      custom_email_sender: z.object({
        lambda_arn: z.string(),
        lambda_version: z.string(),
      }).optional(),
      custom_sms_sender: z.object({
        lambda_arn: z.string(),
        lambda_version: z.string(),
      }).optional(),
      pre_token_generation_config: z.object({
        lambda_arn: z.string(),
        lambda_version: z.string(),
      }).optional(),
    }).optional(),
  ),
  mfa_configuration: resolvableValue(z.string().optional()),
  password_policy: resolvableValue(
    z.object({
      minimum_length: z.number().optional(),
      password_history_size: z.number().optional(),
      require_lowercase: z.boolean().optional(),
      require_numbers: z.boolean().optional(),
      require_symbols: z.boolean().optional(),
      require_uppercase: z.boolean().optional(),
      temporary_password_validity_days: z.number().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  schema: resolvableValue(
    z.object({
      attribute_data_type: z.string(),
      developer_only_attribute: z.boolean().optional(),
      mutable: z.boolean().optional(),
      name: z.string(),
      required: z.boolean().optional(),
      number_attribute_constraints: z.object({
        max_value: z.string().optional(),
        min_value: z.string().optional(),
      }).optional(),
      string_attribute_constraints: z.object({
        max_length: z.string().optional(),
        min_length: z.string().optional(),
      }).optional(),
    }).array().optional(),
  ),
  sign_in_policy: resolvableValue(
    z.object({
      allowed_first_auth_factors: z.string().array().optional(),
    }).optional(),
  ),
  sms_authentication_message: resolvableValue(z.string().optional()),
  sms_configuration: resolvableValue(
    z.object({
      external_id: z.string(),
      sns_caller_arn: z.string(),
      sns_region: z.string().optional(),
    }).optional(),
  ),
  sms_verification_message: resolvableValue(z.string().optional()),
  software_token_mfa_configuration: resolvableValue(
    z.object({
      enabled: z.boolean(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  user_attribute_update_settings: resolvableValue(
    z.object({
      attributes_require_verification_before_update: z.string().array(),
    }).optional(),
  ),
  user_pool_add_ons: resolvableValue(
    z.object({
      advanced_security_mode: z.string(),
      advanced_security_additional_flows: z.object({
        custom_auth_mode: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  user_pool_tier: resolvableValue(z.string().optional()),
  username_attributes: resolvableValue(z.string().array().optional()),
  username_configuration: resolvableValue(
    z.object({
      case_sensitive: z.boolean().optional(),
    }).optional(),
  ),
  verification_message_template: resolvableValue(
    z.object({
      default_email_option: z.string().optional(),
      email_message: z.string().optional(),
      email_message_by_link: z.string().optional(),
      email_subject: z.string().optional(),
      email_subject_by_link: z.string().optional(),
      sms_message: z.string().optional(),
    }).optional(),
  ),
  web_authn_configuration: resolvableValue(
    z.object({
      relying_party_id: z.string().optional(),
      user_verification: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  creation_date: z.string().optional(),
  custom_domain: z.string().optional(),
  domain: z.string().optional(),
  endpoint: z.string().optional(),
  estimated_number_of_users: z.number().optional(),
  id: z.string().optional(),
  last_modified_date: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/cognito_user_pool

export function AwsCognitoUserPool(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cognito_user_pool'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCognitoUserPool = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsCognitoUserPool, idFilter, baseNode, optional)

export const useAwsCognitoUserPools = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsCognitoUserPool, idFilter, baseNode, optional)
