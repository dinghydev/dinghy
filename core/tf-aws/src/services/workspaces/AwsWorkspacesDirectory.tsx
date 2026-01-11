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
  active_directory_config: resolvableValue(
    z.object({
      domain_name: z.string(),
      service_account_secret_arn: z.string(),
    }).optional(),
  ),
  certificate_based_auth_properties: resolvableValue(
    z.object({
      certificate_authority_arn: z.string().optional(),
      status: z.string().optional(),
    }).optional(),
  ),
  directory_id: resolvableValue(z.string().optional()),
  ip_group_ids: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  saml_properties: resolvableValue(
    z.object({
      relay_state_parameter_name: z.string().optional(),
      status: z.string().optional(),
      user_access_url: z.string().optional(),
    }).optional(),
  ),
  self_service_permissions: resolvableValue(
    z.object({
      change_compute_type: z.boolean().optional(),
      increase_volume_size: z.boolean().optional(),
      rebuild_workspace: z.boolean().optional(),
      restart_workspace: z.boolean().optional(),
      switch_running_mode: z.boolean().optional(),
    }).optional(),
  ),
  subnet_ids: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tenancy: resolvableValue(z.string().optional()),
  user_identity_type: resolvableValue(z.string().optional()),
  workspace_access_properties: resolvableValue(
    z.object({
      device_type_android: z.string().optional(),
      device_type_chromeos: z.string().optional(),
      device_type_ios: z.string().optional(),
      device_type_linux: z.string().optional(),
      device_type_osx: z.string().optional(),
      device_type_web: z.string().optional(),
      device_type_windows: z.string().optional(),
      device_type_zeroclient: z.string().optional(),
    }).optional(),
  ),
  workspace_creation_properties: resolvableValue(
    z.object({
      custom_security_group_id: z.string().optional(),
      default_ou: z.string().optional(),
      enable_internet_access: z.boolean().optional(),
      enable_maintenance_mode: z.boolean().optional(),
      user_enabled_as_local_administrator: z.boolean().optional(),
    }).optional(),
  ),
  workspace_directory_description: resolvableValue(z.string().optional()),
  workspace_directory_name: resolvableValue(z.string().optional()),
  workspace_type: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  alias: z.string().optional(),
  customer_user_name: z.string().optional(),
  directory_name: z.string().optional(),
  directory_type: z.string().optional(),
  dns_ip_addresses: z.set(z.string()).optional(),
  iam_role_id: z.string().optional(),
  id: z.string().optional(),
  ip_group_ids: z.set(z.string()).optional(),
  registration_code: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  workspace_security_group_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/workspaces_directory

export function AwsWorkspacesDirectory(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspaces_directory'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspacesDirectory = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsWorkspacesDirectory,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWorkspacesDirectorys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsWorkspacesDirectory,
    idFilter,
    baseNode,
    optional,
  )
