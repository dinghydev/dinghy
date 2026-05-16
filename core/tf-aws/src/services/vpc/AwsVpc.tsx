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

export const AwsVpcInputSchema = TfMetaSchema.extend({
  assign_generated_ipv6_cidr_block: resolvableValue(z.boolean().optional()),
  cidr_block: resolvableValue(z.string().optional()),
  enable_dns_hostnames: resolvableValue(z.boolean().optional()),
  enable_dns_support: resolvableValue(z.boolean().optional()),
  enable_network_address_usage_metrics: resolvableValue(z.boolean().optional()),
  instance_tenancy: resolvableValue(z.string().optional()),
  ipv4_ipam_pool_id: resolvableValue(z.string().optional()),
  ipv4_netmask_length: resolvableValue(z.number().optional()),
  ipv6_cidr_block: resolvableValue(z.string().optional()),
  ipv6_cidr_block_network_border_group: resolvableValue(z.string().optional()),
  ipv6_ipam_pool_id: resolvableValue(z.string().optional()),
  ipv6_netmask_length: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsVpcOutputSchema = z.object({
  arn: z.string().optional(),
  default_network_acl_id: z.string().optional(),
  default_route_table_id: z.string().optional(),
  default_security_group_id: z.string().optional(),
  dhcp_options_id: z.string().optional(),
  enable_dns_hostnames: z.boolean().optional(),
  enable_dns_support: z.boolean().optional(),
  enable_network_address_usage_metrics: z.boolean().optional(),
  id: z.string().optional(),
  instance_tenancy: z.string().optional(),
  ipv6_association_id: z.string().optional(),
  ipv6_cidr_block_network_border_group: z.string().optional(),
  main_route_table_id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsVpcImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsVpcInputProps =
  & z.input<typeof AwsVpcInputSchema>
  & z.input<typeof AwsVpcImportSchema>
  & NodeProps

export type AwsVpcOutputProps =
  & z.output<typeof AwsVpcOutputSchema>
  & z.output<typeof AwsVpcInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc

export function AwsVpc(props: Partial<AwsVpcInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcInputSchema}
      _outputSchema={AwsVpcOutputSchema}
      _importSchema={AwsVpcImportSchema}
      {...props}
    />
  )
}

export const useAwsVpc = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<AwsVpcOutputProps>(AwsVpc, idFilter, baseNode, optional)

export const useAwsVpcs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<AwsVpcOutputProps>(AwsVpc, idFilter, baseNode, optional)
