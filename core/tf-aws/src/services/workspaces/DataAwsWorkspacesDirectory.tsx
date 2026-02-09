import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsWorkspacesDirectory } from './AwsWorkspacesDirectory.tsx'

export const InputSchema = TfMetaSchema.extend({
  directory_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  active_directory_config: z.set(z.object({
    domain_name: z.string(),
    service_account_secret_arn: z.string(),
  })).optional(),
  alias: z.string().optional(),
  certificate_based_auth_properties: z.object({
    certificate_authority_arn: z.string(),
    status: z.string(),
  }).array().optional(),
  customer_user_name: z.string().optional(),
  directory_name: z.string().optional(),
  directory_type: z.string().optional(),
  dns_ip_addresses: z.set(z.string()).optional(),
  iam_role_id: z.string().optional(),
  id: z.string().optional(),
  ip_group_ids: z.set(z.string()).optional(),
  registration_code: z.string().optional(),
  saml_properties: z.object({
    relay_state_parameter_name: z.string(),
    status: z.string(),
    user_access_url: z.string(),
  }).array().optional(),
  self_service_permissions: z.object({
    change_compute_type: z.boolean(),
    increase_volume_size: z.boolean(),
    rebuild_workspace: z.boolean(),
    restart_workspace: z.boolean(),
    switch_running_mode: z.boolean(),
  }).array().optional(),
  subnet_ids: z.set(z.string()).optional(),
  tags: z.record(z.string(), z.string()).optional(),
  tenancy: z.string().optional(),
  user_identity_type: z.string().optional(),
  workspace_access_properties: z.object({
    device_type_android: z.string(),
    device_type_chromeos: z.string(),
    device_type_ios: z.string(),
    device_type_linux: z.string(),
    device_type_osx: z.string(),
    device_type_web: z.string(),
    device_type_windows: z.string(),
    device_type_zeroclient: z.string(),
  }).array().optional(),
  workspace_creation_properties: z.object({
    custom_security_group_id: z.string(),
    default_ou: z.string(),
    enable_internet_access: z.boolean(),
    enable_maintenance_mode: z.boolean(),
    user_enabled_as_local_administrator: z.boolean(),
  }).array().optional(),
  workspace_directory_description: z.string().optional(),
  workspace_directory_name: z.string().optional(),
  workspace_security_group_id: z.string().optional(),
  workspace_type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/workspaces_directory

export function DataAwsWorkspacesDirectory(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsWorkspacesDirectory
      _type='aws_workspaces_directory'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsWorkspacesDirectory = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsWorkspacesDirectory,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsWorkspacesDirectorys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsWorkspacesDirectory,
    idFilter,
    baseNode,
    optional,
  )
