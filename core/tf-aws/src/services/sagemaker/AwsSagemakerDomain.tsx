import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sagemaker_domain

export const InputSchema = z.object({
  auth_mode: resolvableValue(z.string()),
  domain_name: resolvableValue(z.string()),
  subnet_ids: resolvableValue(z.string().array()),
  vpc_id: resolvableValue(z.string()),
  app_network_access_type: resolvableValue(z.string().optional()),
  app_security_group_management: resolvableValue(z.string().optional()),
  default_space_settings: resolvableValue(
    z.object({
      execution_role: z.string(),
      security_groups: z.string().array().optional(),
    }).optional(),
  ),
  default_user_settings: resolvableValue(z.object({
    auto_mount_home_efs: z.string().optional(),
    default_landing_uri: z.string().optional(),
    execution_role: z.string(),
    security_groups: z.string().array().optional(),
    studio_web_portal: z.string().optional(),
  })),
  domain_settings: resolvableValue(
    z.object({
      execution_role_identity_config: z.string().optional(),
      security_group_ids: z.string().array().optional(),
    }).optional(),
  ),
  kms_key_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  retention_policy: resolvableValue(
    z.object({
      home_efs_file_system: z.string().optional(),
    }).optional(),
  ),
  tag_propagation: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  home_efs_file_system_id: z.string().optional(),
  id: z.string().optional(),
  security_group_id_for_domain_boundary: z.string().optional(),
  single_sign_on_application_arn: z.string().optional(),
  single_sign_on_managed_application_instance_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  url: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSagemakerDomain(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_domain'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerDomain = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSagemakerDomain, node, id)

export const useAwsSagemakerDomains = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSagemakerDomain, node, id)
