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

export const AwsNetworkInterfaceSgAttachmentInputSchema = TfMetaSchema.extend({
  network_interface_id: resolvableValue(z.string()),
  security_group_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      read: z.string().optional(),
    }).optional(),
  ),
})

export const AwsNetworkInterfaceSgAttachmentOutputSchema = z.object({})

export type AwsNetworkInterfaceSgAttachmentInputProps =
  & z.input<typeof AwsNetworkInterfaceSgAttachmentInputSchema>
  & NodeProps

export type AwsNetworkInterfaceSgAttachmentOutputProps =
  & z.output<typeof AwsNetworkInterfaceSgAttachmentOutputSchema>
  & z.output<typeof AwsNetworkInterfaceSgAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/network_interface_sg_attachment

export function AwsNetworkInterfaceSgAttachment(
  props: Partial<AwsNetworkInterfaceSgAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_network_interface_sg_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkInterfaceSgAttachmentInputSchema}
      _outputSchema={AwsNetworkInterfaceSgAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkInterfaceSgAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkInterfaceSgAttachmentOutputProps>(
    AwsNetworkInterfaceSgAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkInterfaceSgAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkInterfaceSgAttachmentOutputProps>(
    AwsNetworkInterfaceSgAttachment,
    idFilter,
    baseNode,
    optional,
  )
