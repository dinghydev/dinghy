import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsAccountRegionsInputSchema = TfMetaSchema.extend({
  account_id: resolvableValue(z.string().optional()),
  region_opt_status_contains: resolvableValue(z.string().array().optional()),
})

export const DataAwsAccountRegionsOutputSchema = z.object({
  regions: z.object({
    region_name: z.string(),
    region_opt_status: z.string(),
  }).array().optional(),
})

export type DataAwsAccountRegionsInputProps =
  & z.input<typeof DataAwsAccountRegionsInputSchema>
  & NodeProps

export type DataAwsAccountRegionsOutputProps =
  & z.output<typeof DataAwsAccountRegionsOutputSchema>
  & z.output<typeof DataAwsAccountRegionsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/account_regions

export function DataAwsAccountRegions(
  props: Partial<DataAwsAccountRegionsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_account_regions'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsAccountRegionsInputSchema}
      _outputSchema={DataAwsAccountRegionsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsAccountRegionss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsAccountRegionsOutputProps>(
    DataAwsAccountRegions,
    idFilter,
    baseNode,
    optional,
  )
