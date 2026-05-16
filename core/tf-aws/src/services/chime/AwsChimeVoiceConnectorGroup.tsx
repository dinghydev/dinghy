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

export const AwsChimeVoiceConnectorGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  connector: resolvableValue(
    z.object({
      priority: z.number(),
      voice_connector_id: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
})

export const AwsChimeVoiceConnectorGroupOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsChimeVoiceConnectorGroupInputProps =
  & z.input<typeof AwsChimeVoiceConnectorGroupInputSchema>
  & NodeProps

export type AwsChimeVoiceConnectorGroupOutputProps =
  & z.output<typeof AwsChimeVoiceConnectorGroupOutputSchema>
  & z.output<typeof AwsChimeVoiceConnectorGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chime_voice_connector_group

export function AwsChimeVoiceConnectorGroup(
  props: Partial<AwsChimeVoiceConnectorGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chime_voice_connector_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsChimeVoiceConnectorGroupInputSchema}
      _outputSchema={AwsChimeVoiceConnectorGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsChimeVoiceConnectorGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsChimeVoiceConnectorGroupOutputProps>(
    AwsChimeVoiceConnectorGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsChimeVoiceConnectorGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsChimeVoiceConnectorGroupOutputProps>(
    AwsChimeVoiceConnectorGroup,
    idFilter,
    baseNode,
    optional,
  )
