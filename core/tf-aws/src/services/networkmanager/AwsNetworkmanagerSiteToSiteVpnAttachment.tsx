import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/networkmanager_site_to_site_vpn_attachment

export const InputSchema = z.object({
  core_network_id: resolvableValue(z.string()),
  vpn_connection_arn: resolvableValue(z.string()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsNetworkmanagerSiteToSiteVpnAttachment(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_site_to_site_vpn_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerSiteToSiteVpnAttachment = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(AwsNetworkmanagerSiteToSiteVpnAttachment, node, id)

export const useAwsNetworkmanagerSiteToSiteVpnAttachments = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(AwsNetworkmanagerSiteToSiteVpnAttachment, node, id)
