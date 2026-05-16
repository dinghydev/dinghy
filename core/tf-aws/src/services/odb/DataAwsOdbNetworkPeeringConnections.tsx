import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsOdbNetworkPeeringConnectionsInputSchema = TfMetaSchema
  .extend({
    region: resolvableValue(z.string().optional()),
  })

export const DataAwsOdbNetworkPeeringConnectionsOutputSchema = z.object({
  odb_peering_connections: z.object({
    arn: z.string(),
    display_name: z.string(),
    id: z.string(),
    odb_network_arn: z.string(),
    peer_network_arn: z.string(),
  }).array().optional(),
})

export type DataAwsOdbNetworkPeeringConnectionsInputProps =
  & z.input<typeof DataAwsOdbNetworkPeeringConnectionsInputSchema>
  & NodeProps

export type DataAwsOdbNetworkPeeringConnectionsOutputProps =
  & z.output<typeof DataAwsOdbNetworkPeeringConnectionsOutputSchema>
  & z.output<typeof DataAwsOdbNetworkPeeringConnectionsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/odb_network_peering_connections

export function DataAwsOdbNetworkPeeringConnections(
  props: Partial<DataAwsOdbNetworkPeeringConnectionsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_odb_network_peering_connections'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOdbNetworkPeeringConnectionsInputSchema}
      _outputSchema={DataAwsOdbNetworkPeeringConnectionsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOdbNetworkPeeringConnectionss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOdbNetworkPeeringConnectionsOutputProps>(
    DataAwsOdbNetworkPeeringConnections,
    idFilter,
    baseNode,
    optional,
  )
