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

export const AwsNetworkmanagerVpcAttachmentInputSchema = TfMetaSchema.extend({
  core_network_id: resolvableValue(z.string()),
  subnet_arns: resolvableValue(z.string().array()),
  vpc_arn: resolvableValue(z.string()),
  options: resolvableValue(
    z.object({
      appliance_mode_support: z.boolean().optional(),
      dns_support: z.boolean().optional(),
      ipv6_support: z.boolean().optional(),
      security_group_referencing_support: z.boolean().optional(),
    }).optional(),
  ),
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

export const AwsNetworkmanagerVpcAttachmentOutputSchema = z.object({
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

export type AwsNetworkmanagerVpcAttachmentInputProps =
  & z.input<typeof AwsNetworkmanagerVpcAttachmentInputSchema>
  & NodeProps

export type AwsNetworkmanagerVpcAttachmentOutputProps =
  & z.output<typeof AwsNetworkmanagerVpcAttachmentOutputSchema>
  & z.output<typeof AwsNetworkmanagerVpcAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_vpc_attachment

export function AwsNetworkmanagerVpcAttachment(
  props: Partial<AwsNetworkmanagerVpcAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_vpc_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkmanagerVpcAttachmentInputSchema}
      _outputSchema={AwsNetworkmanagerVpcAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerVpcAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkmanagerVpcAttachmentOutputProps>(
    AwsNetworkmanagerVpcAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkmanagerVpcAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkmanagerVpcAttachmentOutputProps>(
    AwsNetworkmanagerVpcAttachment,
    idFilter,
    baseNode,
    optional,
  )
