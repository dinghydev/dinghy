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

export const AwsAutoscalingLifecycleHookInputSchema = TfMetaSchema.extend({
  autoscaling_group_name: resolvableValue(z.string()),
  lifecycle_transition: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  default_result: resolvableValue(z.string().optional()),
  heartbeat_timeout: resolvableValue(z.number().optional()),
  id: resolvableValue(z.string().optional()),
  notification_metadata: resolvableValue(z.string().optional()),
  notification_target_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  role_arn: resolvableValue(z.string().optional()),
})

export const AwsAutoscalingLifecycleHookOutputSchema = z.object({})

export const AwsAutoscalingLifecycleHookImportSchema = z.object({
  autoscaling_group_name: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsAutoscalingLifecycleHookInputProps =
  & z.input<typeof AwsAutoscalingLifecycleHookInputSchema>
  & z.input<typeof AwsAutoscalingLifecycleHookImportSchema>
  & NodeProps

export type AwsAutoscalingLifecycleHookOutputProps =
  & z.output<typeof AwsAutoscalingLifecycleHookOutputSchema>
  & z.output<typeof AwsAutoscalingLifecycleHookInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/autoscaling_lifecycle_hook

export function AwsAutoscalingLifecycleHook(
  props: Partial<AwsAutoscalingLifecycleHookInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_autoscaling_lifecycle_hook'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAutoscalingLifecycleHookInputSchema}
      _outputSchema={AwsAutoscalingLifecycleHookOutputSchema}
      _importSchema={AwsAutoscalingLifecycleHookImportSchema}
      {...props}
    />
  )
}

export const useAwsAutoscalingLifecycleHook = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAutoscalingLifecycleHookOutputProps>(
    AwsAutoscalingLifecycleHook,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAutoscalingLifecycleHooks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAutoscalingLifecycleHookOutputProps>(
    AwsAutoscalingLifecycleHook,
    idFilter,
    baseNode,
    optional,
  )
