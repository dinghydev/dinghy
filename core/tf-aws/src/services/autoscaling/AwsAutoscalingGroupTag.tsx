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

export const AwsAutoscalingGroupTagInputSchema = TfMetaSchema.extend({
  autoscaling_group_name: resolvableValue(z.string()),
  tag: resolvableValue(z.object({
    key: z.string(),
    propagate_at_launch: z.boolean(),
    value: z.string(),
  })),
  region: resolvableValue(z.string().optional()),
})

export const AwsAutoscalingGroupTagOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsAutoscalingGroupTagInputProps =
  & z.input<typeof AwsAutoscalingGroupTagInputSchema>
  & NodeProps

export type AwsAutoscalingGroupTagOutputProps =
  & z.output<typeof AwsAutoscalingGroupTagOutputSchema>
  & z.output<typeof AwsAutoscalingGroupTagInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/autoscaling_group_tag

export function AwsAutoscalingGroupTag(
  props: Partial<AwsAutoscalingGroupTagInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_autoscaling_group_tag'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAutoscalingGroupTagInputSchema}
      _outputSchema={AwsAutoscalingGroupTagOutputSchema}
      {...props}
    />
  )
}

export const useAwsAutoscalingGroupTag = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAutoscalingGroupTagOutputProps>(
    AwsAutoscalingGroupTag,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAutoscalingGroupTags = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAutoscalingGroupTagOutputProps>(
    AwsAutoscalingGroupTag,
    idFilter,
    baseNode,
    optional,
  )
