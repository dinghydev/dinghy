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

export const AwsNatGatewayEipAssociationInputSchema = TfMetaSchema.extend({
  allocation_id: resolvableValue(z.string()),
  nat_gateway_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsNatGatewayEipAssociationOutputSchema = z.object({
  association_id: z.string().optional(),
})

export type AwsNatGatewayEipAssociationInputProps =
  & z.input<typeof AwsNatGatewayEipAssociationInputSchema>
  & NodeProps

export type AwsNatGatewayEipAssociationOutputProps =
  & z.output<typeof AwsNatGatewayEipAssociationOutputSchema>
  & z.output<typeof AwsNatGatewayEipAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/nat_gateway_eip_association

export function AwsNatGatewayEipAssociation(
  props: Partial<AwsNatGatewayEipAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_nat_gateway_eip_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNatGatewayEipAssociationInputSchema}
      _outputSchema={AwsNatGatewayEipAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsNatGatewayEipAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNatGatewayEipAssociationOutputProps>(
    AwsNatGatewayEipAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNatGatewayEipAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNatGatewayEipAssociationOutputProps>(
    AwsNatGatewayEipAssociation,
    idFilter,
    baseNode,
    optional,
  )
