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

export const AwsLightsailDiskAttachmentInputSchema = TfMetaSchema.extend({
  disk_name: resolvableValue(z.string()),
  disk_path: resolvableValue(z.string()),
  instance_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsLightsailDiskAttachmentOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsLightsailDiskAttachmentInputProps =
  & z.input<typeof AwsLightsailDiskAttachmentInputSchema>
  & NodeProps

export type AwsLightsailDiskAttachmentOutputProps =
  & z.output<typeof AwsLightsailDiskAttachmentOutputSchema>
  & z.output<typeof AwsLightsailDiskAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lightsail_disk_attachment

export function AwsLightsailDiskAttachment(
  props: Partial<AwsLightsailDiskAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_disk_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLightsailDiskAttachmentInputSchema}
      _outputSchema={AwsLightsailDiskAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailDiskAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLightsailDiskAttachmentOutputProps>(
    AwsLightsailDiskAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLightsailDiskAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLightsailDiskAttachmentOutputProps>(
    AwsLightsailDiskAttachment,
    idFilter,
    baseNode,
    optional,
  )
