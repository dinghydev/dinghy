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
  budget_type: resolvableValue(z.string()),
  time_unit: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  auto_adjust_data: resolvableValue(
    z.object({
      auto_adjust_type: z.string(),
      last_auto_adjust_time: z.string().optional(),
      historical_options: z.object({
        budget_adjustment_period: z.number(),
        lookback_available_periods: z.number().optional(),
      }).optional(),
    }).optional(),
  ),
  billing_view_arn: resolvableValue(z.string().optional()),
  cost_filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  cost_types: resolvableValue(
    z.object({
      include_credit: z.boolean().optional(),
      include_discount: z.boolean().optional(),
      include_other_subscription: z.boolean().optional(),
      include_recurring: z.boolean().optional(),
      include_refund: z.boolean().optional(),
      include_subscription: z.boolean().optional(),
      include_support: z.boolean().optional(),
      include_tax: z.boolean().optional(),
      include_upfront: z.boolean().optional(),
      use_amortized: z.boolean().optional(),
      use_blended: z.boolean().optional(),
    }).optional(),
  ),
  limit_amount: resolvableValue(z.string().optional()),
  limit_unit: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  notification: resolvableValue(
    z.object({
      comparison_operator: z.string(),
      notification_type: z.string(),
      subscriber_email_addresses: z.string().array().optional(),
      subscriber_sns_topic_arns: z.string().array().optional(),
      threshold: z.number(),
      threshold_type: z.string(),
    }).array().optional(),
  ),
  planned_limit: resolvableValue(
    z.object({
      amount: z.string(),
      start_time: z.string(),
      unit: z.string(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  time_period_end: resolvableValue(z.string().optional()),
  time_period_start: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/budgets_budget

export function AwsBudgetsBudget(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_budgets_budget'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBudgetsBudget = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsBudgetsBudget, idFilter, baseNode, optional)

export const useAwsBudgetsBudgets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsBudgetsBudget, idFilter, baseNode, optional)
