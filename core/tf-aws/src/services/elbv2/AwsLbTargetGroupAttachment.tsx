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

export const AwsLbTargetGroupAttachmentInputSchema = TfMetaSchema.extend({
  target_group_arn: resolvableValue(z.string()),
  target_id: resolvableValue(z.string()),
  availability_zone: resolvableValue(z.string().optional()),
  port: resolvableValue(z.number().optional()),
  quic_server_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsLbTargetGroupAttachmentOutputSchema = z.object({
  id: z.string().optional(),
})

export const AwsLbTargetGroupAttachmentImportSchema = z.object({
  target_group_arn: resolvableValue(z.string()),
  target_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  availability_zone: resolvableValue(z.string().optional()),
  port: resolvableValue(z.number().optional()),
  quic_server_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsLbTargetGroupAttachmentInputProps =
  & z.input<typeof AwsLbTargetGroupAttachmentInputSchema>
  & z.input<typeof AwsLbTargetGroupAttachmentImportSchema>
  & NodeProps

export type AwsLbTargetGroupAttachmentOutputProps =
  & z.output<typeof AwsLbTargetGroupAttachmentOutputSchema>
  & z.output<typeof AwsLbTargetGroupAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lb_target_group_attachment

export function AwsLbTargetGroupAttachment(
  props: Partial<AwsLbTargetGroupAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lb_target_group_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLbTargetGroupAttachmentInputSchema}
      _outputSchema={AwsLbTargetGroupAttachmentOutputSchema}
      _importSchema={AwsLbTargetGroupAttachmentImportSchema}
      {...props}
    />
  )
}

export const useAwsLbTargetGroupAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLbTargetGroupAttachmentOutputProps>(
    AwsLbTargetGroupAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLbTargetGroupAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLbTargetGroupAttachmentOutputProps>(
    AwsLbTargetGroupAttachment,
    idFilter,
    baseNode,
    optional,
  )
