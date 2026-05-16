import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsDefaultVpcDhcpOptionsInputSchema = TfMetaSchema.extend({
  netbios_name_servers: resolvableValue(z.string()),
  netbios_node_type: resolvableValue(z.string()),
  owner_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsDefaultVpcDhcpOptionsOutputSchema = z.object({
  arn: z.string().optional(),
  domain_name: z.string().optional(),
  domain_name_servers: z.string().optional(),
  id: z.string().optional(),
  ipv6_address_preferred_lease_time: z.string().optional(),
  netbios_name_servers: z.string().optional(),
  netbios_node_type: z.string().optional(),
  ntp_servers: z.string().optional(),
})

export type AwsDefaultVpcDhcpOptionsInputProps =
  & z.input<typeof AwsDefaultVpcDhcpOptionsInputSchema>
  & NodeProps

export type AwsDefaultVpcDhcpOptionsOutputProps =
  & z.output<typeof AwsDefaultVpcDhcpOptionsOutputSchema>
  & z.output<typeof AwsDefaultVpcDhcpOptionsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/default_vpc_dhcp_options

export function AwsDefaultVpcDhcpOptions(
  props: Partial<AwsDefaultVpcDhcpOptionsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_default_vpc_dhcp_options'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDefaultVpcDhcpOptionsInputSchema}
      _outputSchema={AwsDefaultVpcDhcpOptionsOutputSchema}
      {...props}
    />
  )
}

export const useAwsDefaultVpcDhcpOptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDefaultVpcDhcpOptionsOutputProps>(
    AwsDefaultVpcDhcpOptions,
    idFilter,
    baseNode,
    optional,
  )
