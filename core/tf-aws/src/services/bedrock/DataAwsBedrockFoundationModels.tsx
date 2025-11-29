import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/bedrock_foundation_models

export const InputSchema = z.object({
  by_customization_type: resolvableValue(z.string().optional()),
  by_inference_type: resolvableValue(z.string().optional()),
  by_output_modality: resolvableValue(z.string().optional()),
  by_provider: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  model_summaries: z.object({
    customizations_supported: z.string().array(),
    inference_types_supported: z.string().array(),
    input_modalities: z.string().array(),
    model_arn: z.string(),
    model_id: z.string(),
    model_name: z.string(),
    output_modalities: z.string().array(),
    provider_name: z.string(),
    response_streaming_supported: z.boolean(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsBedrockFoundationModels(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrock_foundation_models'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsBedrockFoundationModelss = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsBedrockFoundationModels, node, id)
