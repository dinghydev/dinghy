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
  logging_config: resolvableValue(
    z.object({
      embedding_data_delivery_enabled: z.boolean().optional(),
      image_data_delivery_enabled: z.boolean().optional(),
      text_data_delivery_enabled: z.boolean().optional(),
      video_data_delivery_enabled: z.boolean().optional(),
      cloudwatch_config: z.object({
        log_group_name: z.string(),
        role_arn: z.string(),
        large_data_delivery_s3_config: z.object({
          bucket_name: z.string(),
          key_prefix: z.string().optional(),
        }).array().optional(),
      }).array().optional(),
      s3_config: z.object({
        bucket_name: z.string(),
        key_prefix: z.string().optional(),
      }).array().optional(),
    }).array().optional(),
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/bedrock_model_invocation_logging_configuration

export function AwsBedrockModelInvocationLoggingConfiguration(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsBedrockModelInvocationLoggingConfiguration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBedrockModelInvocationLoggingConfigurations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsBedrockModelInvocationLoggingConfiguration,
    idFilter,
    baseNode,
    optional,
  )
