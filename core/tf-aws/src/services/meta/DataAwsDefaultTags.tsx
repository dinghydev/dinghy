import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsDefaultTagsInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
})

export const DataAwsDefaultTagsOutputSchema = z.object({
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsDefaultTagsInputProps =
  & z.input<typeof DataAwsDefaultTagsInputSchema>
  & NodeProps

export type DataAwsDefaultTagsOutputProps =
  & z.output<typeof DataAwsDefaultTagsOutputSchema>
  & z.output<typeof DataAwsDefaultTagsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/default_tags

export function DataAwsDefaultTags(
  props: Partial<DataAwsDefaultTagsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_default_tags'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsDefaultTagsInputSchema}
      _outputSchema={DataAwsDefaultTagsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsDefaultTagss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsDefaultTagsOutputProps>(
    DataAwsDefaultTags,
    idFilter,
    baseNode,
    optional,
  )
