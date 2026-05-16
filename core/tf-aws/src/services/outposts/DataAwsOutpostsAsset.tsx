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

export const DataAwsOutpostsAssetInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  asset_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsOutpostsAssetOutputSchema = z.object({
  asset_type: z.string().optional(),
  host_id: z.string().optional(),
  instance_families: z.string().array().optional(),
  rack_elevation: z.number().optional(),
  rack_id: z.string().optional(),
})

export type DataAwsOutpostsAssetInputProps =
  & z.input<typeof DataAwsOutpostsAssetInputSchema>
  & NodeProps

export type DataAwsOutpostsAssetOutputProps =
  & z.output<typeof DataAwsOutpostsAssetOutputSchema>
  & z.output<typeof DataAwsOutpostsAssetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/outposts_asset

export function DataAwsOutpostsAsset(
  props: Partial<DataAwsOutpostsAssetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_outposts_asset'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOutpostsAssetInputSchema}
      _outputSchema={DataAwsOutpostsAssetOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOutpostsAsset = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsOutpostsAssetOutputProps>(
    DataAwsOutpostsAsset,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsOutpostsAssets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOutpostsAssetOutputProps>(
    DataAwsOutpostsAsset,
    idFilter,
    baseNode,
    optional,
  )
