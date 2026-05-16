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

export const AwsEc2ClientVpnNetworkAssociationInputSchema = TfMetaSchema.extend(
  {
    client_vpn_endpoint_id: resolvableValue(z.string()),
    subnet_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  },
)

export const AwsEc2ClientVpnNetworkAssociationOutputSchema = z.object({
  association_id: z.string().optional(),
  id: z.string().optional(),
  vpc_id: z.string().optional(),
})

export type AwsEc2ClientVpnNetworkAssociationInputProps =
  & z.input<typeof AwsEc2ClientVpnNetworkAssociationInputSchema>
  & NodeProps

export type AwsEc2ClientVpnNetworkAssociationOutputProps =
  & z.output<typeof AwsEc2ClientVpnNetworkAssociationOutputSchema>
  & z.output<typeof AwsEc2ClientVpnNetworkAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_client_vpn_network_association

export function AwsEc2ClientVpnNetworkAssociation(
  props: Partial<AwsEc2ClientVpnNetworkAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_client_vpn_network_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2ClientVpnNetworkAssociationInputSchema}
      _outputSchema={AwsEc2ClientVpnNetworkAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2ClientVpnNetworkAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2ClientVpnNetworkAssociationOutputProps>(
    AwsEc2ClientVpnNetworkAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2ClientVpnNetworkAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2ClientVpnNetworkAssociationOutputProps>(
    AwsEc2ClientVpnNetworkAssociation,
    idFilter,
    baseNode,
    optional,
  )
