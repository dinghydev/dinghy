import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsChimeVoiceConnectorTerminationCredentialsInputSchema =
  TfMetaSchema.extend({
    credentials: resolvableValue(
      z.object({
        password: z.string(),
        username: z.string(),
      }).array(),
    ),
    voice_connector_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsChimeVoiceConnectorTerminationCredentialsOutputSchema = z
  .object({
    id: z.string().optional(),
  })

export type AwsChimeVoiceConnectorTerminationCredentialsInputProps =
  & z.input<typeof AwsChimeVoiceConnectorTerminationCredentialsInputSchema>
  & NodeProps

export type AwsChimeVoiceConnectorTerminationCredentialsOutputProps =
  & z.output<typeof AwsChimeVoiceConnectorTerminationCredentialsOutputSchema>
  & z.output<typeof AwsChimeVoiceConnectorTerminationCredentialsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chime_voice_connector_termination_credentials

export function AwsChimeVoiceConnectorTerminationCredentials(
  props: Partial<AwsChimeVoiceConnectorTerminationCredentialsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chime_voice_connector_termination_credentials'
      _category='resource'
      _title={_title}
      _inputSchema={AwsChimeVoiceConnectorTerminationCredentialsInputSchema}
      _outputSchema={AwsChimeVoiceConnectorTerminationCredentialsOutputSchema}
      {...props}
    />
  )
}

export const useAwsChimeVoiceConnectorTerminationCredentialss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsChimeVoiceConnectorTerminationCredentialsOutputProps>(
    AwsChimeVoiceConnectorTerminationCredentials,
    idFilter,
    baseNode,
    optional,
  )
