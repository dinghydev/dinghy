import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/autoscaling_attachment

export const InputSchema = z.object({
  autoscaling_group_name: resolvableValue(z.string()),
  elb: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  lb_target_group_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsAutoscalingAttachment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_autoscaling_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsAutoscalingAttachment = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsAutoscalingAttachment, node, id)

export const useAwsAutoscalingAttachments = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsAutoscalingAttachment, node, id)
