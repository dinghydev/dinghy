import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsRegionsInputSchema = TfMetaSchema.extend({
  all_regions: resolvableValue(z.boolean().optional()),
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
})

export const DataAwsRegionsOutputSchema = z.object({
  id: z.string().optional(),
  names: z.set(z.string()).optional(),
})

export type DataAwsRegionsInputProps =
  & z.input<typeof DataAwsRegionsInputSchema>
  & NodeProps

export type DataAwsRegionsOutputProps =
  & z.output<typeof DataAwsRegionsOutputSchema>
  & z.output<typeof DataAwsRegionsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/regions

export function DataAwsRegions(props: Partial<DataAwsRegionsInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_regions'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRegionsInputSchema}
      _outputSchema={DataAwsRegionsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsRegionss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRegionsOutputProps>(
    DataAwsRegions,
    idFilter,
    baseNode,
    optional,
  )
