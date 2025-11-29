import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/wafv2_web_acl

export const InputSchema = z.object({
  lock_token: resolvableValue(z.string()),
  scope: resolvableValue(z.string()),
  visibility_config: resolvableValue(z.object({
    cloudwatch_metrics_enabled: z.boolean(),
    metric_name: z.string(),
    sampled_requests_enabled: z.boolean(),
  })),
  association_config: resolvableValue(
    z.object({
      request_body: z.object({
        api_gateway: z.object({
          default_size_inspection_limit: z.string(),
        }).optional(),
        app_runner_service: z.object({
          default_size_inspection_limit: z.string(),
        }).optional(),
        cloudfront: z.object({
          default_size_inspection_limit: z.string(),
        }).optional(),
        cognito_user_pool: z.object({
          default_size_inspection_limit: z.string(),
        }).optional(),
        verified_access_instance: z.object({
          default_size_inspection_limit: z.string(),
        }).optional(),
      }).optional(),
    }).optional(),
  ),
  captcha_config: resolvableValue(
    z.object({
      immunity_time_property: z.object({
        immunity_time: z.number().optional(),
      }).optional(),
    }).optional(),
  ),
  challenge_config: resolvableValue(
    z.object({
      immunity_time_property: z.object({
        immunity_time: z.number().optional(),
      }).optional(),
    }).optional(),
  ),
  custom_response_body: resolvableValue(
    z.object({
      content: z.string(),
      content_type: z.string(),
      key: z.string(),
    }).array().optional(),
  ),
  data_protection_config: resolvableValue(
    z.object({
      data_protection: z.object({
        action: z.string(),
        exclude_rate_based_details: z.boolean().optional(),
        exclude_rule_match_details: z.boolean().optional(),
      }).optional(),
    }).optional(),
  ),
  default_action: resolvableValue(z.object({
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
      }).optional(),
    }).optional(),
  })),
  description: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  rule: resolvableValue(
    z.object({
      name: z.string(),
      priority: z.number(),
    }).array().optional(),
  ),
  rule_json: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  token_domains: resolvableValue(z.string().array().optional()),
})

export const OutputSchema = z.object({
  application_integration_url: z.string().optional(),
  arn: z.string().optional(),
  capacity: z.number().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsWafv2WebAcl(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafv2_web_acl'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsWafv2WebAcl = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsWafv2WebAcl, node, id)

export const useAwsWafv2WebAcls = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsWafv2WebAcl, node, id)
