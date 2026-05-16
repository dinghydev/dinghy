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

export const DataAwsDevopsguruNotificationChannelInputSchema = TfMetaSchema
  .extend({
    id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsDevopsguruNotificationChannelOutputSchema = z.object({
  filters: z.object({
    message_types: z.string().array().optional(),
    severities: z.string().array().optional(),
  }).array().optional().optional(),
  sns: z.object({
    topic_arn: z.string().optional(),
  }).array().optional().optional(),
})

export type DataAwsDevopsguruNotificationChannelInputProps =
  & z.input<typeof DataAwsDevopsguruNotificationChannelInputSchema>
  & NodeProps

export type DataAwsDevopsguruNotificationChannelOutputProps =
  & z.output<typeof DataAwsDevopsguruNotificationChannelOutputSchema>
  & z.output<typeof DataAwsDevopsguruNotificationChannelInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/devopsguru_notification_channel

export function DataAwsDevopsguruNotificationChannel(
  props: Partial<DataAwsDevopsguruNotificationChannelInputProps>,
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
      _inputSchema={DataAwsDevopsguruNotificationChannelInputSchema}
      _outputSchema={DataAwsDevopsguruNotificationChannelOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDevopsguruNotificationChannel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsDevopsguruNotificationChannelOutputProps>(
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
  useTypedNodes<DataAwsDevopsguruNotificationChannelOutputProps>(
    DataAwsDevopsguruNotificationChannel,
    idFilter,
    baseNode,
    optional,
  )
