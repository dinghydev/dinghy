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

export const AwsEc2TransitGatewayPolicyTableInputSchema = TfMetaSchema.extend({
  transit_gateway_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsEc2TransitGatewayPolicyTableOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsEc2TransitGatewayPolicyTableInputProps =
  & z.input<typeof AwsEc2TransitGatewayPolicyTableInputSchema>
  & NodeProps

export type AwsEc2TransitGatewayPolicyTableOutputProps =
  & z.output<typeof AwsEc2TransitGatewayPolicyTableOutputSchema>
  & z.output<typeof AwsEc2TransitGatewayPolicyTableInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_policy_table

export function AwsEc2TransitGatewayPolicyTable(
  props: Partial<AwsEc2TransitGatewayPolicyTableInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_policy_table'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TransitGatewayPolicyTableInputSchema}
      _outputSchema={AwsEc2TransitGatewayPolicyTableOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayPolicyTable = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TransitGatewayPolicyTableOutputProps>(
    AwsEc2TransitGatewayPolicyTable,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TransitGatewayPolicyTables = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TransitGatewayPolicyTableOutputProps>(
    AwsEc2TransitGatewayPolicyTable,
    idFilter,
    baseNode,
    optional,
  )
