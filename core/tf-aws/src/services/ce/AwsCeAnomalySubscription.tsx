import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/ce_anomaly_subscription

export const InputSchema = z.object({
  frequency: resolvableValue(z.string()),
  monitor_arn_list: resolvableValue(z.string().array()),
  name: resolvableValue(z.string()),
  subscriber: resolvableValue(
    z.object({
      address: z.string(),
      type: z.string(),
    }).array(),
  ),
  account_id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  threshold_expression: resolvableValue(
    z.object({
      and: z.object({
        cost_category: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
        dimension: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
        tags: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
      }).array().optional(),
      cost_category: z.object({
        key: z.string().optional(),
        match_options: z.string().array().optional(),
        values: z.string().array().optional(),
      }).optional(),
      dimension: z.object({
        key: z.string().optional(),
        match_options: z.string().array().optional(),
        values: z.string().array().optional(),
      }).optional(),
      not: z.object({
        cost_category: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
        dimension: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
        tags: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
      }).optional(),
      or: z.object({
        cost_category: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
        }).optional(),
        dimension: z.object({
          key: z.string().optional(),
          match_options: z.string().array().optional(),
          values: z.string().array().optional(),
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
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
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

export function AwsCeAnomalySubscription(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ce_anomaly_subscription'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsCeAnomalySubscription = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsCeAnomalySubscription, node, id)

export const useAwsCeAnomalySubscriptions = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsCeAnomalySubscription, node, id)
