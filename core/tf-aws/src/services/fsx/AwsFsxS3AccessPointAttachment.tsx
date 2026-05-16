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

export const AwsFsxS3AccessPointAttachmentInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  openzfs_configuration: resolvableValue(
    z.object({
      volume_id: z.string(),
      file_system_identity: z.object({
        type: z.string(),
        posix_user: z.object({
          gid: z.number(),
          secondary_gids: z.number().array().optional(),
          uid: z.number(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  s3_access_point: resolvableValue(
    z.object({
      policy: z.string().optional(),
      vpc_configuration: z.object({
        vpc_id: z.string().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsFsxS3AccessPointAttachmentOutputSchema = z.object({
  s3_access_point_alias: z.string().optional(),
  s3_access_point_arn: z.string().optional(),
})

export type AwsFsxS3AccessPointAttachmentInputProps =
  & z.input<typeof AwsFsxS3AccessPointAttachmentInputSchema>
  & NodeProps

export type AwsFsxS3AccessPointAttachmentOutputProps =
  & z.output<typeof AwsFsxS3AccessPointAttachmentOutputSchema>
  & z.output<typeof AwsFsxS3AccessPointAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/fsx_s3_access_point_attachment

export function AwsFsxS3AccessPointAttachment(
  props: Partial<AwsFsxS3AccessPointAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fsx_s3_access_point_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsFsxS3AccessPointAttachmentInputSchema}
      _outputSchema={AwsFsxS3AccessPointAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsFsxS3AccessPointAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsFsxS3AccessPointAttachmentOutputProps>(
    AwsFsxS3AccessPointAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsFsxS3AccessPointAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsFsxS3AccessPointAttachmentOutputProps>(
    AwsFsxS3AccessPointAttachment,
    idFilter,
    baseNode,
    optional,
  )
