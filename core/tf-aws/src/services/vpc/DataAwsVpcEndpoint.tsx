import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsVpcEndpoint } from './AwsVpcEndpoint.tsx'

export const InputSchema = TfMetaSchema.extend({
  ip_address_type: resolvableValue(z.string()),
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  service_name: resolvableValue(z.string().optional()),
  service_region: resolvableValue(z.string().optional()),
  state: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
  vpc_endpoint_type: resolvableValue(z.string().optional()),
  vpc_id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  cidr_blocks: z.string().array().optional(),
  dns_entry: z.object({
    dns_name: z.string(),
    hosted_zone_id: z.string(),
  }).array().optional(),
  dns_options: z.object({
    dns_record_ip_type: z.string(),
    private_dns_only_for_inbound_resolver_endpoint: z.boolean(),
    private_dns_preference: z.string(),
    private_dns_specified_domains: z.set(z.string()),
  }).array().optional(),
  network_interface_ids: z.set(z.string()).optional(),
  owner_id: z.string().optional(),
  policy: z.string().optional(),
  prefix_list_id: z.string().optional(),
  private_dns_enabled: z.boolean().optional(),
  requester_managed: z.boolean().optional(),
  route_table_ids: z.set(z.string()).optional(),
  security_group_ids: z.set(z.string()).optional(),
  subnet_ids: z.set(z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/vpc_endpoint

export function DataAwsVpcEndpoint(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsVpcEndpoint
      _type='aws_vpc_endpoint'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVpcEndpoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsVpcEndpoint, idFilter, baseNode, optional)

export const useDataAwsVpcEndpoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(DataAwsVpcEndpoint, idFilter, baseNode, optional)
