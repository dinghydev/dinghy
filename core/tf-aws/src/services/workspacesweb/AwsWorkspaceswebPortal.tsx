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
  additional_encryption_context: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  authentication_type: resolvableValue(z.string().optional()),
  browser_settings_arn: resolvableValue(z.string().optional()),
  customer_managed_key: resolvableValue(z.string().optional()),
  display_name: resolvableValue(z.string().optional()),
  instance_type: resolvableValue(z.string().optional()),
  max_concurrent_sessions: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  browser_type: z.string().optional(),
  creation_date: z.string().optional(),
  data_protection_settings_arn: z.string().optional(),
  ip_access_settings_arn: z.string().optional(),
  network_settings_arn: z.string().optional(),
  portal_arn: z.string().optional(),
  portal_endpoint: z.string().optional(),
  portal_status: z.string().optional(),
  renderer_type: z.string().optional(),
  session_logger_arn: z.string().optional(),
  status_reason: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  trust_store_arn: z.string().optional(),
  user_access_logging_settings_arn: z.string().optional(),
  user_settings_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/workspacesweb_portal

export function AwsWorkspaceswebPortal(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspacesweb_portal'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspaceswebPortal = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsWorkspaceswebPortal,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWorkspaceswebPortals = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsWorkspaceswebPortal,
    idFilter,
    baseNode,
    optional,
  )
