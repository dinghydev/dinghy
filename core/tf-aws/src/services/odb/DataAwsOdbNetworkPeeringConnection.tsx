import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOdbNetworkPeeringConnection } from './AwsOdbNetworkPeeringConnection.tsx'

export const DataAwsOdbNetworkPeeringConnectionInputSchema = TfMetaSchema
  .extend({
    id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsOdbNetworkPeeringConnectionOutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  display_name: z.string().optional(),
  odb_network_arn: z.string().optional(),
  odb_peering_connection_type: z.string().optional(),
  peer_network_arn: z.string().optional(),
  peer_network_cidrs: z.set(z.string()).optional(),
  percent_progress: z.number().optional(),
  status: z.string().optional(),
  status_reason: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsOdbNetworkPeeringConnectionInputProps =
  & z.input<typeof DataAwsOdbNetworkPeeringConnectionInputSchema>
  & NodeProps

export type DataAwsOdbNetworkPeeringConnectionOutputProps =
  & z.output<typeof DataAwsOdbNetworkPeeringConnectionOutputSchema>
  & z.output<typeof DataAwsOdbNetworkPeeringConnectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/odb_network_peering_connection

export function DataAwsOdbNetworkPeeringConnection(
  props: Partial<DataAwsOdbNetworkPeeringConnectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsOdbNetworkPeeringConnection
      _type='aws_odb_network_peering_connection'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOdbNetworkPeeringConnectionInputSchema}
      _outputSchema={DataAwsOdbNetworkPeeringConnectionOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOdbNetworkPeeringConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsOdbNetworkPeeringConnectionOutputProps>(
    DataAwsOdbNetworkPeeringConnection,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsOdbNetworkPeeringConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOdbNetworkPeeringConnectionOutputProps>(
    DataAwsOdbNetworkPeeringConnection,
    idFilter,
    baseNode,
    optional,
  )
