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

export const AwsTranscribeVocabularyFilterInputSchema = TfMetaSchema.extend({
  language_code: resolvableValue(z.string()),
  vocabulary_filter_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  vocabulary_filter_file_uri: resolvableValue(z.string().optional()),
  words: resolvableValue(z.string().array().optional()),
})

export const AwsTranscribeVocabularyFilterOutputSchema = z.object({
  arn: z.string().optional(),
  download_uri: z.string().optional(),
  id: z.string().optional(),
})

export type AwsTranscribeVocabularyFilterInputProps =
  & z.input<typeof AwsTranscribeVocabularyFilterInputSchema>
  & NodeProps

export type AwsTranscribeVocabularyFilterOutputProps =
  & z.output<typeof AwsTranscribeVocabularyFilterOutputSchema>
  & z.output<typeof AwsTranscribeVocabularyFilterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transcribe_vocabulary_filter

export function AwsTranscribeVocabularyFilter(
  props: Partial<AwsTranscribeVocabularyFilterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_transcribe_vocabulary_filter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsTranscribeVocabularyFilterInputSchema}
      _outputSchema={AwsTranscribeVocabularyFilterOutputSchema}
      {...props}
    />
  )
}

export const useAwsTranscribeVocabularyFilter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsTranscribeVocabularyFilterOutputProps>(
    AwsTranscribeVocabularyFilter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsTranscribeVocabularyFilters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsTranscribeVocabularyFilterOutputProps>(
    AwsTranscribeVocabularyFilter,
    idFilter,
    baseNode,
    optional,
  )
