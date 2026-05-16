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

export const AwsCodestarnotificationsNotificationRuleInputSchema = TfMetaSchema
  .extend({
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
        status: z.string().optional(),
        type: z.string().optional(),
      }).array().optional(),
    ),
  })

export const AwsCodestarnotificationsNotificationRuleOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsCodestarnotificationsNotificationRuleImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsCodestarnotificationsNotificationRuleInputProps =
  & z.input<typeof AwsCodestarnotificationsNotificationRuleInputSchema>
  & z.input<typeof AwsCodestarnotificationsNotificationRuleImportSchema>
  & NodeProps

export type AwsCodestarnotificationsNotificationRuleOutputProps =
  & z.output<typeof AwsCodestarnotificationsNotificationRuleOutputSchema>
  & z.output<typeof AwsCodestarnotificationsNotificationRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/codestarnotifications_notification_rule

export function AwsCodestarnotificationsNotificationRule(
  props: Partial<AwsCodestarnotificationsNotificationRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_codestarnotifications_notification_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCodestarnotificationsNotificationRuleInputSchema}
      _outputSchema={AwsCodestarnotificationsNotificationRuleOutputSchema}
      _importSchema={AwsCodestarnotificationsNotificationRuleImportSchema}
      {...props}
    />
  )
}

export const useAwsCodestarnotificationsNotificationRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCodestarnotificationsNotificationRuleOutputProps>(
    AwsCodestarnotificationsNotificationRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCodestarnotificationsNotificationRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCodestarnotificationsNotificationRuleOutputProps>(
    AwsCodestarnotificationsNotificationRule,
    idFilter,
    baseNode,
    optional,
  )
