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

export const AwsConnectVocabularyInputSchema = TfMetaSchema.extend({
  content: resolvableValue(z.string()),
  instance_id: resolvableValue(z.string()),
  language_code: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsConnectVocabularyOutputSchema = z.object({
  arn: z.string().optional(),
  failure_reason: z.string().optional(),
  id: z.string().optional(),
  last_modified_time: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vocabulary_id: z.string().optional(),
})

export type AwsConnectVocabularyInputProps =
  & z.input<typeof AwsConnectVocabularyInputSchema>
  & NodeProps

export type AwsConnectVocabularyOutputProps =
  & z.output<typeof AwsConnectVocabularyOutputSchema>
  & z.output<typeof AwsConnectVocabularyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/connect_vocabulary

export function AwsConnectVocabulary(
  props: Partial<AwsConnectVocabularyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_connect_vocabulary'
      _category='resource'
      _title={_title}
      _inputSchema={AwsConnectVocabularyInputSchema}
      _outputSchema={AwsConnectVocabularyOutputSchema}
      {...props}
    />
  )
}

export const useAwsConnectVocabulary = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsConnectVocabularyOutputProps>(
    AwsConnectVocabulary,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsConnectVocabularys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsConnectVocabularyOutputProps>(
    AwsConnectVocabulary,
    idFilter,
    baseNode,
    optional,
  )
