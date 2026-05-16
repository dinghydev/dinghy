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

export const AwsAutoscalingNotificationInputSchema = TfMetaSchema.extend({
  group_names: resolvableValue(z.string().array()),
  notifications: resolvableValue(z.string().array()),
  topic_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsAutoscalingNotificationOutputSchema = z.object({})

export type AwsAutoscalingNotificationInputProps =
  & z.input<typeof AwsAutoscalingNotificationInputSchema>
  & NodeProps

export type AwsAutoscalingNotificationOutputProps =
  & z.output<typeof AwsAutoscalingNotificationOutputSchema>
  & z.output<typeof AwsAutoscalingNotificationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/autoscaling_notification

export function AwsAutoscalingNotification(
  props: Partial<AwsAutoscalingNotificationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_autoscaling_notification'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAutoscalingNotificationInputSchema}
      _outputSchema={AwsAutoscalingNotificationOutputSchema}
      {...props}
    />
  )
}

export const useAwsAutoscalingNotification = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAutoscalingNotificationOutputProps>(
    AwsAutoscalingNotification,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAutoscalingNotifications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAutoscalingNotificationOutputProps>(
    AwsAutoscalingNotification,
    idFilter,
    baseNode,
    optional,
  )
