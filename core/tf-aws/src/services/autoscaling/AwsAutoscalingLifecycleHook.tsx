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

export const InputSchema = z.object({
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/autoscaling_lifecycle_hook

export function AwsAutoscalingLifecycleHook(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_autoscaling_lifecycle_hook'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAutoscalingLifecycleHook = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsAutoscalingLifecycleHook,
    idFilter,
    baseNode,
    optional,
  )
