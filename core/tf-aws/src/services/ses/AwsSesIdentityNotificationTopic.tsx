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

export const AwsSesIdentityNotificationTopicInputSchema = TfMetaSchema.extend({
  identity: resolvableValue(z.string()),
  notification_type: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  include_original_headers: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  topic_arn: resolvableValue(z.string().optional()),
})

export const AwsSesIdentityNotificationTopicOutputSchema = z.object({})

export type AwsSesIdentityNotificationTopicInputProps =
  & z.input<typeof AwsSesIdentityNotificationTopicInputSchema>
  & NodeProps

export type AwsSesIdentityNotificationTopicOutputProps =
  & z.output<typeof AwsSesIdentityNotificationTopicOutputSchema>
  & z.output<typeof AwsSesIdentityNotificationTopicInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ses_identity_notification_topic

export function AwsSesIdentityNotificationTopic(
  props: Partial<AwsSesIdentityNotificationTopicInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ses_identity_notification_topic'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesIdentityNotificationTopicInputSchema}
      _outputSchema={AwsSesIdentityNotificationTopicOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesIdentityNotificationTopic = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSesIdentityNotificationTopicOutputProps>(
    AwsSesIdentityNotificationTopic,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSesIdentityNotificationTopics = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesIdentityNotificationTopicOutputProps>(
    AwsSesIdentityNotificationTopic,
    idFilter,
    baseNode,
    optional,
  )
