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

export const AwsChimeVoiceConnectorLoggingInputSchema = TfMetaSchema.extend({
  voice_connector_id: resolvableValue(z.string()),
  enable_media_metric_logs: resolvableValue(z.boolean().optional()),
  enable_sip_logs: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsChimeVoiceConnectorLoggingOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsChimeVoiceConnectorLoggingInputProps =
  & z.input<typeof AwsChimeVoiceConnectorLoggingInputSchema>
  & NodeProps

export type AwsChimeVoiceConnectorLoggingOutputProps =
  & z.output<typeof AwsChimeVoiceConnectorLoggingOutputSchema>
  & z.output<typeof AwsChimeVoiceConnectorLoggingInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chime_voice_connector_logging

export function AwsChimeVoiceConnectorLogging(
  props: Partial<AwsChimeVoiceConnectorLoggingInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chime_voice_connector_logging'
      _category='resource'
      _title={_title}
      _inputSchema={AwsChimeVoiceConnectorLoggingInputSchema}
      _outputSchema={AwsChimeVoiceConnectorLoggingOutputSchema}
      {...props}
    />
  )
}

export const useAwsChimeVoiceConnectorLogging = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsChimeVoiceConnectorLoggingOutputProps>(
    AwsChimeVoiceConnectorLogging,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsChimeVoiceConnectorLoggings = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsChimeVoiceConnectorLoggingOutputProps>(
    AwsChimeVoiceConnectorLogging,
    idFilter,
    baseNode,
    optional,
  )
