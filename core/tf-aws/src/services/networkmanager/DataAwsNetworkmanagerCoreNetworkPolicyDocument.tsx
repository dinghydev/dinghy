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
  core_network_configuration: resolvableValue(
    z.object({
      asn_ranges: z.string().array(),
      dns_support: z.boolean().optional(),
      inside_cidr_blocks: z.string().array().optional(),
      security_group_referencing_support: z.boolean().optional(),
      vpn_ecmp_support: z.boolean().optional(),
      edge_locations: z.object({
        asn: z.string().optional(),
        inside_cidr_blocks: z.string().array().optional(),
        location: z.string(),
      }).array(),
    }).array(),
  ),
  segments: resolvableValue(
    z.object({
      allow_filter: z.string().array().optional(),
      deny_filter: z.string().array().optional(),
      description: z.string().optional(),
      edge_locations: z.string().array().optional(),
      isolate_attachments: z.boolean().optional(),
      name: z.string(),
      require_attachment_acceptance: z.boolean().optional(),
    }).array(),
  ),
  attachment_policies: resolvableValue(
    z.object({
      condition_logic: z.string().optional(),
      description: z.string().optional(),
      rule_number: z.number(),
      action: z.object({
        add_to_network_function_group: z.string().optional(),
        association_method: z.string().optional(),
        require_acceptance: z.boolean().optional(),
        segment: z.string().optional(),
        tag_value_of_key: z.string().optional(),
      }),
      conditions: z.object({
        key: z.string().optional(),
        operator: z.string().optional(),
        type: z.string(),
        value: z.string().optional(),
      }).array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  network_function_groups: resolvableValue(
    z.object({
      description: z.string().optional(),
      name: z.string(),
      require_attachment_acceptance: z.boolean(),
    }).array().optional(),
  ),
  segment_actions: resolvableValue(
    z.object({
      action: z.string(),
      description: z.string().optional(),
      destination_cidr_blocks: z.string().array().optional(),
      destinations: z.string().array().optional(),
      mode: z.string().optional(),
      segment: z.string(),
      share_with: z.string().array().optional(),
      share_with_except: z.string().array().optional(),
      via: z.object({
        network_function_groups: z.string().array().optional(),
        with_edge_override: z.object({
          edge_sets: z.string().array().array().optional(),
          use_edge: z.string().optional(),
          use_edge_location: z.string().optional(),
        }).array().optional(),
      }).optional(),
      when_sent_to: z.object({
        segments: z.string().array().optional(),
      }).optional(),
    }).array().optional(),
  ),
  version: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  json: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/networkmanager_core_network_policy_document

export function DataAwsNetworkmanagerCoreNetworkPolicyDocument(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkmanager_core_network_policy_document'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsNetworkmanagerCoreNetworkPolicyDocument = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsNetworkmanagerCoreNetworkPolicyDocument,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsNetworkmanagerCoreNetworkPolicyDocuments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsNetworkmanagerCoreNetworkPolicyDocument,
    idFilter,
    baseNode,
    optional,
  )
