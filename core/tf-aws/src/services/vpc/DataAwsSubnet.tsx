import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSubnet } from './AwsSubnet.tsx'

export const InputSchema = z.object({
  availability_zone: resolvableValue(z.string().optional()),
  availability_zone_id: resolvableValue(z.string().optional()),
  cidr_block: resolvableValue(z.string().optional()),
  default_for_az: resolvableValue(z.boolean().optional()),
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  ipv6_cidr_block: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  state: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
  vpc_id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  assign_ipv6_address_on_creation: z.boolean().optional(),
  available_ip_address_count: z.number().optional(),
  customer_owned_ipv4_pool: z.string().optional(),
  enable_dns64: z.boolean().optional(),
  enable_lni_at_device_index: z.number().optional(),
  enable_resource_name_dns_a_record_on_launch: z.boolean().optional(),
  enable_resource_name_dns_aaaa_record_on_launch: z.boolean().optional(),
  ipv6_cidr_block_association_id: z.string().optional(),
  ipv6_native: z.boolean().optional(),
  map_customer_owned_ip_on_launch: z.boolean().optional(),
  map_public_ip_on_launch: z.boolean().optional(),
  outpost_arn: z.string().optional(),
  owner_id: z.string().optional(),
  private_dns_hostname_type_on_launch: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/subnet

export function DataAwsSubnet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsSubnet
      _type='aws_subnet'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSubnet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsSubnet, idFilter, baseNode, optional)

export const useDataAwsSubnets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsSubnet, idFilter, baseNode, optional)
