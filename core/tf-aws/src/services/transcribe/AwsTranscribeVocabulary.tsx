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

export const AwsTranscribeVocabularyInputSchema = TfMetaSchema.extend({
  language_code: resolvableValue(z.string()),
  vocabulary_name: resolvableValue(z.string()),
  phrases: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vocabulary_file_uri: resolvableValue(z.string().optional()),
})

export const AwsTranscribeVocabularyOutputSchema = z.object({
  arn: z.string().optional(),
  download_uri: z.string().optional(),
  id: z.string().optional(),
})

export type AwsTranscribeVocabularyInputProps =
  & z.input<typeof AwsTranscribeVocabularyInputSchema>
  & NodeProps

export type AwsTranscribeVocabularyOutputProps =
  & z.output<typeof AwsTranscribeVocabularyOutputSchema>
  & z.output<typeof AwsTranscribeVocabularyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transcribe_vocabulary

export function AwsTranscribeVocabulary(
  props: Partial<AwsTranscribeVocabularyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_transcribe_vocabulary'
      _category='resource'
      _title={_title}
      _inputSchema={AwsTranscribeVocabularyInputSchema}
      _outputSchema={AwsTranscribeVocabularyOutputSchema}
      {...props}
    />
  )
}

export const useAwsTranscribeVocabulary = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsTranscribeVocabularyOutputProps>(
    AwsTranscribeVocabulary,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsTranscribeVocabularys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsTranscribeVocabularyOutputProps>(
    AwsTranscribeVocabulary,
    idFilter,
    baseNode,
    optional,
  )
