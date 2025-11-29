import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsNetworkmanagerConnection } from './AwsNetworkmanagerConnection.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/networkmanager_connection

export const InputSchema = z.object({
  connection_id: resolvableValue(z.string()),
  global_network_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  connected_device_id: z.string().optional(),
  connected_link_id: z.string().optional(),
  description: z.string().optional(),
  device_id: z.string().optional(),
  link_id: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsNetworkmanagerConnection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsNetworkmanagerConnection
      _type='aws_networkmanager_connection'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsNetworkmanagerConnection = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsNetworkmanagerConnection, node, id)

export const useDataAwsNetworkmanagerConnections = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsNetworkmanagerConnection, node, id)
