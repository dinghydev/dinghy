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

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  default_network_acl_id: resolvableValue(z.string()),
  default_route_table_id: resolvableValue(z.string()),
  default_security_group_id: resolvableValue(z.string()),
  dhcp_options_id: resolvableValue(z.string()),
  existing_default_vpc: resolvableValue(z.boolean()),
  ipv6_association_id: resolvableValue(z.string()),
  main_route_table_id: resolvableValue(z.string()),
  owner_id: resolvableValue(z.string()),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  cidr_block: z.string().optional(),
  instance_tenancy: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/default_vpc

export function AwsDefaultVpc(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useAwsDefaultVpc = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsDefaultVpc, idFilter, baseNode)

export const useAwsDefaultVpcs = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsDefaultVpc, idFilter, baseNode)
