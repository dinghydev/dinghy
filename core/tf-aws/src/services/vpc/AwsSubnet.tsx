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
  ipv6_cidr_block: resolvableValue(z.string().optional()),
  ipv6_native: resolvableValue(z.boolean().optional()),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  ipv6_cidr_block_association_id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/subnet

export function AwsSubnet(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_subnet'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSubnet = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsSubnet, idFilter, baseNode)

export const useAwsSubnets = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsSubnet, idFilter, baseNode)
