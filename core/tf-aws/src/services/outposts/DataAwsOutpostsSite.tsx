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

export const DataAwsOutpostsSiteInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsOutpostsSiteOutputSchema = z.object({
  account_id: z.string().optional(),
  description: z.string().optional(),
})

export type DataAwsOutpostsSiteInputProps =
  & z.input<typeof DataAwsOutpostsSiteInputSchema>
  & NodeProps

export type DataAwsOutpostsSiteOutputProps =
  & z.output<typeof DataAwsOutpostsSiteOutputSchema>
  & z.output<typeof DataAwsOutpostsSiteInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/outposts_site

export function DataAwsOutpostsSite(
  props: Partial<DataAwsOutpostsSiteInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_outposts_site'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOutpostsSiteInputSchema}
      _outputSchema={DataAwsOutpostsSiteOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOutpostsSite = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsOutpostsSiteOutputProps>(
    DataAwsOutpostsSite,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsOutpostsSites = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOutpostsSiteOutputProps>(
    DataAwsOutpostsSite,
    idFilter,
    baseNode,
    optional,
  )
