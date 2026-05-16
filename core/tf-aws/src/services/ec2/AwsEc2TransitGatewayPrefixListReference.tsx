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

export const AwsEc2TransitGatewayPrefixListReferenceInputSchema = TfMetaSchema
  .extend({
    prefix_list_id: resolvableValue(z.string()),
    transit_gateway_route_table_id: resolvableValue(z.string()),
    blackhole: resolvableValue(z.boolean().optional()),
    region: resolvableValue(z.string().optional()),
    transit_gateway_attachment_id: resolvableValue(z.string().optional()),
  })

export const AwsEc2TransitGatewayPrefixListReferenceOutputSchema = z.object({
  id: z.string().optional(),
  prefix_list_owner_id: z.string().optional(),
})

export type AwsEc2TransitGatewayPrefixListReferenceInputProps =
  & z.input<typeof AwsEc2TransitGatewayPrefixListReferenceInputSchema>
  & NodeProps

export type AwsEc2TransitGatewayPrefixListReferenceOutputProps =
  & z.output<typeof AwsEc2TransitGatewayPrefixListReferenceOutputSchema>
  & z.output<typeof AwsEc2TransitGatewayPrefixListReferenceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_prefix_list_reference

export function AwsEc2TransitGatewayPrefixListReference(
  props: Partial<AwsEc2TransitGatewayPrefixListReferenceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_prefix_list_reference'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TransitGatewayPrefixListReferenceInputSchema}
      _outputSchema={AwsEc2TransitGatewayPrefixListReferenceOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayPrefixListReference = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TransitGatewayPrefixListReferenceOutputProps>(
    AwsEc2TransitGatewayPrefixListReference,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TransitGatewayPrefixListReferences = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TransitGatewayPrefixListReferenceOutputProps>(
    AwsEc2TransitGatewayPrefixListReference,
    idFilter,
    baseNode,
    optional,
  )
