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

export const DataAwsWorkspacesBundleInputSchema = TfMetaSchema.extend({
  bundle_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  owner: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsWorkspacesBundleOutputSchema = z.object({
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

export type DataAwsWorkspacesBundleInputProps =
  & z.input<typeof DataAwsWorkspacesBundleInputSchema>
  & NodeProps

export type DataAwsWorkspacesBundleOutputProps =
  & z.output<typeof DataAwsWorkspacesBundleOutputSchema>
  & z.output<typeof DataAwsWorkspacesBundleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/workspaces_bundle

export function DataAwsWorkspacesBundle(
  props: Partial<DataAwsWorkspacesBundleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspaces_bundle'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsWorkspacesBundleInputSchema}
      _outputSchema={DataAwsWorkspacesBundleOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsWorkspacesBundle = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsWorkspacesBundleOutputProps>(
    DataAwsWorkspacesBundle,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsWorkspacesBundles = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsWorkspacesBundleOutputProps>(
    DataAwsWorkspacesBundle,
    idFilter,
    baseNode,
    optional,
  )
