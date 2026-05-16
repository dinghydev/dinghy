import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsMskBrokerNodesInputSchema = TfMetaSchema.extend({
  cluster_arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsMskBrokerNodesOutputSchema = z.object({
  node_info_list: z.object({
    attached_eni_id: z.string(),
    broker_id: z.number(),
    client_subnet: z.string(),
    client_vpc_ip_address: z.string(),
    endpoints: z.set(z.string()),
    node_arn: z.string(),
  }).array().optional(),
})

export type DataAwsMskBrokerNodesInputProps =
  & z.input<typeof DataAwsMskBrokerNodesInputSchema>
  & NodeProps

export type DataAwsMskBrokerNodesOutputProps =
  & z.output<typeof DataAwsMskBrokerNodesOutputSchema>
  & z.output<typeof DataAwsMskBrokerNodesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/msk_broker_nodes

export function DataAwsMskBrokerNodes(
  props: Partial<DataAwsMskBrokerNodesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_msk_broker_nodes'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsMskBrokerNodesInputSchema}
      _outputSchema={DataAwsMskBrokerNodesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsMskBrokerNodess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsMskBrokerNodesOutputProps>(
    DataAwsMskBrokerNodes,
    idFilter,
    baseNode,
    optional,
  )
