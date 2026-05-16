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

export const AwsAutoscalingTrafficSourceAttachmentInputSchema = TfMetaSchema
  .extend({
    autoscaling_group_name: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
    traffic_source: resolvableValue(
      z.object({
        identifier: z.string(),
        type: z.string(),
      }).optional(),
    ),
  })

export const AwsAutoscalingTrafficSourceAttachmentOutputSchema = z.object({})

export type AwsAutoscalingTrafficSourceAttachmentInputProps =
  & z.input<typeof AwsAutoscalingTrafficSourceAttachmentInputSchema>
  & NodeProps

export type AwsAutoscalingTrafficSourceAttachmentOutputProps =
  & z.output<typeof AwsAutoscalingTrafficSourceAttachmentOutputSchema>
  & z.output<typeof AwsAutoscalingTrafficSourceAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/autoscaling_traffic_source_attachment

export function AwsAutoscalingTrafficSourceAttachment(
  props: Partial<AwsAutoscalingTrafficSourceAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_autoscaling_traffic_source_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsAutoscalingTrafficSourceAttachmentInputSchema}
      _outputSchema={AwsAutoscalingTrafficSourceAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsAutoscalingTrafficSourceAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsAutoscalingTrafficSourceAttachmentOutputProps>(
    AwsAutoscalingTrafficSourceAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsAutoscalingTrafficSourceAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsAutoscalingTrafficSourceAttachmentOutputProps>(
    AwsAutoscalingTrafficSourceAttachment,
    idFilter,
    baseNode,
    optional,
  )
