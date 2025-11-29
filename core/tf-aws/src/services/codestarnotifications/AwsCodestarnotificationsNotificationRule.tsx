import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/codestarnotifications_notification_rule

export const InputSchema = z.object({
  detail_type: resolvableValue(z.string()),
  event_type_ids: resolvableValue(z.string().array()),
  name: resolvableValue(z.string()),
  resource: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  status: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  target: resolvableValue(
    z.object({
      address: z.string(),
      status: z.string(),
      type: z.string().optional(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsCodestarnotificationsNotificationRule(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codestarnotifications_notification_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsCodestarnotificationsNotificationRule = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsCodestarnotificationsNotificationRule, node, id)

export const useAwsCodestarnotificationsNotificationRules = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsCodestarnotificationsNotificationRule, node, id)
