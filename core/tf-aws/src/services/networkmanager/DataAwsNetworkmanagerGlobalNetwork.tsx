import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsNetworkmanagerGlobalNetwork } from './AwsNetworkmanagerGlobalNetwork.tsx'

export const InputSchema = z.object({
  global_network_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/networkmanager_global_network

export function DataAwsNetworkmanagerGlobalNetwork(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsNetworkmanagerGlobalNetwork
      _type='aws_networkmanager_global_network'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsNetworkmanagerGlobalNetwork = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsNetworkmanagerGlobalNetwork,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsNetworkmanagerGlobalNetworks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsNetworkmanagerGlobalNetwork,
    idFilter,
    baseNode,
    optional,
  )
