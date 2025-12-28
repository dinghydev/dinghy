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
  priority: resolvableValue(z.number()),
  rule_name: resolvableValue(z.string()),
  web_acl_arn: resolvableValue(z.string()),
  managed_rule_group: resolvableValue(
    z.object({
      name: z.string(),
      vendor_name: z.string(),
      version: z.string().optional(),
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/wafv2_web_acl_rule_group_association

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
