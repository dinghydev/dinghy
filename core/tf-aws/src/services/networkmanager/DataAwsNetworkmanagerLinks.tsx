import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsNetworkmanagerLinksInputSchema = TfMetaSchema.extend({
  global_network_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  provider_name: resolvableValue(z.string().optional()),
  site_id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  type: resolvableValue(z.string().optional()),
})

export const DataAwsNetworkmanagerLinksOutputSchema = z.object({
  ids: z.string().array().optional(),
})

export type DataAwsNetworkmanagerLinksInputProps =
  & z.input<typeof DataAwsNetworkmanagerLinksInputSchema>
  & NodeProps

export type DataAwsNetworkmanagerLinksOutputProps =
  & z.output<typeof DataAwsNetworkmanagerLinksOutputSchema>
  & z.output<typeof DataAwsNetworkmanagerLinksInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/networkmanager_links

export function DataAwsNetworkmanagerLinks(
  props: Partial<DataAwsNetworkmanagerLinksInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_links'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsNetworkmanagerLinksInputSchema}
      _outputSchema={DataAwsNetworkmanagerLinksOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsNetworkmanagerLinkss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsNetworkmanagerLinksOutputProps>(
    DataAwsNetworkmanagerLinks,
    idFilter,
    baseNode,
    optional,
  )
