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

export const AwsNotificationsEventRuleInputSchema = TfMetaSchema.extend({
  event_type: resolvableValue(z.string()),
  notification_configuration_arn: resolvableValue(z.string()),
  regions: resolvableValue(z.string().array()),
  source: resolvableValue(z.string()),
  event_pattern: resolvableValue(z.string().optional()),
})

export const AwsNotificationsEventRuleOutputSchema = z.object({
  arn: z.string().optional(),
})

export type AwsNotificationsEventRuleInputProps =
  & z.input<typeof AwsNotificationsEventRuleInputSchema>
  & NodeProps

export type AwsNotificationsEventRuleOutputProps =
  & z.output<typeof AwsNotificationsEventRuleOutputSchema>
  & z.output<typeof AwsNotificationsEventRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/notifications_event_rule

export function AwsNotificationsEventRule(
  props: Partial<AwsNotificationsEventRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_notifications_event_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNotificationsEventRuleInputSchema}
      _outputSchema={AwsNotificationsEventRuleOutputSchema}
      {...props}
    />
  )
}

export const useAwsNotificationsEventRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNotificationsEventRuleOutputProps>(
    AwsNotificationsEventRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNotificationsEventRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNotificationsEventRuleOutputProps>(
    AwsNotificationsEventRule,
    idFilter,
    baseNode,
    optional,
  )
