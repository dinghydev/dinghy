import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsLocationPlaceIndex } from './AwsLocationPlaceIndex.tsx'

export const DataAwsLocationPlaceIndexInputSchema = TfMetaSchema.extend({
  index_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsLocationPlaceIndexOutputSchema = z.object({
  create_time: z.string().optional(),
  data_source: z.string().optional(),
  data_source_configuration: z.object({
    intended_use: z.string(),
  }).array().optional(),
  description: z.string().optional(),
  index_arn: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  update_time: z.string().optional(),
})

export type DataAwsLocationPlaceIndexInputProps =
  & z.input<typeof DataAwsLocationPlaceIndexInputSchema>
  & NodeProps

export type DataAwsLocationPlaceIndexOutputProps =
  & z.output<typeof DataAwsLocationPlaceIndexOutputSchema>
  & z.output<typeof DataAwsLocationPlaceIndexInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/location_place_index

export function DataAwsLocationPlaceIndex(
  props: Partial<DataAwsLocationPlaceIndexInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsLocationPlaceIndex
      _type='aws_location_place_index'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsLocationPlaceIndexInputSchema}
      _outputSchema={DataAwsLocationPlaceIndexOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsLocationPlaceIndex = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsLocationPlaceIndexOutputProps>(
    DataAwsLocationPlaceIndex,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsLocationPlaceIndexs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsLocationPlaceIndexOutputProps>(
    DataAwsLocationPlaceIndex,
    idFilter,
    baseNode,
    optional,
  )
