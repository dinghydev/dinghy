import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/chime_voice_connector_group

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  connector: resolvableValue(
    z.object({
      priority: z.number(),
      voice_connector_id: z.string(),
    }).array().optional(),
  ),
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

export function AwsChimeVoiceConnectorGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_chime_voice_connector_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsChimeVoiceConnectorGroup = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsChimeVoiceConnectorGroup, node, id)

export const useAwsChimeVoiceConnectorGroups = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsChimeVoiceConnectorGroup, node, id)
