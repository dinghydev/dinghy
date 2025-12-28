import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDevopsguruNotificationChannel } from './AwsDevopsguruNotificationChannel.tsx'

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  filters: z.object({
    message_types: z.string().array(),
    severities: z.string().array(),
  }).array().optional().optional(),
  sns: z.object({
    topic_arn: z.string(),
  }).array().optional().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/devopsguru_notification_channel

export function DataAwsDevopsguruNotificationChannel(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsDevopsguruNotificationChannel,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsDevopsguruNotificationChannels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsDevopsguruNotificationChannel,
    idFilter,
    baseNode,
    optional,
  )
