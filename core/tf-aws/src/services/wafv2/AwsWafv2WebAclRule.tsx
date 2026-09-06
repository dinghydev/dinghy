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
import { WafStatementSchema } from './WafStatementSchema.ts'

export const AwsWafv2WebAclRuleInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  priority: resolvableValue(z.number()),
  web_acl_arn: resolvableValue(z.string()),
  action: resolvableValue(
    z.object({
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
  ),
  captcha_config: resolvableValue(
    z.object({
      immunity_time_property: z.object({
        immunity_time: z.number().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  challenge_config: resolvableValue(
    z.object({
      immunity_time_property: z.object({
        immunity_time: z.number().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  override_action: resolvableValue(
    z.object({
      count: z.object({}).array().optional(),
      none: z.object({}).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  rule_label: resolvableValue(
    z.object({
      name: z.string(),
    }).array().optional(),
  ),
  statement: resolvableValue(WafStatementSchema.array().optional()),
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

export const AwsWafv2WebAclRuleOutputSchema = z.object({})

export const AwsWafv2WebAclRuleImportSchema = z.object({
  name: resolvableValue(z.string()),
  web_acl_arn: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsWafv2WebAclRuleInputProps =
  & z.input<typeof AwsWafv2WebAclRuleInputSchema>
  & z.input<typeof AwsWafv2WebAclRuleImportSchema>
  & NodeProps

export type AwsWafv2WebAclRuleOutputProps =
  & z.output<typeof AwsWafv2WebAclRuleOutputSchema>
  & z.output<typeof AwsWafv2WebAclRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/wafv2_web_acl_rule

export function AwsWafv2WebAclRule(
  props: Partial<AwsWafv2WebAclRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafv2_web_acl_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafv2WebAclRuleInputSchema}
      _outputSchema={AwsWafv2WebAclRuleOutputSchema}
      _importSchema={AwsWafv2WebAclRuleImportSchema}
      {...props}
    />
  )
}

export const useAwsWafv2WebAclRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafv2WebAclRuleOutputProps>(
    AwsWafv2WebAclRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafv2WebAclRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafv2WebAclRuleOutputProps>(
    AwsWafv2WebAclRule,
    idFilter,
    baseNode,
    optional,
  )
