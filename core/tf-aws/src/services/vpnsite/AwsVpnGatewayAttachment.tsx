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

export const AwsVpnGatewayAttachmentInputSchema = TfMetaSchema.extend({
  vpc_id: resolvableValue(z.string()),
  vpn_gateway_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsVpnGatewayAttachmentOutputSchema = z.object({
  vpc_id: z.string().optional(),
  vpn_gateway_id: z.string().optional(),
})

export type AwsVpnGatewayAttachmentInputProps =
  & z.input<typeof AwsVpnGatewayAttachmentInputSchema>
  & NodeProps

export type AwsVpnGatewayAttachmentOutputProps =
  & z.output<typeof AwsVpnGatewayAttachmentOutputSchema>
  & z.output<typeof AwsVpnGatewayAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpn_gateway_attachment

export function AwsVpnGatewayAttachment(
  props: Partial<AwsVpnGatewayAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpn_gateway_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpnGatewayAttachmentInputSchema}
      _outputSchema={AwsVpnGatewayAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpnGatewayAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpnGatewayAttachmentOutputProps>(
    AwsVpnGatewayAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpnGatewayAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpnGatewayAttachmentOutputProps>(
    AwsVpnGatewayAttachment,
    idFilter,
    baseNode,
    optional,
  )
