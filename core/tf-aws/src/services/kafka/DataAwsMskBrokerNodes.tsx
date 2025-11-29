import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/msk_broker_nodes

export const InputSchema = z.object({
  cluster_arn: resolvableValue(z.string()),
  node_info_list: resolvableValue(
    z.object({
      attached_eni_id: z.string(),
      broker_id: z.number(),
      client_subnet: z.string(),
      client_vpc_ip_address: z.string(),
      endpoints: z.string().array(),
      node_arn: z.string(),
    }).array(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsMskBrokerNodes(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_msk_broker_nodes'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsMskBrokerNodess = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsMskBrokerNodes, node, id)
