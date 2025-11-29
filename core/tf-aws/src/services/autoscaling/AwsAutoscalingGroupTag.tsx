import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/autoscaling_group_tag

export const InputSchema = z.object({
  autoscaling_group_name: resolvableValue(z.string()),
  tag: resolvableValue(z.object({
    key: z.string(),
    propagate_at_launch: z.boolean(),
    value: z.string(),
  })),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAutoscalingGroupTag(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_autoscaling_group_tag'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAutoscalingGroupTag = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAutoscalingGroupTag, node, id)

export const useAwsAutoscalingGroupTags = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAutoscalingGroupTag, node, id)
