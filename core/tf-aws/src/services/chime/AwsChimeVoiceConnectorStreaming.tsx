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

export const InputSchema = z.object({
  data_retention: resolvableValue(z.number()),
  voice_connector_id: resolvableValue(z.string()),
  disabled: resolvableValue(z.boolean().optional()),
  media_insights_configuration: resolvableValue(
    z.object({
      configuration_arn: z.string().optional(),
      disabled: z.boolean().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  streaming_notification_targets: resolvableValue(
    z.string().array().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

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

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/chime_voice_connector_streaming

export function AwsChimeVoiceConnectorStreaming(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chime_voice_connector_streaming'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsChimeVoiceConnectorStreaming = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsChimeVoiceConnectorStreaming,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsChimeVoiceConnectorStreamings = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsChimeVoiceConnectorStreaming,
    idFilter,
    baseNode,
    optional,
  )
