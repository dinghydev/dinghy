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

export const AwsNetworkInterfaceInputSchema = TfMetaSchema.extend({
  subnet_id: resolvableValue(z.string()),
  attachment: resolvableValue(
    z.object({
      attachment_id: z.string().optional(),
      device_index: z.number(),
      instance: z.string(),
      network_card_index: z.number().optional(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  ena_srd_specification: resolvableValue(
    z.object({
      ena_srd_enabled: z.boolean().optional(),
      ena_srd_udp_specification: z.object({
        ena_srd_udp_enabled: z.boolean().optional(),
      }).optional(),
    }).optional(),
  ),
  enable_primary_ipv6: resolvableValue(z.boolean().optional()),
  interface_type: resolvableValue(z.string().optional()),
  ipv4_prefix_count: resolvableValue(z.number().optional()),
  ipv4_prefixes: resolvableValue(z.string().array().optional()),
  ipv6_address_count: resolvableValue(z.number().optional()),
  ipv6_address_list: resolvableValue(z.string().array().optional()),
  ipv6_address_list_enabled: resolvableValue(z.boolean().optional()),
  ipv6_addresses: resolvableValue(z.string().array().optional()),
  ipv6_prefix_count: resolvableValue(z.number().optional()),
  ipv6_prefixes: resolvableValue(z.string().array().optional()),
  private_ip: resolvableValue(z.string().optional()),
  private_ip_list: resolvableValue(z.string().array().optional()),
  private_ip_list_enabled: resolvableValue(z.boolean().optional()),
  private_ips: resolvableValue(z.string().array().optional()),
  private_ips_count: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  security_groups: resolvableValue(z.string().array().optional()),
  source_dest_check: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsNetworkInterfaceOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  mac_address: z.string().optional(),
  outpost_arn: z.string().optional(),
  owner_id: z.string().optional(),
  private_dns_name: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsNetworkInterfaceInputProps =
  & z.input<typeof AwsNetworkInterfaceInputSchema>
  & NodeProps

export type AwsNetworkInterfaceOutputProps =
  & z.output<typeof AwsNetworkInterfaceOutputSchema>
  & z.output<typeof AwsNetworkInterfaceInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/network_interface

export function AwsNetworkInterface(
  props: Partial<AwsNetworkInterfaceInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_network_interface'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkInterfaceInputSchema}
      _outputSchema={AwsNetworkInterfaceOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkInterface = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkInterfaceOutputProps>(
    AwsNetworkInterface,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkInterfaces = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkInterfaceOutputProps>(
    AwsNetworkInterface,
    idFilter,
    baseNode,
    optional,
  )
