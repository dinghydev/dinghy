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

export const AwsSubnetInputSchema = TfMetaSchema.extend({
  vpc_id: resolvableValue(z.string()),
  assign_ipv6_address_on_creation: resolvableValue(z.boolean().optional()),
  availability_zone: resolvableValue(z.string().optional()),
  availability_zone_id: resolvableValue(z.string().optional()),
  cidr_block: resolvableValue(z.string().optional()),
  customer_owned_ipv4_pool: resolvableValue(z.string().optional()),
  enable_dns64: resolvableValue(z.boolean().optional()),
  enable_lni_at_device_index: resolvableValue(z.number().optional()),
  enable_resource_name_dns_a_record_on_launch: resolvableValue(
    z.boolean().optional(),
  ),
  enable_resource_name_dns_aaaa_record_on_launch: resolvableValue(
    z.boolean().optional(),
  ),
  ipv4_ipam_pool_id: resolvableValue(z.string().optional()),
  ipv4_netmask_length: resolvableValue(z.number().optional()),
  ipv6_cidr_block: resolvableValue(z.string().optional()),
  ipv6_ipam_pool_id: resolvableValue(z.string().optional()),
  ipv6_native: resolvableValue(z.boolean().optional()),
  ipv6_netmask_length: resolvableValue(z.number().optional()),
  map_customer_owned_ip_on_launch: resolvableValue(z.boolean().optional()),
  map_public_ip_on_launch: resolvableValue(z.boolean().optional()),
  outpost_arn: resolvableValue(z.string().optional()),
  private_dns_hostname_type_on_launch: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsSubnetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  ipv6_cidr_block_association_id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsSubnetImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsSubnetInputProps =
  & z.input<typeof AwsSubnetInputSchema>
  & z.input<typeof AwsSubnetImportSchema>
  & NodeProps

export type AwsSubnetOutputProps =
  & z.output<typeof AwsSubnetOutputSchema>
  & z.output<typeof AwsSubnetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/subnet

export function AwsSubnet(props: Partial<AwsSubnetInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_subnet'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSubnetInputSchema}
      _outputSchema={AwsSubnetOutputSchema}
      _importSchema={AwsSubnetImportSchema}
      {...props}
    />
  )
}

export const useAwsSubnet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<AwsSubnetOutputProps>(AwsSubnet, idFilter, baseNode, optional)

export const useAwsSubnets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSubnetOutputProps>(AwsSubnet, idFilter, baseNode, optional)
