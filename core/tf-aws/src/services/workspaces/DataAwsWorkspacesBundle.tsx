import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/workspaces_bundle

export const InputSchema = z.object({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  bundle_id: z.string().optional(),
  compute_type: z.object({
    name: z.string(),
  }).array().optional(),
  description: z.string().optional(),
  name: z.string().optional(),
  owner: z.string().optional(),
  root_storage: z.object({
    capacity: z.string(),
  }).array().optional(),
  user_storage: z.object({
    capacity: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsWorkspacesBundle(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspaces_bundle'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsWorkspacesBundle = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsWorkspacesBundle, node, id)

export const useDataAwsWorkspacesBundles = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsWorkspacesBundle, node, id)
