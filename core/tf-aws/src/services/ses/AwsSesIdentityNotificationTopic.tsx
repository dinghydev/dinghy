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
  identity: resolvableValue(z.string()),
  notification_type: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  include_original_headers: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  topic_arn: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ses_identity_notification_topic

export function AwsSesIdentityNotificationTopic(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ses_identity_notification_topic'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsSesIdentityNotificationTopic = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsSesIdentityNotificationTopic,
    idFilter,
    baseNode,
    optional,
  )
