import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_user_profile

export const InputSchema = z.object({
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

export function AwsSagemakerUserProfile(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsSagemakerUserProfile = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSagemakerUserProfile, node, id)

export const useAwsSagemakerUserProfiles = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSagemakerUserProfile, node, id)
