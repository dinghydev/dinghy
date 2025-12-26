import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsBudgetsBudget } from './AwsBudgetsBudget.tsx'

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  auto_adjust_data: z.object({
    auto_adjust_type: z.string(),
    historical_options: z.object({
      budget_adjustment_period: z.number(),
      lookback_available_periods: z.number(),
    }).array(),
    last_auto_adjust_time: z.string(),
  }).array().optional(),
  billing_view_arn: z.string().optional(),
  budget_exceeded: z.boolean().optional(),
  budget_limit: z.object({
    amount: z.string(),
    unit: z.string(),
  }).array().optional(),
  budget_type: z.string().optional(),
  calculated_spend: z.object({
    actual_spend: z.object({
      amount: z.string(),
      unit: z.string(),
    }).array(),
  }).array().optional(),
  cost_filter: z.set(z.object({
    name: z.string(),
    values: z.string().array(),
  })).optional(),
  cost_types: z.object({
    include_credit: z.boolean(),
    include_discount: z.boolean(),
    include_other_subscription: z.boolean(),
    include_recurring: z.boolean(),
    include_refund: z.boolean(),
    include_subscription: z.boolean(),
    include_support: z.boolean(),
    include_tax: z.boolean(),
    include_upfront: z.boolean(),
    use_amortized: z.boolean(),
    use_blended: z.boolean(),
  }).array().optional(),
  notification: z.set(z.object({
    comparison_operator: z.string(),
    notification_type: z.string(),
    subscriber_email_addresses: z.set(z.string()),
    subscriber_sns_topic_arns: z.set(z.string()),
    threshold: z.number(),
    threshold_type: z.string(),
  })).optional(),
  planned_limit: z.set(z.object({
    amount: z.string(),
    start_time: z.string(),
    unit: z.string(),
  })).optional(),
  tags: z.record(z.string(), z.string()).optional(),
  time_period_end: z.string().optional(),
  time_period_start: z.string().optional(),
  time_unit: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/budgets_budget

export function DataAwsBudgetsBudget(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsBudgetsBudget
      _type='aws_budgets_budget'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsBudgetsBudget = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(DataAwsBudgetsBudget, idFilter, baseNode, optional)

export const useDataAwsBudgetsBudgets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(DataAwsBudgetsBudget, idFilter, baseNode, optional)
