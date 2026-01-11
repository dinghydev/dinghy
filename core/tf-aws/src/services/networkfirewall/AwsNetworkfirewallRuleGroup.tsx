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
  capacity: resolvableValue(z.number()),
  name: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  encryption_configuration: resolvableValue(
    z.object({
      key_id: z.string().optional(),
      type: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  rule_group: resolvableValue(
    z.object({
      reference_sets: z.object({
        ip_set_references: z.object({
          key: z.string(),
          ip_set_reference: z.object({
            reference_arn: z.string(),
          }).array(),
        }).array().optional(),
      }).optional(),
      rule_variables: z.object({
        ip_sets: z.object({
          key: z.string(),
          ip_set: z.object({
            definition: z.string().array(),
          }),
        }).array().optional(),
        port_sets: z.object({
          key: z.string(),
          port_set: z.object({
            definition: z.string().array(),
          }),
        }).array().optional(),
      }).optional(),
      rules_source: z.object({
        rules_string: z.string().optional(),
        rules_source_list: z.object({
          generated_rules_type: z.string(),
          target_types: z.string().array(),
          targets: z.string().array(),
        }).optional(),
        stateful_rule: z.object({
          action: z.string(),
          header: z.object({
            destination: z.string(),
            destination_port: z.string(),
            direction: z.string(),
            protocol: z.string(),
            source: z.string(),
            source_port: z.string(),
          }),
          rule_option: z.object({
            keyword: z.string(),
            settings: z.string().array().optional(),
          }).array(),
        }).array().optional(),
        stateless_rules_and_custom_actions: z.object({
          custom_action: z.object({
            action_name: z.string(),
            action_definition: z.object({
              publish_metric_action: z.object({
                dimension: z.object({
                  value: z.string(),
                }).array(),
              }),
            }),
          }).array().optional(),
          stateless_rule: z.object({
            priority: z.number(),
            rule_definition: z.object({
              actions: z.string().array(),
              match_attributes: z.object({
                protocols: z.number().array().optional(),
                destination: z.object({
                  address_definition: z.string(),
                }).array().optional(),
                destination_port: z.object({
                  from_port: z.number(),
                  to_port: z.number().optional(),
                }).array().optional(),
                source: z.object({
                  address_definition: z.string(),
                }).array().optional(),
                source_port: z.object({
                  from_port: z.number(),
                  to_port: z.number().optional(),
                }).array().optional(),
                tcp_flag: z.object({
                  flags: z.string().array(),
                  masks: z.string().array().optional(),
                }).array().optional(),
              }),
            }),
          }).array(),
        }).optional(),
      }),
      stateful_rule_options: z.object({
        rule_order: z.string(),
      }).optional(),
    }).optional(),
  ),
  rules: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  update_token: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkfirewall_rule_group

export function AwsNetworkfirewallRuleGroup(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_networkfirewall_rule_group'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsNetworkfirewallRuleGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsNetworkfirewallRuleGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsNetworkfirewallRuleGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsNetworkfirewallRuleGroup,
    idFilter,
    baseNode,
    optional,
  )
