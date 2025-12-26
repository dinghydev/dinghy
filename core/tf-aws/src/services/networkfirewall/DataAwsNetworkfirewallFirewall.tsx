import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsNetworkfirewallFirewall } from './AwsNetworkfirewallFirewall.tsx'

export const InputSchema = z.object({
  arn: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  availability_zone_change_protection: z.boolean().optional(),
  availability_zone_mapping: z.set(z.object({
    availability_zone_id: z.string(),
  })).optional(),
  delete_protection: z.boolean().optional(),
  description: z.string().optional(),
  enabled_analysis_types: z.set(z.string()).optional(),
  encryption_configuration: z.set(z.object({
    key_id: z.string(),
    type: z.string(),
  })).optional(),
  firewall_policy_arn: z.string().optional(),
  firewall_policy_change_protection: z.boolean().optional(),
  firewall_status: z.object({
    capacity_usage_summary: z.set(z.object({
      cidrs: z.set(z.object({
        available_cidr_count: z.number(),
        ip_set_references: z.set(z.object({
          resolved_cidr_count: z.number(),
        })),
        utilized_cidr_count: z.number(),
      })),
    })),
    configuration_sync_state_summary: z.string(),
    status: z.string(),
    sync_states: z.set(z.object({
      attachment: z.object({
        endpoint_id: z.string(),
        status: z.string(),
        status_message: z.string(),
        subnet_id: z.string(),
      }).array(),
      availability_zone: z.string(),
    })),
    transit_gateway_attachment_sync_states: z.object({
      attachment_id: z.string(),
      status_message: z.string(),
      transit_gateway_attachment_status: z.string(),
    }).array(),
  }).array().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  subnet_change_protection: z.boolean().optional(),
  subnet_mapping: z.set(z.object({
    subnet_id: z.string(),
  })).optional(),
  tags: z.record(z.string(), z.string()).optional(),
  transit_gateway_id: z.string().optional(),
  transit_gateway_owner_account_id: z.string().optional(),
  update_token: z.string().optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/networkfirewall_firewall

export function DataAwsNetworkfirewallFirewall(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsNetworkfirewallFirewall
      _type='aws_networkfirewall_firewall'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsNetworkfirewallFirewall = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsNetworkfirewallFirewall,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsNetworkfirewallFirewalls = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsNetworkfirewallFirewall,
    idFilter,
    baseNode,
    optional,
  )
