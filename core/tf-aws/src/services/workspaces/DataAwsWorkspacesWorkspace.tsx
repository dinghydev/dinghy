import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsWorkspacesWorkspace } from './AwsWorkspacesWorkspace.tsx'

export const InputSchema = z.object({
  directory_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  user_name: resolvableValue(z.string().optional()),
  workspace_id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  bundle_id: z.string().optional(),
  computer_name: z.string().optional(),
  id: z.string().optional(),
  ip_address: z.string().optional(),
  root_volume_encryption_enabled: z.boolean().optional(),
  state: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  user_volume_encryption_enabled: z.boolean().optional(),
  volume_encryption_key: z.string().optional(),
  workspace_properties: z.object({
    compute_type_name: z.string(),
    root_volume_size_gib: z.number(),
    running_mode: z.string(),
    running_mode_auto_stop_timeout_in_minutes: z.number(),
    user_volume_size_gib: z.number(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/workspaces_workspace

export function DataAwsWorkspacesWorkspace(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsWorkspacesWorkspace
      _type='aws_workspaces_workspace'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsWorkspacesWorkspace = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsWorkspacesWorkspace,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsWorkspacesWorkspaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsWorkspacesWorkspace,
    idFilter,
    baseNode,
    optional,
  )
