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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/chime_voice_connector_origination

export function AwsChimeVoiceConnectorOrigination(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chime_voice_connector_origination'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsChimeVoiceConnectorOrigination = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsChimeVoiceConnectorOrigination,
    idFilter,
    baseNode,
    optional,
  )
