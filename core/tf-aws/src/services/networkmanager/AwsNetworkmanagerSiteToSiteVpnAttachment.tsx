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

export const AwsNetworkmanagerSiteToSiteVpnAttachmentInputSchema = TfMetaSchema
  .extend({
    core_network_id: resolvableValue(z.string()),
    vpn_connection_arn: resolvableValue(z.string()),
    routing_policy_label: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsNetworkmanagerSiteToSiteVpnAttachmentOutputSchema = z.object({
  arn: z.string().optional(),
  attachment_policy_rule_number: z.number().optional(),
  attachment_type: z.string().optional(),
  core_network_arn: z.string().optional(),
  edge_location: z.string().optional(),
  id: z.string().optional(),
  owner_account_id: z.string().optional(),
  resource_arn: z.string().optional(),
  segment_name: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsNetworkmanagerSiteToSiteVpnAttachmentInputProps =
  & z.input<typeof AwsNetworkmanagerSiteToSiteVpnAttachmentInputSchema>
  & NodeProps

export type AwsNetworkmanagerSiteToSiteVpnAttachmentOutputProps =
  & z.output<typeof AwsNetworkmanagerSiteToSiteVpnAttachmentOutputSchema>
  & z.output<typeof AwsNetworkmanagerSiteToSiteVpnAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_site_to_site_vpn_attachment

export function AwsNetworkmanagerSiteToSiteVpnAttachment(
  props: Partial<AwsNetworkmanagerSiteToSiteVpnAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_site_to_site_vpn_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkmanagerSiteToSiteVpnAttachmentInputSchema}
      _outputSchema={AwsNetworkmanagerSiteToSiteVpnAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerSiteToSiteVpnAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkmanagerSiteToSiteVpnAttachmentOutputProps>(
    AwsNetworkmanagerSiteToSiteVpnAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkmanagerSiteToSiteVpnAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkmanagerSiteToSiteVpnAttachmentOutputProps>(
    AwsNetworkmanagerSiteToSiteVpnAttachment,
    idFilter,
    baseNode,
    optional,
  )
