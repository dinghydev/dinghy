import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsBedrockCustomModelsInputSchema = TfMetaSchema.extend({
  region: resolvableValue(z.string().optional()),
})

export const DataAwsBedrockCustomModelsOutputSchema = z.object({
  id: z.string().optional(),
  model_summaries: z.object({
    creation_time: z.string(),
    model_arn: z.string(),
    model_name: z.string(),
  }).array().optional(),
})

export type DataAwsBedrockCustomModelsInputProps =
  & z.input<typeof DataAwsBedrockCustomModelsInputSchema>
  & NodeProps

export type DataAwsBedrockCustomModelsOutputProps =
  & z.output<typeof DataAwsBedrockCustomModelsOutputSchema>
  & z.output<typeof DataAwsBedrockCustomModelsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/bedrock_custom_models

export function DataAwsBedrockCustomModels(
  props: Partial<DataAwsBedrockCustomModelsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrock_custom_models'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsBedrockCustomModelsInputSchema}
      _outputSchema={DataAwsBedrockCustomModelsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsBedrockCustomModelss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsBedrockCustomModelsOutputProps>(
    DataAwsBedrockCustomModels,
    idFilter,
    baseNode,
    optional,
  )
