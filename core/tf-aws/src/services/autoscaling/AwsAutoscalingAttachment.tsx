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

export const AwsAutoscalingAttachmentInputSchema = TfMetaSchema.extend({
  autoscaling_group_name: resolvableValue(z.string()),
  elb: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  lb_target_group_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsAutoscalingAttachmentOutputSchema = z.object({})

export type AwsAutoscalingAttachmentInputProps =
  & z.input<typeof AwsAutoscalingAttachmentInputSchema>
  & NodeProps

export type AwsAutoscalingAttachmentOutputProps =
  & z.output<typeof AwsAutoscalingAttachmentOutputSchema>
  & z.output<typeof AwsAutoscalingAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/autoscaling_attachment

export function AwsAutoscalingAttachment(
  props: Partial<AwsAutoscalingAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_autoscaling_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAutoscalingAttachmentInputSchema}
      _outputSchema={AwsAutoscalingAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsAutoscalingAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAutoscalingAttachmentOutputProps>(
    AwsAutoscalingAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAutoscalingAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAutoscalingAttachmentOutputProps>(
    AwsAutoscalingAttachment,
    idFilter,
    baseNode,
    optional,
  )
