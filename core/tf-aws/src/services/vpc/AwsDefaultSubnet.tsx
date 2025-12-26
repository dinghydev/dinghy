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
  availability_zone: resolvableValue(z.string()),
  enable_lni_at_device_index: resolvableValue(z.number()),
  existing_default_subnet: resolvableValue(z.boolean()),
  ipv6_cidr_block_association_id: resolvableValue(z.string()),
  outpost_arn: resolvableValue(z.string()),
  owner_id: resolvableValue(z.string()),
  assign_ipv6_address_on_creation: resolvableValue(z.boolean().optional()),
  customer_owned_ipv4_pool: resolvableValue(z.string().optional()),
  enable_dns64: resolvableValue(z.boolean().optional()),
  enable_resource_name_dns_a_record_on_launch: resolvableValue(
    z.boolean().optional(),
  ),
  enable_resource_name_dns_aaaa_record_on_launch: resolvableValue(
    z.boolean().optional(),
  ),
  force_destroy: resolvableValue(z.boolean().optional()),
  id: resolvableValue(z.string().optional()),
  ipv6_cidr_block: resolvableValue(z.string().optional()),
  ipv6_native: resolvableValue(z.boolean().optional()),
  map_customer_owned_ip_on_launch: resolvableValue(z.boolean().optional()),
  map_public_ip_on_launch: resolvableValue(z.boolean().optional()),
  private_dns_hostname_type_on_launch: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  availability_zone_id: z.string().optional(),
  cidr_block: z.string().optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/default_subnet

export function AwsDefaultSubnet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_default_subnet'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDefaultSubnet = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsDefaultSubnet, idFilter, baseNode, optional)

export const useAwsDefaultSubnets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsDefaultSubnet, idFilter, baseNode, optional)
