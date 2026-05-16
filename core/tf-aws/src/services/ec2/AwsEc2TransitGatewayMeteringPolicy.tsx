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

export const AwsEc2TransitGatewayMeteringPolicyInputSchema = TfMetaSchema
  .extend({
    transit_gateway_id: resolvableValue(z.string()),
    middlebox_attachment_ids: resolvableValue(z.string().array().optional()),
    region: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsEc2TransitGatewayMeteringPolicyOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  transit_gateway_metering_policy_id: z.string().optional(),
})

export const AwsEc2TransitGatewayMeteringPolicyImportSchema = z.object({
  transit_gateway_metering_policy_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsEc2TransitGatewayMeteringPolicyInputProps =
  & z.input<typeof AwsEc2TransitGatewayMeteringPolicyInputSchema>
  & z.input<typeof AwsEc2TransitGatewayMeteringPolicyImportSchema>
  & NodeProps

export type AwsEc2TransitGatewayMeteringPolicyOutputProps =
  & z.output<typeof AwsEc2TransitGatewayMeteringPolicyOutputSchema>
  & z.output<typeof AwsEc2TransitGatewayMeteringPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_transit_gateway_metering_policy

export function AwsEc2TransitGatewayMeteringPolicy(
  props: Partial<AwsEc2TransitGatewayMeteringPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_transit_gateway_metering_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2TransitGatewayMeteringPolicyInputSchema}
      _outputSchema={AwsEc2TransitGatewayMeteringPolicyOutputSchema}
      _importSchema={AwsEc2TransitGatewayMeteringPolicyImportSchema}
      {...props}
    />
  )
}

export const useAwsEc2TransitGatewayMeteringPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2TransitGatewayMeteringPolicyOutputProps>(
    AwsEc2TransitGatewayMeteringPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2TransitGatewayMeteringPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2TransitGatewayMeteringPolicyOutputProps>(
    AwsEc2TransitGatewayMeteringPolicy,
    idFilter,
    baseNode,
    optional,
  )
