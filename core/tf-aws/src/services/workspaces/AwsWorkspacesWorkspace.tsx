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
  bundle_id: resolvableValue(z.string()),
  directory_id: resolvableValue(z.string()),
  user_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  root_volume_encryption_enabled: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  user_volume_encryption_enabled: resolvableValue(z.boolean().optional()),
  volume_encryption_key: resolvableValue(z.string().optional()),
  workspace_properties: resolvableValue(
    z.object({
      compute_type_name: z.string().optional(),
      root_volume_size_gib: z.number().optional(),
      running_mode: z.string().optional(),
      running_mode_auto_stop_timeout_in_minutes: z.number().optional(),
      user_volume_size_gib: z.number().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  computer_name: z.string().optional(),
  id: z.string().optional(),
  ip_address: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/workspaces_workspace

export function AwsWorkspacesWorkspace(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspaces_workspace'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWorkspacesWorkspace = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsWorkspacesWorkspace,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWorkspacesWorkspaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsWorkspacesWorkspace,
    idFilter,
    baseNode,
    optional,
  )
