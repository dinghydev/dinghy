import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/datazone_asset_type

export const InputSchema = z.object({
  domain_identifier: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  owning_project_identifier: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  forms_input: resolvableValue(
    z.object({
      map_block_key: z.string(),
      required: z.boolean().optional(),
      type_identifier: z.string(),
      type_revision: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  created_at: z.string().optional(),
  created_by: z.string().optional(),
  revision: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDatazoneAssetType(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datazone_asset_type'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDatazoneAssetType = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDatazoneAssetType, node, id)

export const useAwsDatazoneAssetTypes = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDatazoneAssetType, node, id)
