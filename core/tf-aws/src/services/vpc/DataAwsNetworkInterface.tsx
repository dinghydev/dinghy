import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsNetworkInterface } from './AwsNetworkInterface.tsx'

export const InputSchema = z.object({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  association: z.object({
    allocation_id: z.string(),
    association_id: z.string(),
    carrier_ip: z.string(),
    customer_owned_ip: z.string(),
    ip_owner_id: z.string(),
    public_dns_name: z.string(),
    public_ip: z.string(),
  }).array().optional(),
  attachment: z.object({
    attachment_id: z.string(),
    device_index: z.number(),
    instance_id: z.string(),
    instance_owner_id: z.string(),
    network_card_index: z.number(),
  }).array().optional(),
  availability_zone: z.string().optional(),
  description: z.string().optional(),
  interface_type: z.string().optional(),
  ipv6_addresses: z.set(z.string()).optional(),
  mac_address: z.string().optional(),
  outpost_arn: z.string().optional(),
  owner_id: z.string().optional(),
  private_dns_name: z.string().optional(),
  private_ip: z.string().optional(),
  private_ips: z.string().array().optional(),
  requester_id: z.string().optional(),
  security_groups: z.set(z.string()).optional(),
  subnet_id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/network_interface

export function DataAwsNetworkInterface(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsNetworkInterface
      _type='aws_network_interface'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsNetworkInterface = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(DataAwsNetworkInterface, idFilter, baseNode)

export const useDataAwsNetworkInterfaces = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(DataAwsNetworkInterface, idFilter, baseNode)
