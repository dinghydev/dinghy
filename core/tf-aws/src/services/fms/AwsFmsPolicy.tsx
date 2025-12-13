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

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  exclude_resource_tags: resolvableValue(z.boolean()),
  name: resolvableValue(z.string()),
  security_service_policy_data: resolvableValue(z.object({
    managed_service_data: z.string().optional(),
    type: z.string(),
    policy_option: z.object({
      network_acl_common_policy: z.object({
        network_acl_entry_set: z.object({
          force_remediate_for_first_entries: z.boolean(),
          force_remediate_for_last_entries: z.boolean(),
          first_entry: z.object({
            cidr_block: z.string().optional(),
            egress: z.boolean(),
            ipv6_cidr_block: z.string().optional(),
            protocol: z.string(),
            rule_action: z.string(),
            icmp_type_code: z.object({
              code: z.number().optional(),
              type: z.number().optional(),
            }).array().optional(),
            port_range: z.object({
              from: z.number().optional(),
              to: z.number().optional(),
            }).array().optional(),
          }).array().optional(),
          last_entry: z.object({
            cidr_block: z.string().optional(),
            egress: z.boolean(),
            ipv6_cidr_block: z.string().optional(),
            protocol: z.string(),
            rule_action: z.string(),
            icmp_type_code: z.object({
              code: z.number().optional(),
              type: z.number().optional(),
            }).array().optional(),
            port_range: z.object({
              from: z.number().optional(),
              to: z.number().optional(),
            }).array().optional(),
          }).array().optional(),
        }).optional(),
      }).optional(),
      network_firewall_policy: z.object({
        firewall_deployment_model: z.string().optional(),
      }).optional(),
      third_party_firewall_policy: z.object({
        firewall_deployment_model: z.string().optional(),
      }).optional(),
    }).optional(),
  })),
  delete_all_policy_resources: resolvableValue(z.boolean().optional()),
  delete_unused_fm_managed_resources: resolvableValue(z.boolean().optional()),
  description: resolvableValue(z.string().optional()),
  exclude_map: resolvableValue(
    z.object({
      account: z.string().array().optional(),
      orgunit: z.string().array().optional(),
    }).optional(),
  ),
  include_map: resolvableValue(
    z.object({
      account: z.string().array().optional(),
      orgunit: z.string().array().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  remediation_enabled: resolvableValue(z.boolean().optional()),
  resource_set_ids: resolvableValue(z.string().array().optional()),
  resource_tag_logical_operator: resolvableValue(z.string().optional()),
  resource_tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  resource_type: resolvableValue(z.string().optional()),
  resource_type_list: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
  policy_update_token: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/fms_policy

export function AwsFmsPolicy(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_fms_policy'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsFmsPolicy = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsFmsPolicy, idFilter, baseNode)

export const useAwsFmsPolicys = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsFmsPolicy, idFilter, baseNode)
