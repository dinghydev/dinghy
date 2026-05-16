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

export const AwsVolumeAttachmentInputSchema = TfMetaSchema.extend({
  device_name: resolvableValue(z.string()),
  instance_id: resolvableValue(z.string()),
  volume_id: resolvableValue(z.string()),
  force_detach: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  skip_destroy: resolvableValue(z.boolean().optional()),
  stop_instance_before_detaching: resolvableValue(z.boolean().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsVolumeAttachmentOutputSchema = z.object({
  device_name: z.string().optional(),
  instance_id: z.string().optional(),
  volume_id: z.string().optional(),
})

export const AwsVolumeAttachmentImportSchema = z.object({
  device_name: resolvableValue(z.string()),
  instance_id: resolvableValue(z.string()),
  volume_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsVolumeAttachmentInputProps =
  & z.input<typeof AwsVolumeAttachmentInputSchema>
  & z.input<typeof AwsVolumeAttachmentImportSchema>
  & NodeProps

export type AwsVolumeAttachmentOutputProps =
  & z.output<typeof AwsVolumeAttachmentOutputSchema>
  & z.output<typeof AwsVolumeAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/volume_attachment

export function AwsVolumeAttachment(
  props: Partial<AwsVolumeAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_volume_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVolumeAttachmentInputSchema}
      _outputSchema={AwsVolumeAttachmentOutputSchema}
      _importSchema={AwsVolumeAttachmentImportSchema}
      {...props}
    />
  )
}

export const useAwsVolumeAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVolumeAttachmentOutputProps>(
    AwsVolumeAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVolumeAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVolumeAttachmentOutputProps>(
    AwsVolumeAttachment,
    idFilter,
    baseNode,
    optional,
  )
