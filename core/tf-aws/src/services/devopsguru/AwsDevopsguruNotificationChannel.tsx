import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/devopsguru_notification_channel

export const InputSchema = z.object({
  filters: resolvableValue(
    z.object({
      message_types: z.string().array().optional(),
      severities: z.string().array().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  sns: resolvableValue(
    z.object({
      topic_arn: z.string(),
    }).optional(),
  ),
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

export function AwsDevopsguruNotificationChannel(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_devopsguru_notification_channel'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDevopsguruNotificationChannel = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDevopsguruNotificationChannel, node, id)

export const useAwsDevopsguruNotificationChannels = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDevopsguruNotificationChannel, node, id)
