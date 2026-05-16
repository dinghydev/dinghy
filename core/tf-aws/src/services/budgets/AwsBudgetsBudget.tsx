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

export const AwsBudgetsBudgetInputSchema = TfMetaSchema.extend({
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
  filter_expression: resolvableValue(
    z.object({
      and: z.object({
        and: z.object({
          cost_categories: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
          dimensions: z.object({
            key: z.string(),
            match_options: z.string().array().optional(),
            values: z.string().array(),
          }).optional(),
          tags: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
        }).array().optional(),
        cost_categories: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
        dimensions: z.object({
          key: z.string(),
          match_options: z.string().array().optional(),
          values: z.string().array(),
        }).optional(),
        not: z.object({
          cost_categories: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
          dimensions: z.object({
            key: z.string(),
            match_options: z.string().array().optional(),
            values: z.string().array(),
          }).optional(),
          tags: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
        }).optional(),
        or: z.object({
          cost_categories: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
          dimensions: z.object({
            key: z.string(),
            match_options: z.string().array().optional(),
            values: z.string().array(),
          }).optional(),
          tags: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
        }).array().optional(),
        tags: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
      }).array().optional(),
      cost_categories: z.object({
        key: z.string().optional(),
        match_options: z.string().array().optional(),
        values: z.string().array().optional(),
      }).optional(),
      dimensions: z.object({
        key: z.string(),
        match_options: z.string().array().optional(),
        values: z.string().array(),
      }).optional(),
      not: z.object({
        and: z.object({
          cost_categories: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
          dimensions: z.object({
            key: z.string(),
            match_options: z.string().array().optional(),
            values: z.string().array(),
          }).optional(),
          tags: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
        }).array().optional(),
        cost_categories: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
        dimensions: z.object({
          key: z.string(),
          match_options: z.string().array().optional(),
          values: z.string().array(),
        }).optional(),
        not: z.object({
          cost_categories: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
          dimensions: z.object({
            key: z.string(),
            match_options: z.string().array().optional(),
            values: z.string().array(),
          }).optional(),
          tags: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
        }).optional(),
        or: z.object({
          cost_categories: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
          dimensions: z.object({
            key: z.string(),
            match_options: z.string().array().optional(),
            values: z.string().array(),
          }).optional(),
          tags: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
        }).array().optional(),
        tags: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
      }).optional(),
      or: z.object({
        and: z.object({
          cost_categories: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
          dimensions: z.object({
            key: z.string(),
            match_options: z.string().array().optional(),
            values: z.string().array(),
          }).optional(),
          tags: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
        }).array().optional(),
        cost_categories: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
        dimensions: z.object({
          key: z.string(),
          match_options: z.string().array().optional(),
          values: z.string().array(),
        }).optional(),
        not: z.object({
          cost_categories: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
          dimensions: z.object({
            key: z.string(),
            match_options: z.string().array().optional(),
            values: z.string().array(),
          }).optional(),
          tags: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
        }).optional(),
        or: z.object({
          cost_categories: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
          dimensions: z.object({
            key: z.string(),
            match_options: z.string().array().optional(),
            values: z.string().array(),
          }).optional(),
          tags: z.object({
            key: z.string().optional(),
            match_options: z.string().array().optional(),
            values: z.string().array().optional(),
          }).optional(),
        }).array().optional(),
        tags: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
      }).array().optional(),
      tags: z.object({
        key: z.string().optional(),
        match_options: z.string().array().optional(),
        values: z.string().array().optional(),
      }).optional(),
    }).optional(),
  ),
  limit_amount: resolvableValue(z.string().optional()),
  limit_unit: resolvableValue(z.string().optional()),
  metrics: resolvableValue(z.string().array().optional()),
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

export const AwsBudgetsBudgetOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsBudgetsBudgetInputProps =
  & z.input<typeof AwsBudgetsBudgetInputSchema>
  & NodeProps

export type AwsBudgetsBudgetOutputProps =
  & z.output<typeof AwsBudgetsBudgetOutputSchema>
  & z.output<typeof AwsBudgetsBudgetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/budgets_budget

export function AwsBudgetsBudget(props: Partial<AwsBudgetsBudgetInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_budgets_budget'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBudgetsBudgetInputSchema}
      _outputSchema={AwsBudgetsBudgetOutputSchema}
      {...props}
    />
  )
}

export const useAwsBudgetsBudget = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBudgetsBudgetOutputProps>(
    AwsBudgetsBudget,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBudgetsBudgets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBudgetsBudgetOutputProps>(
    AwsBudgetsBudget,
    idFilter,
    baseNode,
    optional,
  )
