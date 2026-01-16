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
  alarm_name: resolvableValue(z.string()),
  alarm_rule: resolvableValue(z.string()),
  actions_enabled: resolvableValue(z.boolean().optional()),
  actions_suppressor: resolvableValue(
    z.object({
      alarm: z.string(),
      extension_period: z.number(),
      wait_period: z.number(),
    }).optional(),
  ),
  alarm_actions: resolvableValue(z.string().array().optional()),
  alarm_description: resolvableValue(z.string().optional()),
  insufficient_data_actions: resolvableValue(z.string().array().optional()),
  ok_actions: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudwatch_composite_alarm

export function AwsCloudwatchCompositeAlarm(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_cloudwatch_composite_alarm'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsCloudwatchCompositeAlarm = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsCloudwatchCompositeAlarm,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCloudwatchCompositeAlarms = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsCloudwatchCompositeAlarm,
    idFilter,
    baseNode,
    optional,
  )
