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

export const AwsNetworkmanagerCustomerGatewayAssociationInputSchema =
  TfMetaSchema.extend({
    customer_gateway_arn: resolvableValue(z.string()),
    device_id: resolvableValue(z.string()),
    global_network_id: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    link_id: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsNetworkmanagerCustomerGatewayAssociationOutputSchema = z.object(
  {},
)

export type AwsNetworkmanagerCustomerGatewayAssociationInputProps =
  & z.input<typeof AwsNetworkmanagerCustomerGatewayAssociationInputSchema>
  & NodeProps

export type AwsNetworkmanagerCustomerGatewayAssociationOutputProps =
  & z.output<typeof AwsNetworkmanagerCustomerGatewayAssociationOutputSchema>
  & z.output<typeof AwsNetworkmanagerCustomerGatewayAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_customer_gateway_association

export function AwsNetworkmanagerCustomerGatewayAssociation(
  props: Partial<AwsNetworkmanagerCustomerGatewayAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_customer_gateway_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkmanagerCustomerGatewayAssociationInputSchema}
      _outputSchema={AwsNetworkmanagerCustomerGatewayAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerCustomerGatewayAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkmanagerCustomerGatewayAssociationOutputProps>(
    AwsNetworkmanagerCustomerGatewayAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkmanagerCustomerGatewayAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkmanagerCustomerGatewayAssociationOutputProps>(
    AwsNetworkmanagerCustomerGatewayAssociation,
    idFilter,
    baseNode,
    optional,
  )
