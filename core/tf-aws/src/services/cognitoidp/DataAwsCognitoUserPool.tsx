import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCognitoUserPool } from './AwsCognitoUserPool.tsx'

export const InputSchema = z.object({
  account_recovery_setting: resolvableValue(
    z.object({
      recovery_mechanism: z.object({
        name: z.string(),
        priority: z.number(),
      }).array(),
    }).array(),
  ),
  admin_create_user_config: resolvableValue(
    z.object({
      allow_admin_create_user_only: z.boolean(),
      invite_message_template: z.object({
        email_message: z.string(),
        email_subject: z.string(),
        sms_message: z.string(),
      }).array(),
      unused_account_validity_days: z.number(),
    }).array(),
  ),
  device_configuration: resolvableValue(
    z.object({
      challenge_required_on_new_device: z.boolean(),
      device_only_remembered_on_user_prompt: z.boolean(),
    }).array(),
  ),
  email_configuration: resolvableValue(
    z.object({
      configuration_set: z.string(),
      email_sending_account: z.string(),
      from: z.string(),
      reply_to_email_address: z.string(),
      source_arn: z.string(),
    }).array(),
  ),
  id: resolvableValue(z.string()),
  lambda_config: resolvableValue(
    z.object({
      create_auth_challenge: z.string(),
      custom_email_sender: z.object({
        lambda_arn: z.string(),
        lambda_version: z.string(),
      }).array(),
      custom_message: z.string(),
      custom_sms_sender: z.object({
        lambda_arn: z.string(),
        lambda_version: z.string(),
      }).array(),
      define_auth_challenge: z.string(),
      kms_key_id: z.string(),
      post_authentication: z.string(),
      post_confirmation: z.string(),
      pre_authentication: z.string(),
      pre_sign_up: z.string(),
      pre_token_generation: z.string(),
      pre_token_generation_config: z.object({
        lambda_arn: z.string(),
        lambda_version: z.string(),
      }).array(),
      user_migration: z.string(),
      verify_auth_challenge_response: z.string(),
    }).array(),
  ),
  schema_attributes: resolvableValue(
    z.object({
      attribute_data_type: z.string(),
      developer_only_attribute: z.boolean(),
      mutable: z.boolean(),
      name: z.string(),
      number_attribute_constraints: z.object({
        max_value: z.string(),
        min_value: z.string(),
      }).array(),
      required: z.boolean(),
      string_attribute_constraints: z.object({
        max_length: z.string(),
        min_length: z.string(),
      }).array(),
    }).array(),
  ),
  user_pool_add_ons: resolvableValue(
    z.object({
      advanced_security_additional_flows: z.object({
        custom_auth_mode: z.string(),
      }).array(),
      advanced_security_mode: z.string(),
    }).array(),
  ),
  user_pool_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  auto_verified_attributes: z.string().array().optional(),
  creation_date: z.string().optional(),
  custom_domain: z.string().optional(),
  deletion_protection: z.string().optional(),
  domain: z.string().optional(),
  estimated_number_of_users: z.number().optional(),
  last_modified_date: z.string().optional(),
  mfa_configuration: z.string().optional(),
  name: z.string().optional(),
  sms_authentication_message: z.string().optional(),
  sms_configuration_failure: z.string().optional(),
  sms_verification_message: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  user_pool_tags: z.record(z.string(), z.string()).optional(),
  username_attributes: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/cognito_user_pool

export function DataAwsCognitoUserPool(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsCognitoUserPool
      _type='aws_cognito_user_pool'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCognitoUserPool = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsCognitoUserPool,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsCognitoUserPools = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsCognitoUserPool,
    idFilter,
    baseNode,
    optional,
  )
