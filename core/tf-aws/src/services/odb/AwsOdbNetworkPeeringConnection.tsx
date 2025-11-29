import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/odb_network_peering_connection

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  display_name: resolvableValue(z.string()),
  odb_network_id: resolvableValue(z.string()),
  peer_network_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  created_at: z.string().optional(),
  id: z.string().optional(),
  odb_network_arn: z.string().optional(),
  odb_peering_connection_type: z.string().optional(),
  peer_network_arn: z.string().optional(),
  percent_progress: z.number().optional(),
  status: z.string().optional(),
  status_reason: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsOdbNetworkPeeringConnection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_odb_network_peering_connection'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsOdbNetworkPeeringConnection = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsOdbNetworkPeeringConnection, node, id)

export const useAwsOdbNetworkPeeringConnections = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsOdbNetworkPeeringConnection, node, id)
