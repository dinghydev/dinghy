import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lb_target_group_attachment

export const InputSchema = z.object({
  target_group_arn: resolvableValue(z.string()),
  target_id: resolvableValue(z.string()),
  availability_zone: resolvableValue(z.string().optional()),
  port: resolvableValue(z.number().optional()),
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

export function AwsLbTargetGroupAttachment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lb_target_group_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLbTargetGroupAttachment = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLbTargetGroupAttachment, node, id)

export const useAwsLbTargetGroupAttachments = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLbTargetGroupAttachment, node, id)
