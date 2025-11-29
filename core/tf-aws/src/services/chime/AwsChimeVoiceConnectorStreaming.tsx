import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/chime_voice_connector_streaming

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

export function AwsChimeVoiceConnectorStreaming(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsChimeVoiceConnectorStreaming = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsChimeVoiceConnectorStreaming, node, id)

export const useAwsChimeVoiceConnectorStreamings = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsChimeVoiceConnectorStreaming, node, id)
