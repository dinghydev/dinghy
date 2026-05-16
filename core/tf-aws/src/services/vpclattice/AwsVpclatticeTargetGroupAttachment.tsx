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

export const AwsVpclatticeTargetGroupAttachmentInputSchema = TfMetaSchema
  .extend({
    target: resolvableValue(z.object({
      id: z.string(),
      port: z.number().optional(),
    })),
    target_group_identifier: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsVpclatticeTargetGroupAttachmentOutputSchema = z.object({})

export type AwsVpclatticeTargetGroupAttachmentInputProps =
  & z.input<typeof AwsVpclatticeTargetGroupAttachmentInputSchema>
  & NodeProps

export type AwsVpclatticeTargetGroupAttachmentOutputProps =
  & z.output<typeof AwsVpclatticeTargetGroupAttachmentOutputSchema>
  & z.output<typeof AwsVpclatticeTargetGroupAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpclattice_target_group_attachment

export function AwsVpclatticeTargetGroupAttachment(
  props: Partial<AwsVpclatticeTargetGroupAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpclattice_target_group_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpclatticeTargetGroupAttachmentInputSchema}
      _outputSchema={AwsVpclatticeTargetGroupAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpclatticeTargetGroupAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpclatticeTargetGroupAttachmentOutputProps>(
    AwsVpclatticeTargetGroupAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpclatticeTargetGroupAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpclatticeTargetGroupAttachmentOutputProps>(
    AwsVpclatticeTargetGroupAttachment,
    idFilter,
    baseNode,
    optional,
  )
