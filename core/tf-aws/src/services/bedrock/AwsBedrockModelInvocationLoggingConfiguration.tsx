import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/bedrock_model_invocation_logging_configuration

export const InputSchema = z.object({
  logging_config: resolvableValue(
    z.object({
      embedding_data_delivery_enabled: z.boolean().optional(),
      image_data_delivery_enabled: z.boolean().optional(),
      text_data_delivery_enabled: z.boolean().optional(),
      video_data_delivery_enabled: z.boolean().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsBedrockModelInvocationLoggingConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_bedrock_model_invocation_logging_configuration'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBedrockModelInvocationLoggingConfiguration = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsBedrockModelInvocationLoggingConfiguration,
    node,
    id,
  )

export const useAwsBedrockModelInvocationLoggingConfigurations = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsBedrockModelInvocationLoggingConfiguration,
    node,
    id,
  )
