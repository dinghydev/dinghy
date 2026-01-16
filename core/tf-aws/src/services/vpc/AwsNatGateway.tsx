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

export const InputSchema = TfMetaSchema.extend({
  regional_nat_gateway_auto_mode: resolvableValue(z.string()),
  allocation_id: resolvableValue(z.string().optional()),
  availability_mode: resolvableValue(z.string().optional()),
  availability_zone_address: resolvableValue(
    z.object({
      allocation_ids: z.string().array().optional(),
      availability_zone: z.string().optional(),
      availability_zone_id: z.string().optional(),
    }).array().optional(),
  ),
  connectivity_type: resolvableValue(z.string().optional()),
  private_ip: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  secondary_allocation_ids: resolvableValue(z.string().array().optional()),
  secondary_private_ip_address_count: resolvableValue(z.number().optional()),
  secondary_private_ip_addresses: resolvableValue(
    z.string().array().optional(),
  ),
  subnet_id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc_id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  allocation_id: z.string().optional(),
  association_id: z.string().optional(),
  auto_provision_zones: z.string().optional(),
  auto_scaling_ips: z.string().optional(),
  id: z.string().optional(),
  network_interface_id: z.string().optional(),
  public_ip: z.string().optional(),
  regional_nat_gateway_address: z.set(z.object({
    allocation_id: z.string(),
    association_id: z.string(),
    availability_zone: z.string(),
    availability_zone_id: z.string(),
    network_interface_id: z.string(),
    public_ip: z.string(),
    status: z.string(),
  })).optional(),
  route_table_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/nat_gateway

export function AwsNatGateway(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_nat_gateway'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNatGateway = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsNatGateway, idFilter, baseNode, optional)

export const useAwsNatGateways = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsNatGateway, idFilter, baseNode, optional)
