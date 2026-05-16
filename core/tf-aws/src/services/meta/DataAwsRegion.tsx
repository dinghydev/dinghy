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

export const DataAwsRegionInputSchema = TfMetaSchema.extend({
  endpoint: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsRegionOutputSchema = z.object({
  description: z.string().optional(),
  id: z.string().optional(),
})

export type DataAwsRegionInputProps =
  & z.input<typeof DataAwsRegionInputSchema>
  & NodeProps

export type DataAwsRegionOutputProps =
  & z.output<typeof DataAwsRegionOutputSchema>
  & z.output<typeof DataAwsRegionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/region

export function DataAwsRegion(props: Partial<DataAwsRegionInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_region'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRegionInputSchema}
      _outputSchema={DataAwsRegionOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsRegion = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsRegionOutputProps>(
    DataAwsRegion,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsRegions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRegionOutputProps>(
    DataAwsRegion,
    idFilter,
    baseNode,
    optional,
  )
