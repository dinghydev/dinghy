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

export const AwsNetworkmanagerDxGatewayAttachmentInputSchema = TfMetaSchema
  .extend({
    core_network_id: resolvableValue(z.string()),
    direct_connect_gateway_arn: resolvableValue(z.string()),
    edge_locations: resolvableValue(z.string().array()),
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

export const AwsNetworkmanagerDxGatewayAttachmentOutputSchema = z.object({
  arn: z.string().optional(),
  attachment_policy_rule_number: z.number().optional(),
  attachment_type: z.string().optional(),
  core_network_arn: z.string().optional(),
  id: z.string().optional(),
  owner_account_id: z.string().optional(),
  segment_name: z.string().optional(),
  state: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsNetworkmanagerDxGatewayAttachmentInputProps =
  & z.input<typeof AwsNetworkmanagerDxGatewayAttachmentInputSchema>
  & NodeProps

export type AwsNetworkmanagerDxGatewayAttachmentOutputProps =
  & z.output<typeof AwsNetworkmanagerDxGatewayAttachmentOutputSchema>
  & z.output<typeof AwsNetworkmanagerDxGatewayAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_dx_gateway_attachment

export function AwsNetworkmanagerDxGatewayAttachment(
  props: Partial<AwsNetworkmanagerDxGatewayAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_dx_gateway_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkmanagerDxGatewayAttachmentInputSchema}
      _outputSchema={AwsNetworkmanagerDxGatewayAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerDxGatewayAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkmanagerDxGatewayAttachmentOutputProps>(
    AwsNetworkmanagerDxGatewayAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkmanagerDxGatewayAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkmanagerDxGatewayAttachmentOutputProps>(
    AwsNetworkmanagerDxGatewayAttachment,
    idFilter,
    baseNode,
    optional,
  )
