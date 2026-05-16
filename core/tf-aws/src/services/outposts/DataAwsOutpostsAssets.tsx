import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsOutpostsAssetsInputSchema = TfMetaSchema.extend({
  arn: resolvableValue(z.string()),
  host_id_filter: resolvableValue(z.string().array().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  status_id_filter: resolvableValue(z.string().array().optional()),
})

export const DataAwsOutpostsAssetsOutputSchema = z.object({
  asset_ids: z.string().array().optional(),
})

export type DataAwsOutpostsAssetsInputProps =
  & z.input<typeof DataAwsOutpostsAssetsInputSchema>
  & NodeProps

export type DataAwsOutpostsAssetsOutputProps =
  & z.output<typeof DataAwsOutpostsAssetsOutputSchema>
  & z.output<typeof DataAwsOutpostsAssetsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/outposts_assets

export function DataAwsOutpostsAssets(
  props: Partial<DataAwsOutpostsAssetsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_outposts_assets'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOutpostsAssetsInputSchema}
      _outputSchema={DataAwsOutpostsAssetsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOutpostsAssetss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOutpostsAssetsOutputProps>(
    DataAwsOutpostsAssets,
    idFilter,
    baseNode,
    optional,
  )
