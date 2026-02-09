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
  assign_generated_ipv6_cidr_block: resolvableValue(z.boolean().optional()),
  enable_dns_hostnames: resolvableValue(z.boolean().optional()),
  enable_dns_support: resolvableValue(z.boolean().optional()),
  enable_network_address_usage_metrics: resolvableValue(z.boolean().optional()),
  force_destroy: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  ipv6_cidr_block: resolvableValue(z.string().optional()),
  ipv6_cidr_block_network_border_group: resolvableValue(z.string().optional()),
  ipv6_ipam_pool_id: resolvableValue(z.string().optional()),
  ipv6_netmask_length: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  cidr_block: z.string().optional(),
  default_network_acl_id: z.string().optional(),
  default_route_table_id: z.string().optional(),
  default_security_group_id: z.string().optional(),
  dhcp_options_id: z.string().optional(),
  existing_default_vpc: z.boolean().optional(),
  instance_tenancy: z.string().optional(),
  ipv6_association_id: z.string().optional(),
  main_route_table_id: z.string().optional(),
  owner_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/default_vpc

export function AwsDefaultVpc(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_default_vpc'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDefaultVpc = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsDefaultVpc, idFilter, baseNode, optional)

export const useAwsDefaultVpcs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsDefaultVpc, idFilter, baseNode, optional)
