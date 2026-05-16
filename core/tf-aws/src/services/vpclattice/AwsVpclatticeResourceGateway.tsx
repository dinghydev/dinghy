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

export const AwsVpclatticeResourceGatewayInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  subnet_ids: resolvableValue(z.string().array()),
  vpc_id: resolvableValue(z.string()),
  ip_address_type: resolvableValue(z.string().optional()),
  ipv4_addresses_per_eni: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  security_group_ids: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsVpclatticeResourceGatewayOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsVpclatticeResourceGatewayInputProps =
  & z.input<typeof AwsVpclatticeResourceGatewayInputSchema>
  & NodeProps

export type AwsVpclatticeResourceGatewayOutputProps =
  & z.output<typeof AwsVpclatticeResourceGatewayOutputSchema>
  & z.output<typeof AwsVpclatticeResourceGatewayInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpclattice_resource_gateway

export function AwsVpclatticeResourceGateway(
  props: Partial<AwsVpclatticeResourceGatewayInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpclattice_resource_gateway'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpclatticeResourceGatewayInputSchema}
      _outputSchema={AwsVpclatticeResourceGatewayOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpclatticeResourceGateway = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpclatticeResourceGatewayOutputProps>(
    AwsVpclatticeResourceGateway,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpclatticeResourceGateways = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpclatticeResourceGatewayOutputProps>(
    AwsVpclatticeResourceGateway,
    idFilter,
    baseNode,
    optional,
  )
