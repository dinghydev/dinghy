import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsNetworkmanagerSitesInputSchema = TfMetaSchema.extend({
  global_network_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const DataAwsNetworkmanagerSitesOutputSchema = z.object({
  ids: z.string().array().optional(),
})

export type DataAwsNetworkmanagerSitesInputProps =
  & z.input<typeof DataAwsNetworkmanagerSitesInputSchema>
  & NodeProps

export type DataAwsNetworkmanagerSitesOutputProps =
  & z.output<typeof DataAwsNetworkmanagerSitesOutputSchema>
  & z.output<typeof DataAwsNetworkmanagerSitesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/networkmanager_sites

export function DataAwsNetworkmanagerSites(
  props: Partial<DataAwsNetworkmanagerSitesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_sites'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsNetworkmanagerSitesInputSchema}
      _outputSchema={DataAwsNetworkmanagerSitesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsNetworkmanagerSitess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsNetworkmanagerSitesOutputProps>(
    DataAwsNetworkmanagerSites,
    idFilter,
    baseNode,
    optional,
  )
