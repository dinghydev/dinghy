import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsVpc } from './AwsVpc.tsx'

export const InputSchema = TfMetaSchema.extend({
  cidr_block: resolvableValue(z.string().optional()),
  default: resolvableValue(z.boolean().optional()),
  dhcp_options_id: resolvableValue(z.string().optional()),
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  state: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  cidr_block_associations: z.object({
    association_id: z.string(),
    cidr_block: z.string(),
    state: z.string(),
  }).array().optional(),
  enable_dns_hostnames: z.boolean().optional(),
  enable_dns_support: z.boolean().optional(),
  enable_network_address_usage_metrics: z.boolean().optional(),
  instance_tenancy: z.string().optional(),
  ipv6_association_id: z.string().optional(),
  ipv6_cidr_block: z.string().optional(),
  main_route_table_id: z.string().optional(),
  owner_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/vpc

export function DataAwsVpc(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsVpc
      _type='aws_vpc'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVpc = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsVpc, idFilter, baseNode, optional)

export const useDataAwsVpcs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsVpc, idFilter, baseNode, optional)
