import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsOdbGiVersionsInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
  shape: resolvableValue(z.string().optional()),
})

export const DataAwsOdbGiVersionsOutputSchema = z.object({
  gi_versions: z.object({
    version: z.string(),
  }).array().optional(),
})

export type DataAwsOdbGiVersionsInputProps =
  & z.input<typeof DataAwsOdbGiVersionsInputSchema>
  & NodeProps

export type DataAwsOdbGiVersionsOutputProps =
  & z.output<typeof DataAwsOdbGiVersionsOutputSchema>
  & z.output<typeof DataAwsOdbGiVersionsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/odb_gi_versions

export function DataAwsOdbGiVersions(
  props: Partial<DataAwsOdbGiVersionsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_odb_gi_versions'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOdbGiVersionsInputSchema}
      _outputSchema={DataAwsOdbGiVersionsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOdbGiVersionss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOdbGiVersionsOutputProps>(
    DataAwsOdbGiVersions,
    idFilter,
    baseNode,
    optional,
  )
