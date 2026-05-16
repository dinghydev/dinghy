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

export const AwsLightsailStaticIpAttachmentInputSchema = TfMetaSchema.extend({
  instance_name: resolvableValue(z.string()),
  static_ip_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsLightsailStaticIpAttachmentOutputSchema = z.object({
  ip_address: z.string().optional(),
})

export type AwsLightsailStaticIpAttachmentInputProps =
  & z.input<typeof AwsLightsailStaticIpAttachmentInputSchema>
  & NodeProps

export type AwsLightsailStaticIpAttachmentOutputProps =
  & z.output<typeof AwsLightsailStaticIpAttachmentOutputSchema>
  & z.output<typeof AwsLightsailStaticIpAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/lightsail_static_ip_attachment

export function AwsLightsailStaticIpAttachment(
  props: Partial<AwsLightsailStaticIpAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lightsail_static_ip_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsLightsailStaticIpAttachmentInputSchema}
      _outputSchema={AwsLightsailStaticIpAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsLightsailStaticIpAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsLightsailStaticIpAttachmentOutputProps>(
    AwsLightsailStaticIpAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsLightsailStaticIpAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsLightsailStaticIpAttachmentOutputProps>(
    AwsLightsailStaticIpAttachment,
    idFilter,
    baseNode,
    optional,
  )
