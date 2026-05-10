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
  priority: resolvableValue(z.number()),
  rule_name: resolvableValue(z.string()),
  web_acl_arn: resolvableValue(z.string()),
  managed_rule_group: resolvableValue(
    z.object({
      name: z.string(),
      vendor_name: z.string(),
      version: z.string().optional(),
      managed_rule_group_configs: z.object({
        aws_managed_rules_acfp_rule_set: z.object({
          creation_path: z.string(),
          enable_regex_in_path: z.boolean().optional(),
          registration_page_path: z.string(),
          request_inspection: z.object({
            payload_type: z.string(),
            address_fields: z.object({
              identifiers: z.string().array(),
            }).array().optional(),
            email_field: z.object({
              identifier: z.string(),
            }).array().optional(),
            password_field: z.object({
              identifier: z.string(),
            }).array().optional(),
            phone_number_fields: z.object({
              identifiers: z.string().array(),
            }).array().optional(),
            username_field: z.object({
              identifier: z.string(),
            }).array().optional(),
          }).array().optional(),
          response_inspection: z.object({
            body_contains: z.object({
              failure_strings: z.string().array(),
              success_strings: z.string().array(),
            }).array().optional(),
            header: z.object({
              failure_values: z.string().array(),
              name: z.string(),
              success_values: z.string().array(),
            }).array().optional(),
            json: z.object({
              failure_values: z.string().array(),
              identifier: z.string(),
              success_values: z.string().array(),
            }).array().optional(),
            status_code: z.object({
              failure_codes: z.number().array(),
              success_codes: z.number().array(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        aws_managed_rules_anti_ddos_rule_set: z.object({
          sensitivity_to_block: z.string().optional(),
          client_side_action_config: z.object({
            challenge: z.object({
              sensitivity: z.string().optional(),
              usage_of_action: z.string(),
              exempt_uri_regular_expression: z.object({
                regex_string: z.string().optional(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        aws_managed_rules_atp_rule_set: z.object({
          enable_regex_in_path: z.boolean().optional(),
          login_path: z.string(),
          request_inspection: z.object({
            payload_type: z.string(),
            password_field: z.object({
              identifier: z.string(),
            }).array().optional(),
            username_field: z.object({
              identifier: z.string(),
            }).array().optional(),
          }).array().optional(),
          response_inspection: z.object({
            body_contains: z.object({
              failure_strings: z.string().array(),
              success_strings: z.string().array(),
            }).array().optional(),
            header: z.object({
              failure_values: z.string().array(),
              name: z.string(),
              success_values: z.string().array(),
            }).array().optional(),
            json: z.object({
              failure_values: z.string().array(),
              identifier: z.string(),
              success_values: z.string().array(),
            }).array().optional(),
            status_code: z.object({
              failure_codes: z.number().array(),
              success_codes: z.number().array(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
        aws_managed_rules_bot_control_rule_set: z.object({
          enable_machine_learning: z.boolean().optional(),
          inspection_level: z.string(),
        }).array().optional(),
      }).array().optional(),
      rule_action_override: z.object({
        name: z.string(),
        action_to_use: z.object({
          allow: z.object({
            custom_request_handling: z.object({
              insert_header: z.object({
                name: z.string(),
                value: z.string(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          block: z.object({
            custom_response: z.object({
              custom_response_body_key: z.string().optional(),
              response_code: z.number(),
              response_header: z.object({
                name: z.string(),
                value: z.string(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          captcha: z.object({
            custom_request_handling: z.object({
              insert_header: z.object({
                name: z.string(),
                value: z.string(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          challenge: z.object({
            custom_request_handling: z.object({
              insert_header: z.object({
                name: z.string(),
                value: z.string(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          count: z.object({
            custom_request_handling: z.object({
              insert_header: z.object({
                name: z.string(),
                value: z.string(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  override_action: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  rule_group_reference: resolvableValue(
    z.object({
      arn: z.string(),
      rule_action_override: z.object({
        name: z.string(),
        action_to_use: z.object({
          allow: z.object({
            custom_request_handling: z.object({
              insert_header: z.object({
                name: z.string(),
                value: z.string(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          block: z.object({
            custom_response: z.object({
              custom_response_body_key: z.string().optional(),
              response_code: z.number(),
              response_header: z.object({
                name: z.string(),
                value: z.string(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          captcha: z.object({
            custom_request_handling: z.object({
              insert_header: z.object({
                name: z.string(),
                value: z.string(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          challenge: z.object({
            custom_request_handling: z.object({
              insert_header: z.object({
                name: z.string(),
                value: z.string(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
          count: z.object({
            custom_request_handling: z.object({
              insert_header: z.object({
                name: z.string(),
                value: z.string(),
              }).array().optional(),
            }).array().optional(),
          }).array().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  visibility_config: resolvableValue(
    z.object({
      cloudwatch_metrics_enabled: z.boolean(),
      metric_name: z.string(),
      sampled_requests_enabled: z.boolean(),
    }).array().optional(),
  ),
})

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/wafv2_web_acl_rule_group_association

export function AwsWafv2WebAclRuleGroupAssociation(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafv2_web_acl_rule_group_association'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWafv2WebAclRuleGroupAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsWafv2WebAclRuleGroupAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafv2WebAclRuleGroupAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsWafv2WebAclRuleGroupAssociation,
    idFilter,
    baseNode,
    optional,
  )
