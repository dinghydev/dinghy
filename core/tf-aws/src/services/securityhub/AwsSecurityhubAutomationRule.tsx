import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/securityhub_automation_rule

export const InputSchema = z.object({
  description: resolvableValue(z.string()),
  rule_name: resolvableValue(z.string()),
  rule_order: resolvableValue(z.number()),
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  actions: resolvableValue(
    z.object({
      type: z.string().optional(),
    }).array().optional(),
  ),
  criteria: resolvableValue(
    z.object({
      aws_account_id: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      aws_account_name: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      company_name: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      compliance_associated_standards_id: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      compliance_security_control_id: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      compliance_status: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      confidence: z.object({
        eq: z.number().optional(),
        gt: z.number().optional(),
        gte: z.number().optional(),
        lt: z.number().optional(),
        lte: z.number().optional(),
      }).array().optional(),
      created_at: z.object({
        end: z.string().optional(),
        start: z.string().optional(),
      }).array().optional(),
      criticality: z.object({
        eq: z.number().optional(),
        gt: z.number().optional(),
        gte: z.number().optional(),
        lt: z.number().optional(),
        lte: z.number().optional(),
      }).array().optional(),
      description: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      first_observed_at: z.object({
        end: z.string().optional(),
        start: z.string().optional(),
      }).array().optional(),
      generator_id: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      id: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      last_observed_at: z.object({
        end: z.string().optional(),
        start: z.string().optional(),
      }).array().optional(),
      note_text: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      note_updated_at: z.object({
        end: z.string().optional(),
        start: z.string().optional(),
      }).array().optional(),
      note_updated_by: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      product_arn: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      product_name: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      record_state: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      related_findings_id: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      related_findings_product_arn: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      resource_application_arn: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      resource_application_name: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      resource_details_other: z.object({
        comparison: z.string(),
        key: z.string(),
        value: z.string(),
      }).array().optional(),
      resource_id: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      resource_partition: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      resource_region: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      resource_tags: z.object({
        comparison: z.string(),
        key: z.string(),
        value: z.string(),
      }).array().optional(),
      resource_type: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      severity_label: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      source_url: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      title: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      type: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      updated_at: z.object({
        end: z.string().optional(),
        start: z.string().optional(),
      }).array().optional(),
      user_defined_fields: z.object({
        comparison: z.string(),
        key: z.string(),
        value: z.string(),
      }).array().optional(),
      verification_state: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
      workflow_status: z.object({
        comparison: z.string(),
        value: z.string(),
      }).array().optional(),
    }).optional(),
  ),
  is_terminal: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  rule_status: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsSecurityhubAutomationRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_securityhub_automation_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSecurityhubAutomationRule = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsSecurityhubAutomationRule, node, id)

export const useAwsSecurityhubAutomationRules = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsSecurityhubAutomationRule, node, id)
