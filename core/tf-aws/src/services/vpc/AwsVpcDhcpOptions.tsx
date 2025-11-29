import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/vpc_dhcp_options

export const InputSchema = z.object({
  domain_name: resolvableValue(z.string().optional()),
  domain_name_servers: resolvableValue(z.string().array().optional()),
  ipv6_address_preferred_lease_time: resolvableValue(z.string().optional()),
  netbios_name_servers: resolvableValue(z.string().array().optional()),
  netbios_node_type: resolvableValue(z.string().optional()),
  ntp_servers: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVpcDhcpOptions(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_dhcp_options'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcDhcpOptions = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsVpcDhcpOptions, node, id)
