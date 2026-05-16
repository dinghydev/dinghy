import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsOamLinksInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsOamLinksOutputSchema = z.object({
  arns: z.set(z.string()).optional(),
})

export type DataAwsOamLinksInputProps =
  & z.input<typeof DataAwsOamLinksInputSchema>
  & NodeProps

export type DataAwsOamLinksOutputProps =
  & z.output<typeof DataAwsOamLinksOutputSchema>
  & z.output<typeof DataAwsOamLinksInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/oam_links

export function DataAwsOamLinks(props: Partial<DataAwsOamLinksInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_oam_links'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOamLinksInputSchema}
      _outputSchema={DataAwsOamLinksOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOamLinkss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOamLinksOutputProps>(
    DataAwsOamLinks,
    idFilter,
    baseNode,
    optional,
  )
