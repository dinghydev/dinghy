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

export const AwsTranscribeMedicalVocabularyInputSchema = TfMetaSchema.extend({
  language_code: resolvableValue(z.string()),
  vocabulary_file_uri: resolvableValue(z.string()),
  vocabulary_name: resolvableValue(z.string()),
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
})

export const AwsTranscribeMedicalVocabularyOutputSchema = z.object({
  arn: z.string().optional(),
  download_uri: z.string().optional(),
  id: z.string().optional(),
})

export type AwsTranscribeMedicalVocabularyInputProps =
  & z.input<typeof AwsTranscribeMedicalVocabularyInputSchema>
  & NodeProps

export type AwsTranscribeMedicalVocabularyOutputProps =
  & z.output<typeof AwsTranscribeMedicalVocabularyOutputSchema>
  & z.output<typeof AwsTranscribeMedicalVocabularyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transcribe_medical_vocabulary

export function AwsTranscribeMedicalVocabulary(
  props: Partial<AwsTranscribeMedicalVocabularyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_transcribe_medical_vocabulary'
      _category='resource'
      _title={_title}
      _inputSchema={AwsTranscribeMedicalVocabularyInputSchema}
      _outputSchema={AwsTranscribeMedicalVocabularyOutputSchema}
      {...props}
    />
  )
}

export const useAwsTranscribeMedicalVocabulary = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsTranscribeMedicalVocabularyOutputProps>(
    AwsTranscribeMedicalVocabulary,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsTranscribeMedicalVocabularys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsTranscribeMedicalVocabularyOutputProps>(
    AwsTranscribeMedicalVocabulary,
    idFilter,
    baseNode,
    optional,
  )
