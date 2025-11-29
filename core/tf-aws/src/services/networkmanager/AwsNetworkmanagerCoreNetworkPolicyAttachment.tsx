import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/networkmanager_core_network_policy_attachment

export const InputSchema = z.object({
  core_network_id: resolvableValue(z.string()),
  policy_document: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  state: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsNetworkmanagerCoreNetworkPolicyAttachment(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_core_network_policy_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerCoreNetworkPolicyAttachment = (
  node?: any,
  id?: string,
) =>
  useTypedNode<OutputProps>(
    AwsNetworkmanagerCoreNetworkPolicyAttachment,
    node,
    id,
  )

export const useAwsNetworkmanagerCoreNetworkPolicyAttachments = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(
    AwsNetworkmanagerCoreNetworkPolicyAttachment,
    node,
    id,
  )
