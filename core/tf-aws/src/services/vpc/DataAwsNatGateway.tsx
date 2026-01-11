import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsNatGateway } from './AwsNatGateway.tsx'

export const InputSchema = z.object({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  state: resolvableValue(z.string().optional()),
  subnet_id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
  vpc_id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  allocation_id: z.string().optional(),
  association_id: z.string().optional(),
  auto_provision_zones: z.string().optional(),
  auto_scaling_ips: z.string().optional(),
  availability_mode: z.string().optional(),
  availability_zone_address: z.set(z.object({
    allocation_ids: z.set(z.string()),
    availability_zone: z.string(),
    availability_zone_id: z.string(),
  })).optional(),
  connectivity_type: z.string().optional(),
  network_interface_id: z.string().optional(),
  private_ip: z.string().optional(),
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
  secondary_allocation_ids: z.string().array().optional(),
  secondary_private_ip_address_count: z.number().optional(),
  secondary_private_ip_addresses: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/nat_gateway

export function DataAwsNatGateway(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsNatGateway
      _type='aws_nat_gateway'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsNatGateway = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsNatGateway, idFilter, baseNode, optional)

export const useDataAwsNatGateways = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsNatGateway, idFilter, baseNode, optional)
