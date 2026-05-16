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

export const AwsChimeVoiceConnectorInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  require_encryption: resolvableValue(z.boolean()),
  aws_region: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsChimeVoiceConnectorOutputSchema = z.object({
  arn: z.string().optional(),
  outbound_host_name: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsChimeVoiceConnectorInputProps =
  & z.input<typeof AwsChimeVoiceConnectorInputSchema>
  & NodeProps

export type AwsChimeVoiceConnectorOutputProps =
  & z.output<typeof AwsChimeVoiceConnectorOutputSchema>
  & z.output<typeof AwsChimeVoiceConnectorInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chime_voice_connector

export function AwsChimeVoiceConnector(
  props: Partial<AwsChimeVoiceConnectorInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chime_voice_connector'
      _category='resource'
      _title={_title}
      _inputSchema={AwsChimeVoiceConnectorInputSchema}
      _outputSchema={AwsChimeVoiceConnectorOutputSchema}
      {...props}
    />
  )
}

export const useAwsChimeVoiceConnector = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsChimeVoiceConnectorOutputProps>(
    AwsChimeVoiceConnector,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsChimeVoiceConnectors = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsChimeVoiceConnectorOutputProps>(
    AwsChimeVoiceConnector,
    idFilter,
    baseNode,
    optional,
  )
