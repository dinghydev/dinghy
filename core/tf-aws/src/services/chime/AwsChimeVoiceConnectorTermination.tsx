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

export const AwsChimeVoiceConnectorTerminationInputSchema = TfMetaSchema.extend(
  {
    calling_regions: resolvableValue(z.string().array()),
    cidr_allow_list: resolvableValue(z.string().array()),
    voice_connector_id: resolvableValue(z.string()),
    cps_limit: resolvableValue(z.number().optional()),
    default_phone_number: resolvableValue(z.string().optional()),
    disabled: resolvableValue(z.boolean().optional()),
    region: resolvableValue(z.string().optional()),
  },
)

export const AwsChimeVoiceConnectorTerminationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsChimeVoiceConnectorTerminationInputProps =
  & z.input<typeof AwsChimeVoiceConnectorTerminationInputSchema>
  & NodeProps

export type AwsChimeVoiceConnectorTerminationOutputProps =
  & z.output<typeof AwsChimeVoiceConnectorTerminationOutputSchema>
  & z.output<typeof AwsChimeVoiceConnectorTerminationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/chime_voice_connector_termination

export function AwsChimeVoiceConnectorTermination(
  props: Partial<AwsChimeVoiceConnectorTerminationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chime_voice_connector_termination'
      _category='resource'
      _title={_title}
      _inputSchema={AwsChimeVoiceConnectorTerminationInputSchema}
      _outputSchema={AwsChimeVoiceConnectorTerminationOutputSchema}
      {...props}
    />
  )
}

export const useAwsChimeVoiceConnectorTermination = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsChimeVoiceConnectorTerminationOutputProps>(
    AwsChimeVoiceConnectorTermination,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsChimeVoiceConnectorTerminations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsChimeVoiceConnectorTerminationOutputProps>(
    AwsChimeVoiceConnectorTermination,
    idFilter,
    baseNode,
    optional,
  )
