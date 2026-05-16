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

export const DataAwsWafv2ManagedRuleGroupInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  scope: resolvableValue(z.string()),
  vendor_name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  version_name: resolvableValue(z.string().optional()),
})

export const DataAwsWafv2ManagedRuleGroupOutputSchema = z.object({
  available_labels: z.object({
    name: z.string(),
  }).array().optional(),
  capacity: z.number().optional(),
  consumed_labels: z.object({
    name: z.string(),
  }).array().optional(),
  label_namespace: z.string().optional(),
  rules: z.object({
    action: z.object({
      allow: z.object({
        custom_request_handling: z.object({
          insert_header: z.object({
            name: z.string(),
            value: z.string(),
          }).array(),
        }).array(),
      }).array(),
      block: z.object({
        custom_response: z.object({
          custom_response_body_key: z.string(),
          response_code: z.number(),
          response_header: z.object({
            name: z.string(),
            value: z.string(),
          }).array(),
        }).array(),
      }).array(),
      captcha: z.object({
        custom_request_handling: z.object({
          insert_header: z.object({
            name: z.string(),
            value: z.string(),
          }).array(),
        }).array(),
      }).array(),
      challenge: z.object({
        custom_request_handling: z.object({
          insert_header: z.object({
            name: z.string(),
            value: z.string(),
          }).array(),
        }).array(),
      }).array(),
      count: z.object({
        custom_request_handling: z.object({
          insert_header: z.object({
            name: z.string(),
            value: z.string(),
          }).array(),
        }).array(),
      }).array(),
    }).array(),
    name: z.string(),
  }).array().optional(),
  sns_topic_arn: z.string().optional(),
})

export type DataAwsWafv2ManagedRuleGroupInputProps =
  & z.input<typeof DataAwsWafv2ManagedRuleGroupInputSchema>
  & NodeProps

export type DataAwsWafv2ManagedRuleGroupOutputProps =
  & z.output<typeof DataAwsWafv2ManagedRuleGroupOutputSchema>
  & z.output<typeof DataAwsWafv2ManagedRuleGroupInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/wafv2_managed_rule_group

export function DataAwsWafv2ManagedRuleGroup(
  props: Partial<DataAwsWafv2ManagedRuleGroupInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_wafv2_managed_rule_group'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsWafv2ManagedRuleGroupInputSchema}
      _outputSchema={DataAwsWafv2ManagedRuleGroupOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsWafv2ManagedRuleGroup = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsWafv2ManagedRuleGroupOutputProps>(
    DataAwsWafv2ManagedRuleGroup,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsWafv2ManagedRuleGroups = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsWafv2ManagedRuleGroupOutputProps>(
    DataAwsWafv2ManagedRuleGroup,
    idFilter,
    baseNode,
    optional,
  )
