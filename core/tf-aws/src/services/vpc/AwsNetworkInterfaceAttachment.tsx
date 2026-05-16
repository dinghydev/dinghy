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

export const AwsNetworkInterfaceAttachmentInputSchema = TfMetaSchema.extend({
  device_index: resolvableValue(z.number()),
  instance_id: resolvableValue(z.string()),
  network_interface_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  network_card_index: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsNetworkInterfaceAttachmentOutputSchema = z.object({
  attachment_id: z.string().optional(),
  instance_id: z.string().optional(),
  network_interface_id: z.string().optional(),
  status: z.string().optional(),
})

export type AwsNetworkInterfaceAttachmentInputProps =
  & z.input<typeof AwsNetworkInterfaceAttachmentInputSchema>
  & NodeProps

export type AwsNetworkInterfaceAttachmentOutputProps =
  & z.output<typeof AwsNetworkInterfaceAttachmentOutputSchema>
  & z.output<typeof AwsNetworkInterfaceAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/network_interface_attachment

export function AwsNetworkInterfaceAttachment(
  props: Partial<AwsNetworkInterfaceAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_network_interface_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkInterfaceAttachmentInputSchema}
      _outputSchema={AwsNetworkInterfaceAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkInterfaceAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkInterfaceAttachmentOutputProps>(
    AwsNetworkInterfaceAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkInterfaceAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkInterfaceAttachmentOutputProps>(
    AwsNetworkInterfaceAttachment,
    idFilter,
    baseNode,
    optional,
  )
