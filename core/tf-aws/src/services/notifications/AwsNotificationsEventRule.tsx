import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/notifications_event_rule

export const InputSchema = z.object({
  event_type: resolvableValue(z.string()),
  notification_configuration_arn: resolvableValue(z.string()),
  regions: resolvableValue(z.string().array()),
  source: resolvableValue(z.string()),
  event_pattern: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsNotificationsEventRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_notifications_event_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNotificationsEventRule = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsNotificationsEventRule, node, id)

export const useAwsNotificationsEventRules = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsNotificationsEventRule, node, id)
