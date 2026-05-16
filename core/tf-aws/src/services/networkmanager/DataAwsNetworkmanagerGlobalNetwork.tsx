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

export const DataAwsNetworkmanagerGlobalNetworkInputSchema = TfMetaSchema
  .extend({
    global_network_id: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
  })

export const DataAwsNetworkmanagerGlobalNetworkOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsNetworkmanagerGlobalNetworkInputProps =
  & z.input<typeof DataAwsNetworkmanagerGlobalNetworkInputSchema>
  & NodeProps

export type DataAwsNetworkmanagerGlobalNetworkOutputProps =
  & z.output<typeof DataAwsNetworkmanagerGlobalNetworkOutputSchema>
  & z.output<typeof DataAwsNetworkmanagerGlobalNetworkInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/networkmanager_global_network

export function DataAwsNetworkmanagerGlobalNetwork(
  props: Partial<DataAwsNetworkmanagerGlobalNetworkInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsNetworkmanagerGlobalNetwork
      _type='aws_networkmanager_global_network'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsNetworkmanagerGlobalNetworkInputSchema}
      _outputSchema={DataAwsNetworkmanagerGlobalNetworkOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsNetworkmanagerGlobalNetwork = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsNetworkmanagerGlobalNetworkOutputProps>(
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
  useTypedNodes<DataAwsNetworkmanagerGlobalNetworkOutputProps>(
    DataAwsNetworkmanagerGlobalNetwork,
    idFilter,
    baseNode,
    optional,
  )
