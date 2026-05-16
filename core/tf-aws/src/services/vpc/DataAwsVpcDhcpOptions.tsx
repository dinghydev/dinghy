import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsVpcDhcpOptions } from './AwsVpcDhcpOptions.tsx'

export const DataAwsVpcDhcpOptionsInputSchema = TfMetaSchema.extend({
  dhcp_options_id: resolvableValue(z.string().optional()),
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

export const DataAwsVpcDhcpOptionsOutputSchema = z.object({
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

export type DataAwsVpcDhcpOptionsInputProps =
  & z.input<typeof DataAwsVpcDhcpOptionsInputSchema>
  & NodeProps

export type DataAwsVpcDhcpOptionsOutputProps =
  & z.output<typeof DataAwsVpcDhcpOptionsOutputSchema>
  & z.output<typeof DataAwsVpcDhcpOptionsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/vpc_dhcp_options

export function DataAwsVpcDhcpOptions(
  props: Partial<DataAwsVpcDhcpOptionsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsVpcDhcpOptions
      _type='aws_vpc_dhcp_options'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsVpcDhcpOptionsInputSchema}
      _outputSchema={DataAwsVpcDhcpOptionsOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVpcDhcpOptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsVpcDhcpOptionsOutputProps>(
    DataAwsVpcDhcpOptions,
    idFilter,
    baseNode,
    optional,
  )
