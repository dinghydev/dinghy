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

export const AwsVpnGatewayInputSchema = TfMetaSchema.extend({
  amazon_side_asn: resolvableValue(z.string().optional()),
  availability_zone: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  vpc_id: resolvableValue(z.string().optional()),
})

export const AwsVpnGatewayOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsVpnGatewayInputProps =
  & z.input<typeof AwsVpnGatewayInputSchema>
  & NodeProps

export type AwsVpnGatewayOutputProps =
  & z.output<typeof AwsVpnGatewayOutputSchema>
  & z.output<typeof AwsVpnGatewayInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpn_gateway

export function AwsVpnGateway(props: Partial<AwsVpnGatewayInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpn_gateway'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpnGatewayInputSchema}
      _outputSchema={AwsVpnGatewayOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpnGateway = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpnGatewayOutputProps>(
    AwsVpnGateway,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpnGateways = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpnGatewayOutputProps>(
    AwsVpnGateway,
    idFilter,
    baseNode,
    optional,
  )
