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

export const AwsCloudwatchAlarmMuteRuleInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  expire_date: resolvableValue(z.string().optional()),
  mute_targets: resolvableValue(
    z.object({
      alarm_names: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  rule: resolvableValue(
    z.object({
      schedule: z.object({
        duration: z.string(),
        expression: z.string(),
        timezone: z.string().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  start_date: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsCloudwatchAlarmMuteRuleOutputSchema = z.object({
  arn: z.string().optional(),
  last_updated_timestamp: z.string().optional(),
  mute_type: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsCloudwatchAlarmMuteRuleImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsCloudwatchAlarmMuteRuleInputProps =
  & z.input<typeof AwsCloudwatchAlarmMuteRuleInputSchema>
  & z.input<typeof AwsCloudwatchAlarmMuteRuleImportSchema>
  & NodeProps

export type AwsCloudwatchAlarmMuteRuleOutputProps =
  & z.output<typeof AwsCloudwatchAlarmMuteRuleOutputSchema>
  & z.output<typeof AwsCloudwatchAlarmMuteRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_alarm_mute_rule

export function AwsCloudwatchAlarmMuteRule(
  props: Partial<AwsCloudwatchAlarmMuteRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_alarm_mute_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCloudwatchAlarmMuteRuleInputSchema}
      _outputSchema={AwsCloudwatchAlarmMuteRuleOutputSchema}
      _importSchema={AwsCloudwatchAlarmMuteRuleImportSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchAlarmMuteRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCloudwatchAlarmMuteRuleOutputProps>(
    AwsCloudwatchAlarmMuteRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchAlarmMuteRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCloudwatchAlarmMuteRuleOutputProps>(
    AwsCloudwatchAlarmMuteRule,
    idFilter,
    baseNode,
    optional,
  )
