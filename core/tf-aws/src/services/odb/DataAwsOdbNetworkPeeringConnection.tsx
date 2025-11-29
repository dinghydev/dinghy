import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOdbNetworkPeeringConnection } from './AwsOdbNetworkPeeringConnection.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/odb_network_peering_connection

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  display_name: z.string().optional(),
  odb_network_arn: z.string().optional(),
  odb_peering_connection_type: z.string().optional(),
  peer_network_arn: z.string().optional(),
  percent_progress: z.number().optional(),
  status: z.string().optional(),
  status_reason: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsOdbNetworkPeeringConnection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsOdbNetworkPeeringConnection
      _type='aws_odb_network_peering_connection'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOdbNetworkPeeringConnection = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsOdbNetworkPeeringConnection, node, id)

export const useDataAwsOdbNetworkPeeringConnections = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsOdbNetworkPeeringConnection, node, id)
