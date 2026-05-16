import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsNetworkmanagerSite } from './AwsNetworkmanagerSite.tsx'

export const DataAwsNetworkmanagerSiteInputSchema = TfMetaSchema.extend({
  global_network_id: resolvableValue(z.string()),
  site_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const DataAwsNetworkmanagerSiteOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  location: z.object({
    address: z.string(),
    latitude: z.string(),
    longitude: z.string(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsNetworkmanagerSiteInputProps =
  & z.input<typeof DataAwsNetworkmanagerSiteInputSchema>
  & NodeProps

export type DataAwsNetworkmanagerSiteOutputProps =
  & z.output<typeof DataAwsNetworkmanagerSiteOutputSchema>
  & z.output<typeof DataAwsNetworkmanagerSiteInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/networkmanager_site

export function DataAwsNetworkmanagerSite(
  props: Partial<DataAwsNetworkmanagerSiteInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsNetworkmanagerSite
      _type='aws_networkmanager_site'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsNetworkmanagerSiteInputSchema}
      _outputSchema={DataAwsNetworkmanagerSiteOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsNetworkmanagerSite = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsNetworkmanagerSiteOutputProps>(
    DataAwsNetworkmanagerSite,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsNetworkmanagerSites = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsNetworkmanagerSiteOutputProps>(
    DataAwsNetworkmanagerSite,
    idFilter,
    baseNode,
    optional,
  )
