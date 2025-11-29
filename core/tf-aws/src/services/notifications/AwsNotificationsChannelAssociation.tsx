import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/notifications_channel_association

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  notification_configuration_arn: resolvableValue(z.string()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsNotificationsChannelAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_notifications_channel_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNotificationsChannelAssociation = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsNotificationsChannelAssociation, node, id)

export const useAwsNotificationsChannelAssociations = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsNotificationsChannelAssociation, node, id)
