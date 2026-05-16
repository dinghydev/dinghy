import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsOutpostsSitesInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
})

export const DataAwsOutpostsSitesOutputSchema = z.object({
  id: z.string().optional(),
  ids: z.set(z.string()).optional(),
})

export type DataAwsOutpostsSitesInputProps =
  & z.input<typeof DataAwsOutpostsSitesInputSchema>
  & NodeProps

export type DataAwsOutpostsSitesOutputProps =
  & z.output<typeof DataAwsOutpostsSitesOutputSchema>
  & z.output<typeof DataAwsOutpostsSitesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/outposts_sites

export function DataAwsOutpostsSites(
  props: Partial<DataAwsOutpostsSitesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_outposts_sites'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOutpostsSitesInputSchema}
      _outputSchema={DataAwsOutpostsSitesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOutpostsSitess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOutpostsSitesOutputProps>(
    DataAwsOutpostsSites,
    idFilter,
    baseNode,
    optional,
  )
