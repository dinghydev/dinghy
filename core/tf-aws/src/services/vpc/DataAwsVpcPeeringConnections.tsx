import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsVpcPeeringConnectionsInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsVpcPeeringConnectionsOutputSchema = z.object({
  id: z.string().optional(),
  ids: z.string().array().optional(),
})

export type DataAwsVpcPeeringConnectionsInputProps =
  & z.input<typeof DataAwsVpcPeeringConnectionsInputSchema>
  & NodeProps

export type DataAwsVpcPeeringConnectionsOutputProps =
  & z.output<typeof DataAwsVpcPeeringConnectionsOutputSchema>
  & z.output<typeof DataAwsVpcPeeringConnectionsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/vpc_peering_connections

export function DataAwsVpcPeeringConnections(
  props: Partial<DataAwsVpcPeeringConnectionsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_peering_connections'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsVpcPeeringConnectionsInputSchema}
      _outputSchema={DataAwsVpcPeeringConnectionsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsVpcPeeringConnectionss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsVpcPeeringConnectionsOutputProps>(
    DataAwsVpcPeeringConnections,
    idFilter,
    baseNode,
    optional,
  )
