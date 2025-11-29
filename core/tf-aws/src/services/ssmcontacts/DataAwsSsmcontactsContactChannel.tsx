import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSsmcontactsContactChannel } from './AwsSsmcontactsContactChannel.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/ssmcontacts_contact_channel

export const InputSchema = z.object({
  activation_status: resolvableValue(z.string()),
  arn: resolvableValue(z.string()),
  contact_id: resolvableValue(z.string()),
  delivery_address: resolvableValue(
    z.object({
      simple_address: z.string(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsSsmcontactsContactChannel(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsSsmcontactsContactChannel
      _type='aws_ssmcontacts_contact_channel'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSsmcontactsContactChannel = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsSsmcontactsContactChannel, node, id)

export const useDataAwsSsmcontactsContactChannels = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsSsmcontactsContactChannel, node, id)
