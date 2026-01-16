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

export const InputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string()),
  model_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  customizations_supported: z.set(z.string()).optional(),
  inference_types_supported: z.set(z.string()).optional(),
  input_modalities: z.set(z.string()).optional(),
  model_arn: z.string().optional(),
  model_name: z.string().optional(),
  output_modalities: z.set(z.string()).optional(),
  provider_name: z.string().optional(),
  response_streaming_supported: z.boolean().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/bedrock_foundation_model

export function DataAwsBedrockFoundationModel(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrock_foundation_model'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsBedrockFoundationModel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsBedrockFoundationModel,
    idFilter,
    baseNode,
    optional,
  )
