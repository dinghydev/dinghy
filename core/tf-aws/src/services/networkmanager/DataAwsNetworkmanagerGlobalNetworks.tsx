import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsNetworkmanagerGlobalNetworksInputSchema = TfMetaSchema
  .extend({
    id: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const DataAwsNetworkmanagerGlobalNetworksOutputSchema = z.object({
  ids: z.string().array().optional(),
})

export type DataAwsNetworkmanagerGlobalNetworksInputProps =
  & z.input<typeof DataAwsNetworkmanagerGlobalNetworksInputSchema>
  & NodeProps

export type DataAwsNetworkmanagerGlobalNetworksOutputProps =
  & z.output<typeof DataAwsNetworkmanagerGlobalNetworksOutputSchema>
  & z.output<typeof DataAwsNetworkmanagerGlobalNetworksInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/networkmanager_global_networks

export function DataAwsNetworkmanagerGlobalNetworks(
  props: Partial<DataAwsNetworkmanagerGlobalNetworksInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_global_networks'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsNetworkmanagerGlobalNetworksInputSchema}
      _outputSchema={DataAwsNetworkmanagerGlobalNetworksOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsNetworkmanagerGlobalNetworkss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsNetworkmanagerGlobalNetworksOutputProps>(
    DataAwsNetworkmanagerGlobalNetworks,
    idFilter,
    baseNode,
    optional,
  )
