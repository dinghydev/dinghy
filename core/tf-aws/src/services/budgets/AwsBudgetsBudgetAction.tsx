import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/budgets_budget_action

export const InputSchema = z.object({
  action_threshold: resolvableValue(z.object({
    action_threshold_type: z.string(),
    action_threshold_value: z.number(),
  })),
  action_type: resolvableValue(z.string()),
  approval_model: resolvableValue(z.string()),
  budget_name: resolvableValue(z.string()),
  execution_role_arn: resolvableValue(z.string()),
  notification_type: resolvableValue(z.string()),
  subscriber: resolvableValue(
    z.object({
      address: z.string(),
      subscription_type: z.string(),
    }).array(),
  ),
  account_id: resolvableValue(z.string().optional()),
  definition: resolvableValue(z.object({
    iam_action_definition: z.object({
      groups: z.string().array().optional(),
      policy_arn: z.string(),
      roles: z.string().array().optional(),
      users: z.string().array().optional(),
    }).optional(),
    scp_action_definition: z.object({
      policy_id: z.string(),
      target_ids: z.string().array(),
    }).optional(),
    ssm_action_definition: z.object({
      action_sub_type: z.string(),
      instance_ids: z.string().array(),
      region: z.string(),
    }).optional(),
  })),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  action_id: z.string().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsBudgetsBudgetAction(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_budgets_budget_action'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsBudgetsBudgetAction = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsBudgetsBudgetAction, node, id)

export const useAwsBudgetsBudgetActions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsBudgetsBudgetAction, node, id)
