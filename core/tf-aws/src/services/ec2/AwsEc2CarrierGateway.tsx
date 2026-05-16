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

export const AwsEc2CarrierGatewayInputSchema = TfMetaSchema.extend({
  vpc_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsEc2CarrierGatewayOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsEc2CarrierGatewayInputProps =
  & z.input<typeof AwsEc2CarrierGatewayInputSchema>
  & NodeProps

export type AwsEc2CarrierGatewayOutputProps =
  & z.output<typeof AwsEc2CarrierGatewayOutputSchema>
  & z.output<typeof AwsEc2CarrierGatewayInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ec2_carrier_gateway

export function AwsEc2CarrierGateway(
  props: Partial<AwsEc2CarrierGatewayInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ec2_carrier_gateway'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEc2CarrierGatewayInputSchema}
      _outputSchema={AwsEc2CarrierGatewayOutputSchema}
      {...props}
    />
  )
}

export const useAwsEc2CarrierGateway = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEc2CarrierGatewayOutputProps>(
    AwsEc2CarrierGateway,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEc2CarrierGateways = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEc2CarrierGatewayOutputProps>(
    AwsEc2CarrierGateway,
    idFilter,
    baseNode,
    optional,
  )
