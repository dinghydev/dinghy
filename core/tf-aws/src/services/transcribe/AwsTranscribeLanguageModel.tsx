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

export const AwsTranscribeLanguageModelInputSchema = TfMetaSchema.extend({
  base_model_name: resolvableValue(z.string()),
  input_data_config: resolvableValue(z.object({
    data_access_role_arn: z.string(),
    s3_uri: z.string(),
    tuning_data_s3_uri: z.string().optional(),
  })),
  language_code: resolvableValue(z.string()),
  model_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const AwsTranscribeLanguageModelOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsTranscribeLanguageModelInputProps =
  & z.input<typeof AwsTranscribeLanguageModelInputSchema>
  & NodeProps

export type AwsTranscribeLanguageModelOutputProps =
  & z.output<typeof AwsTranscribeLanguageModelOutputSchema>
  & z.output<typeof AwsTranscribeLanguageModelInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/transcribe_language_model

export function AwsTranscribeLanguageModel(
  props: Partial<AwsTranscribeLanguageModelInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_transcribe_language_model'
      _category='resource'
      _title={_title}
      _inputSchema={AwsTranscribeLanguageModelInputSchema}
      _outputSchema={AwsTranscribeLanguageModelOutputSchema}
      {...props}
    />
  )
}

export const useAwsTranscribeLanguageModel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsTranscribeLanguageModelOutputProps>(
    AwsTranscribeLanguageModel,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsTranscribeLanguageModels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsTranscribeLanguageModelOutputProps>(
    AwsTranscribeLanguageModel,
    idFilter,
    baseNode,
    optional,
  )
