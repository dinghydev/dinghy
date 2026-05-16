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

export const AwsDatazoneAssetTypeInputSchema = TfMetaSchema.extend({
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

export const AwsDatazoneAssetTypeOutputSchema = z.object({
  created_at: z.string().optional(),
  created_by: z.string().optional(),
  revision: z.string().optional(),
})

export type AwsDatazoneAssetTypeInputProps =
  & z.input<typeof AwsDatazoneAssetTypeInputSchema>
  & NodeProps

export type AwsDatazoneAssetTypeOutputProps =
  & z.output<typeof AwsDatazoneAssetTypeOutputSchema>
  & z.output<typeof AwsDatazoneAssetTypeInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/datazone_asset_type

export function AwsDatazoneAssetType(
  props: Partial<AwsDatazoneAssetTypeInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datazone_asset_type'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDatazoneAssetTypeInputSchema}
      _outputSchema={AwsDatazoneAssetTypeOutputSchema}
      {...props}
    />
  )
}

export const useAwsDatazoneAssetType = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDatazoneAssetTypeOutputProps>(
    AwsDatazoneAssetType,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDatazoneAssetTypes = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDatazoneAssetTypeOutputProps>(
    AwsDatazoneAssetType,
    idFilter,
    baseNode,
    optional,
  )
