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

export const DataAwsWorkspacesImageInputSchema = TfMetaSchema.extend({
  image_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsWorkspacesImageOutputSchema = z.object({
  description: z.string().optional(),
  name: z.string().optional(),
  operating_system_type: z.string().optional(),
  required_tenancy: z.string().optional(),
  state: z.string().optional(),
})

export type DataAwsWorkspacesImageInputProps =
  & z.input<typeof DataAwsWorkspacesImageInputSchema>
  & NodeProps

export type DataAwsWorkspacesImageOutputProps =
  & z.output<typeof DataAwsWorkspacesImageOutputSchema>
  & z.output<typeof DataAwsWorkspacesImageInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/workspaces_image

export function DataAwsWorkspacesImage(
  props: Partial<DataAwsWorkspacesImageInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_workspaces_image'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsWorkspacesImageInputSchema}
      _outputSchema={DataAwsWorkspacesImageOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsWorkspacesImage = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsWorkspacesImageOutputProps>(
    DataAwsWorkspacesImage,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsWorkspacesImages = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsWorkspacesImageOutputProps>(
    DataAwsWorkspacesImage,
    idFilter,
    baseNode,
    optional,
  )
