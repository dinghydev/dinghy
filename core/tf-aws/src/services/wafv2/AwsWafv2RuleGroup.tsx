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

export const AwsWafv2RuleGroupInputSchema = TfMetaSchema.extend({
  capacity: resolvableValue(z.number()),
  scope: resolvableValue(z.string()),
  visibility_config: resolvableValue(z.object({
    cloudwatch_metrics_enabled: z.boolean(),
    metric_name: z.string(),
    sampled_requests_enabled: z.boolean(),
  })),
  custom_response_body: resolvableValue(
    z.object({
      content: z.string(),
      content_type: z.string(),
      key: z.string(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  rule: resolvableValue(
    z.object({
      name: z.string(),
      priority: z.number(),
      action: z.object({
        allow: z.object({
          custom_request_handling: z.object({
            insert_header: z.object({
              name: z.string(),
              value: z.string(),
            }).array(),
          }).optional(),
        }).optional(),
        block: z.object({
          custom_response: z.object({
            custom_response_body_key: z.string().optional(),
            response_code: z.number(),
            response_header: z.object({
              name: z.string(),
              value: z.string(),
            }).array().optional(),
          }).optional(),
        }).optional(),
        captcha: z.object({
          custom_request_handling: z.object({
            insert_header: z.object({
              name: z.string(),
              value: z.string(),
            }).array(),
          }).optional(),
        }).optional(),
        challenge: z.object({
          custom_request_handling: z.object({
            insert_header: z.object({
              name: z.string(),
              value: z.string(),
            }).array(),
          }).optional(),
        }).optional(),
        count: z.object({
          custom_request_handling: z.object({
            insert_header: z.object({
              name: z.string(),
              value: z.string(),
            }).array(),
          }).optional(),
        }).optional(),
      }),
      captcha_config: z.object({
        immunity_time_property: z.object({
          immunity_time: z.number().optional(),
        }).optional(),
      }).optional(),
      rule_label: z.object({
        name: z.string(),
      }).array().optional(),
      statement: WafStatementSchema,
      visibility_config: z.object({
        cloudwatch_metrics_enabled: z.boolean(),
        metric_name: z.string(),
        sampled_requests_enabled: z.boolean(),
      }),
    }).array().optional(),
  ),
  rules_json: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsWafv2RuleGroupOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  lock_token: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsWafv2RuleGroupInputProps =
  & z.input<typeof AwsWafv2RuleGroupInputSchema>
  & NodeProps

export type AwsWafv2RuleGroupOutputProps =
  & z.output<typeof AwsWafv2RuleGroupOutputSchema>
  & z.output<typeof AwsWafv2RuleGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/wafv2_rule_group

export function AwsWafv2RuleGroup(props: Partial<AwsWafv2RuleGroupInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafv2_rule_group'
      _category='resource'
      _title={_title}
      _inputSchema={AwsWafv2RuleGroupInputSchema}
      _outputSchema={AwsWafv2RuleGroupOutputSchema}
      {...props}
    />
  )
}

export const useAwsWafv2RuleGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsWafv2RuleGroupOutputProps>(
    AwsWafv2RuleGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsWafv2RuleGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsWafv2RuleGroupOutputProps>(
    AwsWafv2RuleGroup,
    idFilter,
    baseNode,
    optional,
  )
