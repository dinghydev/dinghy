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

export const AwsNetworkmanagerAttachmentRoutingPolicyLabelInputSchema =
  TfMetaSchema.extend({
    attachment_id: resolvableValue(z.string()),
    core_network_id: resolvableValue(z.string()),
    routing_policy_label: resolvableValue(z.string()),
  })

export const AwsNetworkmanagerAttachmentRoutingPolicyLabelOutputSchema = z
  .object({})

export type AwsNetworkmanagerAttachmentRoutingPolicyLabelInputProps =
  & z.input<typeof AwsNetworkmanagerAttachmentRoutingPolicyLabelInputSchema>
  & NodeProps

export type AwsNetworkmanagerAttachmentRoutingPolicyLabelOutputProps =
  & z.output<typeof AwsNetworkmanagerAttachmentRoutingPolicyLabelOutputSchema>
  & z.output<typeof AwsNetworkmanagerAttachmentRoutingPolicyLabelInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_attachment_routing_policy_label

export function AwsNetworkmanagerAttachmentRoutingPolicyLabel(
  props: Partial<AwsNetworkmanagerAttachmentRoutingPolicyLabelInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_attachment_routing_policy_label'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkmanagerAttachmentRoutingPolicyLabelInputSchema}
      _outputSchema={AwsNetworkmanagerAttachmentRoutingPolicyLabelOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerAttachmentRoutingPolicyLabel = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkmanagerAttachmentRoutingPolicyLabelOutputProps>(
    AwsNetworkmanagerAttachmentRoutingPolicyLabel,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkmanagerAttachmentRoutingPolicyLabels = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkmanagerAttachmentRoutingPolicyLabelOutputProps>(
    AwsNetworkmanagerAttachmentRoutingPolicyLabel,
    idFilter,
    baseNode,
    optional,
  )
