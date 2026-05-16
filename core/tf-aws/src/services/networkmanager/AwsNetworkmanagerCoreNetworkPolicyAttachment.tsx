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

export const AwsNetworkmanagerCoreNetworkPolicyAttachmentInputSchema =
  TfMetaSchema.extend({
    core_network_id: resolvableValue(z.string()),
    policy_document: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        update: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsNetworkmanagerCoreNetworkPolicyAttachmentOutputSchema = z
  .object({
    state: z.string().optional(),
  })

export type AwsNetworkmanagerCoreNetworkPolicyAttachmentInputProps =
  & z.input<typeof AwsNetworkmanagerCoreNetworkPolicyAttachmentInputSchema>
  & NodeProps

export type AwsNetworkmanagerCoreNetworkPolicyAttachmentOutputProps =
  & z.output<typeof AwsNetworkmanagerCoreNetworkPolicyAttachmentOutputSchema>
  & z.output<typeof AwsNetworkmanagerCoreNetworkPolicyAttachmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/networkmanager_core_network_policy_attachment

export function AwsNetworkmanagerCoreNetworkPolicyAttachment(
  props: Partial<AwsNetworkmanagerCoreNetworkPolicyAttachmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_core_network_policy_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsNetworkmanagerCoreNetworkPolicyAttachmentInputSchema}
      _outputSchema={AwsNetworkmanagerCoreNetworkPolicyAttachmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerCoreNetworkPolicyAttachment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsNetworkmanagerCoreNetworkPolicyAttachmentOutputProps>(
    AwsNetworkmanagerCoreNetworkPolicyAttachment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkmanagerCoreNetworkPolicyAttachments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsNetworkmanagerCoreNetworkPolicyAttachmentOutputProps>(
    AwsNetworkmanagerCoreNetworkPolicyAttachment,
    idFilter,
    baseNode,
    optional,
  )
