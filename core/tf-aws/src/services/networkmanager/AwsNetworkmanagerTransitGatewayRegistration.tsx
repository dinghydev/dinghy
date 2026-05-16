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

export const AwsNetworkmanagerTransitGatewayRegistrationInputSchema =
  TfMetaSchema.extend({
    global_network_id: resolvableValue(z.string()),
    transit_gateway_arn: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsNetworkmanagerTransitGatewayRegistrationOutputSchema = z.object(
  {},
)

export type AwsNetworkmanagerTransitGatewayRegistrationInputProps =
  & z.input<typeof AwsNetworkmanagerTransitGatewayRegistrationInputSchema>
  & NodeProps

export type AwsNetworkmanagerTransitGatewayRegistrationOutputProps =
  & z.output<typeof AwsNetworkmanagerTransitGatewayRegistrationOutputSchema>
  & z.output<typeof AwsNetworkmanagerTransitGatewayRegistrationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_transit_gateway_registration

export function AwsNetworkmanagerTransitGatewayRegistration(
  props: Partial<AwsNetworkmanagerTransitGatewayRegistrationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_transit_gateway_registration'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkmanagerTransitGatewayRegistrationInputSchema}
      _outputSchema={AwsNetworkmanagerTransitGatewayRegistrationOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerTransitGatewayRegistration = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkmanagerTransitGatewayRegistrationOutputProps>(
    AwsNetworkmanagerTransitGatewayRegistration,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkmanagerTransitGatewayRegistrations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkmanagerTransitGatewayRegistrationOutputProps>(
    AwsNetworkmanagerTransitGatewayRegistration,
    idFilter,
    baseNode,
    optional,
  )
