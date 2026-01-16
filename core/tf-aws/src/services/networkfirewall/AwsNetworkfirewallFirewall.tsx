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

export const InputSchema = TfMetaSchema.extend({
  firewall_policy_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  availability_zone_change_protection: resolvableValue(z.boolean().optional()),
  availability_zone_mapping: resolvableValue(
    z.object({
      availability_zone_id: z.string(),
    }).array().optional(),
  ),
  delete_protection: resolvableValue(z.boolean().optional()),
  description: resolvableValue(z.string().optional()),
  enabled_analysis_types: resolvableValue(z.string().array().optional()),
  encryption_configuration: resolvableValue(
    z.object({
      key_id: z.string().optional(),
      type: z.string(),
    }).optional(),
  ),
  firewall_policy_change_protection: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  subnet_change_protection: resolvableValue(z.boolean().optional()),
  subnet_mapping: resolvableValue(
    z.object({
      ip_address_type: z.string().optional(),
      subnet_id: z.string(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  transit_gateway_id: resolvableValue(z.string().optional()),
  vpc_id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  firewall_status: z.object({
    sync_states: z.set(z.object({
      attachment: z.object({
        endpoint_id: z.string(),
        subnet_id: z.string(),
      }).array(),
      availability_zone: z.string(),
    })),
    transit_gateway_attachment_sync_states: z.object({
      attachment_id: z.string(),
    }).array(),
  }).array().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  transit_gateway_owner_account_id: z.string().optional(),
  update_token: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkfirewall_firewall

export function AwsNetworkfirewallFirewall(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkfirewall_firewall'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkfirewallFirewall = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsNetworkfirewallFirewall,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkfirewallFirewalls = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsNetworkfirewallFirewall,
    idFilter,
    baseNode,
    optional,
  )
