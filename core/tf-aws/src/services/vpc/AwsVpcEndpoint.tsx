import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/vpc_endpoint

export const InputSchema = z.object({
  vpc_id: resolvableValue(z.string()),
  auto_accept: resolvableValue(z.boolean().optional()),
  dns_options: resolvableValue(
    z.object({
      dns_record_ip_type: z.string().optional(),
      private_dns_only_for_inbound_resolver_endpoint: z.boolean().optional(),
    }).optional(),
  ),
  ip_address_type: resolvableValue(z.string().optional()),
  policy: resolvableValue(z.string().optional()),
  private_dns_enabled: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  resource_configuration_arn: resolvableValue(z.string().optional()),
  route_table_ids: resolvableValue(z.string().array().optional()),
  security_group_ids: resolvableValue(z.string().array().optional()),
  service_name: resolvableValue(z.string().optional()),
  service_network_arn: resolvableValue(z.string().optional()),
  service_region: resolvableValue(z.string().optional()),
  subnet_configuration: resolvableValue(
    z.object({
      ipv4: z.string().optional(),
      ipv6: z.string().optional(),
      subnet_id: z.string().optional(),
    }).array().optional(),
  ),
  subnet_ids: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc_endpoint_type: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  cidr_blocks: z.string().array().optional(),
  dns_entry: z.object({
    dns_name: z.string(),
    hosted_zone_id: z.string(),
  }).array().optional(),
  id: z.string().optional(),
  network_interface_ids: z.string().array().optional(),
  owner_id: z.string().optional(),
  prefix_list_id: z.string().optional(),
  requester_managed: z.boolean().optional(),
  state: z.string().optional(),
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

export function AwsVpcEndpoint(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsVpcEndpoint = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsVpcEndpoint, node, id)

export const useAwsVpcEndpoints = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsVpcEndpoint, node, id)
