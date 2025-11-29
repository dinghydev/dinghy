import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsVpcDhcpOptions } from './AwsVpcDhcpOptions.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/vpc_dhcp_options

export const InputSchema = z.object({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  dhcp_options_id: z.string().optional(),
  domain_name: z.string().optional(),
  domain_name_servers: z.string().array().optional(),
  id: z.string().optional(),
  ipv6_address_preferred_lease_time: z.string().optional(),
  netbios_name_servers: z.string().array().optional(),
  netbios_node_type: z.string().optional(),
  ntp_servers: z.string().array().optional(),
  owner_id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsVpcDhcpOptions(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsVpcDhcpOptions
      _type='aws_vpc_dhcp_options'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVpcDhcpOptions = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsVpcDhcpOptions, node, id)
