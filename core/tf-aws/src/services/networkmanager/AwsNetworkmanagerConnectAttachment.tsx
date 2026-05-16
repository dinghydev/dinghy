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

export const AwsNetworkmanagerConnectAttachmentInputSchema = TfMetaSchema
  .extend({
    core_network_id: resolvableValue(z.string()),
    edge_location: resolvableValue(z.string()),
    options: resolvableValue(z.object({
      protocol: z.string().optional(),
    })),
    transport_attachment_id: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    routing_policy_label: resolvableValue(z.string().optional()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsNetworkmanagerConnectAttachmentOutputSchema = z.object({
  arn: z.string().optional(),
  attachment_id: z.string().optional(),
  attachment_policy_rule_number: z.number().optional(),
  attachment_type: z.string().optional(),
  core_network_arn: z.string().optional(),
  owner_account_id: z.string().optional(),
  resource_arn: z.string().optional(),
  segment_name: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsNetworkmanagerConnectAttachmentInputProps =
  & z.input<typeof AwsNetworkmanagerConnectAttachmentInputSchema>
  & NodeProps

export type AwsNetworkmanagerConnectAttachmentOutputProps =
  & z.output<typeof AwsNetworkmanagerConnectAttachmentOutputSchema>
  & z.output<typeof AwsNetworkmanagerConnectAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_connect_attachment

export function AwsNetworkmanagerConnectAttachment(
  props: Partial<AwsNetworkmanagerConnectAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_connect_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkmanagerConnectAttachmentInputSchema}
      _outputSchema={AwsNetworkmanagerConnectAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerConnectAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkmanagerConnectAttachmentOutputProps>(
    AwsNetworkmanagerConnectAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkmanagerConnectAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkmanagerConnectAttachmentOutputProps>(
    AwsNetworkmanagerConnectAttachment,
    idFilter,
    baseNode,
    optional,
  )
