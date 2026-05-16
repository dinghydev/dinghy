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

export const AwsEc2TransitGatewayPolicyTableAssociationInputSchema =
  TfMetaSchema.extend({
    transit_gateway_attachment_id: resolvableValue(z.string()),
    transit_gateway_policy_table_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsEc2TransitGatewayPolicyTableAssociationOutputSchema = z.object({
  id: z.string().optional(),
  resource_id: z.string().optional(),
  resource_type: z.string().optional(),
})

export type AwsEc2TransitGatewayPolicyTableAssociationInputProps =
  & z.input<typeof AwsEc2TransitGatewayPolicyTableAssociationInputSchema>
  & NodeProps

export type AwsEc2TransitGatewayPolicyTableAssociationOutputProps =
  & z.output<typeof AwsEc2TransitGatewayPolicyTableAssociationOutputSchema>
  & z.output<typeof AwsEc2TransitGatewayPolicyTableAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_policy_table_association

export function AwsEc2TransitGatewayPolicyTableAssociation(
  props: Partial<AwsEc2TransitGatewayPolicyTableAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_policy_table_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TransitGatewayPolicyTableAssociationInputSchema}
      _outputSchema={AwsEc2TransitGatewayPolicyTableAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayPolicyTableAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TransitGatewayPolicyTableAssociationOutputProps>(
    AwsEc2TransitGatewayPolicyTableAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TransitGatewayPolicyTableAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TransitGatewayPolicyTableAssociationOutputProps>(
    AwsEc2TransitGatewayPolicyTableAssociation,
    idFilter,
    baseNode,
    optional,
  )
