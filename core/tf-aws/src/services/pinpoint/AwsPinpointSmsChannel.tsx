import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/pinpoint_sms_channel

export const InputSchema = z.object({
  application_id: resolvableValue(z.string()),
  enabled: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  sender_id: resolvableValue(z.string().optional()),
  short_code: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  promotional_messages_per_second: z.number().optional(),
  transactional_messages_per_second: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsPinpointSmsChannel(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_pinpoint_sms_channel'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsPinpointSmsChannel = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsPinpointSmsChannel, node, id)

export const useAwsPinpointSmsChannels = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsPinpointSmsChannel, node, id)
