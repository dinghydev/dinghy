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

export const AwsAppautoscalingScheduledActionInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  resource_id: resolvableValue(z.string()),
  scalable_dimension: resolvableValue(z.string()),
  scalable_target_action: resolvableValue(z.object({
    max_capacity: z.string().optional(),
    min_capacity: z.string().optional(),
  })),
  schedule: resolvableValue(z.string()),
  service_namespace: resolvableValue(z.string()),
  end_time: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  start_time: resolvableValue(z.string().optional()),
  timezone: resolvableValue(z.string().optional()),
})

export const AwsAppautoscalingScheduledActionOutputSchema = z.object({
  arn: z.string().optional(),
})

export type AwsAppautoscalingScheduledActionInputProps =
  & z.input<typeof AwsAppautoscalingScheduledActionInputSchema>
  & NodeProps

export type AwsAppautoscalingScheduledActionOutputProps =
  & z.output<typeof AwsAppautoscalingScheduledActionOutputSchema>
  & z.output<typeof AwsAppautoscalingScheduledActionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/appautoscaling_scheduled_action

export function AwsAppautoscalingScheduledAction(
  props: Partial<AwsAppautoscalingScheduledActionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_appautoscaling_scheduled_action'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAppautoscalingScheduledActionInputSchema}
      _outputSchema={AwsAppautoscalingScheduledActionOutputSchema}
      {...props}
    />
  )
}

export const useAwsAppautoscalingScheduledAction = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAppautoscalingScheduledActionOutputProps>(
    AwsAppautoscalingScheduledAction,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAppautoscalingScheduledActions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAppautoscalingScheduledActionOutputProps>(
    AwsAppautoscalingScheduledAction,
    idFilter,
    baseNode,
    optional,
  )
