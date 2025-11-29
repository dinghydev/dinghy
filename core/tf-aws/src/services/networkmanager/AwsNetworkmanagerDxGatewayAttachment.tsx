import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/networkmanager_dx_gateway_attachment

export const InputSchema = z.object({
  core_network_id: resolvableValue(z.string()),
  direct_connect_gateway_arn: resolvableValue(z.string()),
  edge_locations: resolvableValue(z.string().array()),
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
  id: z.string().optional(),
  owner_account_id: z.string().optional(),
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

export function AwsNetworkmanagerDxGatewayAttachment(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_dx_gateway_attachment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkmanagerDxGatewayAttachment = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(AwsNetworkmanagerDxGatewayAttachment, node, id)

export const useAwsNetworkmanagerDxGatewayAttachments = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(AwsNetworkmanagerDxGatewayAttachment, node, id)
