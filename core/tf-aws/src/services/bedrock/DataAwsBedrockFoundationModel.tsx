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

export const DataAwsBedrockFoundationModelInputSchema = TfMetaSchema.extend({
  model_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsBedrockFoundationModelOutputSchema = z.object({
  customizations_supported: z.set(z.string()).optional(),
  id: z.string().optional(),
  inference_types_supported: z.set(z.string()).optional(),
  input_modalities: z.set(z.string()).optional(),
  model_arn: z.string().optional(),
  model_name: z.string().optional(),
  output_modalities: z.set(z.string()).optional(),
  provider_name: z.string().optional(),
  response_streaming_supported: z.boolean().optional(),
})

export type DataAwsBedrockFoundationModelInputProps =
  & z.input<typeof DataAwsBedrockFoundationModelInputSchema>
  & NodeProps

export type DataAwsBedrockFoundationModelOutputProps =
  & z.output<typeof DataAwsBedrockFoundationModelOutputSchema>
  & z.output<typeof DataAwsBedrockFoundationModelInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/bedrock_foundation_model

export function DataAwsBedrockFoundationModel(
  props: Partial<DataAwsBedrockFoundationModelInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrock_foundation_model'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsBedrockFoundationModelInputSchema}
      _outputSchema={DataAwsBedrockFoundationModelOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsBedrockFoundationModel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsBedrockFoundationModelOutputProps>(
    DataAwsBedrockFoundationModel,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsBedrockFoundationModels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsBedrockFoundationModelOutputProps>(
    DataAwsBedrockFoundationModel,
    idFilter,
    baseNode,
    optional,
  )
