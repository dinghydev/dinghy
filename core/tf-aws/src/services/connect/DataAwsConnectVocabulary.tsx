import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsConnectVocabulary } from './AwsConnectVocabulary.tsx'

export const DataAwsConnectVocabularyInputSchema = TfMetaSchema.extend({
  instance_id: resolvableValue(z.string()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  vocabulary_id: resolvableValue(z.string().optional()),
})

export const DataAwsConnectVocabularyOutputSchema = z.object({
  arn: z.string().optional(),
  content: z.string().optional(),
  failure_reason: z.string().optional(),
  id: z.string().optional(),
  language_code: z.string().optional(),
  last_modified_time: z.string().optional(),
  state: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  vocabulary_id: z.string().optional(),
})

export type DataAwsConnectVocabularyInputProps =
  & z.input<typeof DataAwsConnectVocabularyInputSchema>
  & NodeProps

export type DataAwsConnectVocabularyOutputProps =
  & z.output<typeof DataAwsConnectVocabularyOutputSchema>
  & z.output<typeof DataAwsConnectVocabularyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/connect_vocabulary

export function DataAwsConnectVocabulary(
  props: Partial<DataAwsConnectVocabularyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsConnectVocabulary
      _type='aws_connect_vocabulary'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsConnectVocabularyInputSchema}
      _outputSchema={DataAwsConnectVocabularyOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectVocabulary = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsConnectVocabularyOutputProps>(
    DataAwsConnectVocabulary,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsConnectVocabularys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsConnectVocabularyOutputProps>(
    DataAwsConnectVocabulary,
    idFilter,
    baseNode,
    optional,
  )
