import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/transcribe_vocabulary_filter

export const InputSchema = z.object({
  language_code: resolvableValue(z.string()),
  vocabulary_filter_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  vocabulary_filter_file_uri: resolvableValue(z.string().optional()),
  words: resolvableValue(z.string().array().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  download_uri: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsTranscribeVocabularyFilter(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_transcribe_vocabulary_filter'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsTranscribeVocabularyFilter = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsTranscribeVocabularyFilter, node, id)

export const useAwsTranscribeVocabularyFilters = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsTranscribeVocabularyFilter, node, id)
