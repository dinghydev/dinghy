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

export const InputSchema = TfMetaSchema.extend({
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

export const OutputSchema = z.object({
  arn: z.string().optional(),
  last_updated_timestamp: z.string().optional(),
  mute_type: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/cloudwatch_alarm_mute_rule

export function AwsCloudwatchAlarmMuteRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_alarm_mute_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchAlarmMuteRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsCloudwatchAlarmMuteRule,
    idFilter,
    baseNode,
    optional,
  )
