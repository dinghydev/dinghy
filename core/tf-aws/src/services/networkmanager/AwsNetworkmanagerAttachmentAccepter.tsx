import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/networkmanager_attachment_accepter

export const InputSchema = z.object({
  attachment_id: resolvableValue(z.string()),
  attachment_type: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  attachment_policy_rule_number: z.number().optional(),
  core_network_arn: z.string().optional(),
  core_network_id: z.string().optional(),
  edge_location: z.string().optional(),
  edge_locations: z.string().array().optional(),
  owner_account_id: z.string().optional(),
  resource_arn: z.string().optional(),
  segment_name: z.string().optional(),
  state: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsNetworkmanagerAttachmentAccepter(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_attachment_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerAttachmentAccepter = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsNetworkmanagerAttachmentAccepter, node, id)

export const useAwsNetworkmanagerAttachmentAccepters = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsNetworkmanagerAttachmentAccepter, node, id)
