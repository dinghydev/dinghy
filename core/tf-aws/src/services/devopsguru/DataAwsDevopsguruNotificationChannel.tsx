import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDevopsguruNotificationChannel } from './AwsDevopsguruNotificationChannel.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/devopsguru_notification_channel

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  filters: z.object({
    message_types: z.string().array(),
    severities: z.string().array(),
  }).optional().optional(),
  sns: z.object({
    topic_arn: z.string(),
  }).optional().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsDevopsguruNotificationChannel(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsDevopsguruNotificationChannel
      _type='aws_devopsguru_notification_channel'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDevopsguruNotificationChannel = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsDevopsguruNotificationChannel, node, id)

export const useDataAwsDevopsguruNotificationChannels = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsDevopsguruNotificationChannel, node, id)
