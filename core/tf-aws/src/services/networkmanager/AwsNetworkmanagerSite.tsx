import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsNetworkmanagerSiteInputSchema = TfMetaSchema.extend({
  global_network_id: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  location: resolvableValue(
    z.object({
      address: z.string().optional(),
      latitude: z.string().optional(),
      longitude: z.string().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsNetworkmanagerSiteOutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsNetworkmanagerSiteInputProps =
  & z.input<typeof AwsNetworkmanagerSiteInputSchema>
  & NodeProps

export type AwsNetworkmanagerSiteOutputProps =
  & z.output<typeof AwsNetworkmanagerSiteOutputSchema>
  & z.output<typeof AwsNetworkmanagerSiteInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_site

export function AwsNetworkmanagerSite(
  props: Partial<AwsNetworkmanagerSiteInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_site'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkmanagerSiteInputSchema}
      _outputSchema={AwsNetworkmanagerSiteOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerSite = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkmanagerSiteOutputProps>(
    AwsNetworkmanagerSite,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkmanagerSites = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkmanagerSiteOutputProps>(
    AwsNetworkmanagerSite,
    idFilter,
    baseNode,
    optional,
  )
