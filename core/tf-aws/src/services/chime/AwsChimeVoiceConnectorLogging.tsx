import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/chime_voice_connector_logging

export const InputSchema = z.object({
  voice_connector_id: resolvableValue(z.string()),
  enable_media_metric_logs: resolvableValue(z.boolean().optional()),
  enable_sip_logs: resolvableValue(z.boolean().optional()),
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

export function AwsChimeVoiceConnectorLogging(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chime_voice_connector_logging'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsChimeVoiceConnectorLogging = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsChimeVoiceConnectorLogging, node, id)

export const useAwsChimeVoiceConnectorLoggings = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsChimeVoiceConnectorLogging, node, id)
