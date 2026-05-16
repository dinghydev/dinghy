import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsVpcDhcpOptionsInputSchema = TfMetaSchema.extend({
  domain_name: resolvableValue(z.string().optional()),
  domain_name_servers: resolvableValue(z.string().array().optional()),
  ipv6_address_preferred_lease_time: resolvableValue(z.string().optional()),
  netbios_name_servers: resolvableValue(z.string().array().optional()),
  netbios_node_type: resolvableValue(z.string().optional()),
  ntp_servers: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsVpcDhcpOptionsOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsVpcDhcpOptionsInputProps =
  & z.input<typeof AwsVpcDhcpOptionsInputSchema>
  & NodeProps

export type AwsVpcDhcpOptionsOutputProps =
  & z.output<typeof AwsVpcDhcpOptionsOutputSchema>
  & z.output<typeof AwsVpcDhcpOptionsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_dhcp_options

export function AwsVpcDhcpOptions(props: Partial<AwsVpcDhcpOptionsInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_dhcp_options'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcDhcpOptionsInputSchema}
      _outputSchema={AwsVpcDhcpOptionsOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcDhcpOptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcDhcpOptionsOutputProps>(
    AwsVpcDhcpOptions,
    idFilter,
    baseNode,
    optional,
  )
