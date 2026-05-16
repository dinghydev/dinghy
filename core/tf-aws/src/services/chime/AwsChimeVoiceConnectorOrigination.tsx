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

export const AwsChimeVoiceConnectorOriginationInputSchema = TfMetaSchema.extend(
  {
    route: resolvableValue(
      z.object({
        host: z.string(),
        port: z.number().optional(),
        priority: z.number(),
        protocol: z.string(),
        weight: z.number(),
      }).array(),
    ),
    voice_connector_id: resolvableValue(z.string()),
    disabled: resolvableValue(z.boolean().optional()),
    region: resolvableValue(z.string().optional()),
  },
)

export const AwsChimeVoiceConnectorOriginationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsChimeVoiceConnectorOriginationInputProps =
  & z.input<typeof AwsChimeVoiceConnectorOriginationInputSchema>
  & NodeProps

export type AwsChimeVoiceConnectorOriginationOutputProps =
  & z.output<typeof AwsChimeVoiceConnectorOriginationOutputSchema>
  & z.output<typeof AwsChimeVoiceConnectorOriginationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chime_voice_connector_origination

export function AwsChimeVoiceConnectorOrigination(
  props: Partial<AwsChimeVoiceConnectorOriginationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chime_voice_connector_origination'
      _category='resource'
      _title={_title}
      _inputSchema={AwsChimeVoiceConnectorOriginationInputSchema}
      _outputSchema={AwsChimeVoiceConnectorOriginationOutputSchema}
      {...props}
    />
  )
}

export const useAwsChimeVoiceConnectorOrigination = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsChimeVoiceConnectorOriginationOutputProps>(
    AwsChimeVoiceConnectorOrigination,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsChimeVoiceConnectorOriginations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsChimeVoiceConnectorOriginationOutputProps>(
    AwsChimeVoiceConnectorOrigination,
    idFilter,
    baseNode,
    optional,
  )
