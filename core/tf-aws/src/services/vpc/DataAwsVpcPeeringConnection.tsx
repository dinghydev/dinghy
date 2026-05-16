import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsVpcPeeringConnection } from './AwsVpcPeeringConnection.tsx'

export const DataAwsVpcPeeringConnectionInputSchema = TfMetaSchema.extend({
  cidr_block: resolvableValue(z.string().optional()),
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  owner_id: resolvableValue(z.string().optional()),
  peer_cidr_block: resolvableValue(z.string().optional()),
  peer_owner_id: resolvableValue(z.string().optional()),
  peer_vpc_id: resolvableValue(z.string().optional()),
  status: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
  vpc_id: resolvableValue(z.string().optional()),
})

export const DataAwsVpcPeeringConnectionOutputSchema = z.object({
  accepter: z.record(z.string(), z.boolean()).optional(),
  cidr_block_set: z.object({
    cidr_block: z.string(),
  }).array().optional(),
  ipv6_cidr_block_set: z.object({
    ipv6_cidr_block: z.string(),
  }).array().optional(),
  peer_cidr_block_set: z.object({
    cidr_block: z.string(),
  }).array().optional(),
  peer_ipv6_cidr_block_set: z.object({
    ipv6_cidr_block: z.string(),
  }).array().optional(),
  peer_region: z.string().optional(),
  region: z.string().optional(),
  requester: z.record(z.string(), z.boolean()).optional(),
  requester_region: z.string().optional(),
})

export type DataAwsVpcPeeringConnectionInputProps =
  & z.input<typeof DataAwsVpcPeeringConnectionInputSchema>
  & NodeProps

export type DataAwsVpcPeeringConnectionOutputProps =
  & z.output<typeof DataAwsVpcPeeringConnectionOutputSchema>
  & z.output<typeof DataAwsVpcPeeringConnectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/vpc_peering_connection

export function DataAwsVpcPeeringConnection(
  props: Partial<DataAwsVpcPeeringConnectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsVpcPeeringConnection
      _type='aws_vpc_peering_connection'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsVpcPeeringConnectionInputSchema}
      _outputSchema={DataAwsVpcPeeringConnectionOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsVpcPeeringConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsVpcPeeringConnectionOutputProps>(
    DataAwsVpcPeeringConnection,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsVpcPeeringConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsVpcPeeringConnectionOutputProps>(
    DataAwsVpcPeeringConnection,
    idFilter,
    baseNode,
    optional,
  )
