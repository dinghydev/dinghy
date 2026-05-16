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

export const AwsCeAnomalySubscriptionInputSchema = TfMetaSchema.extend({
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

export const AwsCeAnomalySubscriptionOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsCeAnomalySubscriptionImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsCeAnomalySubscriptionInputProps =
  & z.input<typeof AwsCeAnomalySubscriptionInputSchema>
  & z.input<typeof AwsCeAnomalySubscriptionImportSchema>
  & NodeProps

export type AwsCeAnomalySubscriptionOutputProps =
  & z.output<typeof AwsCeAnomalySubscriptionOutputSchema>
  & z.output<typeof AwsCeAnomalySubscriptionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ce_anomaly_subscription

export function AwsCeAnomalySubscription(
  props: Partial<AwsCeAnomalySubscriptionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ce_anomaly_subscription'
      _category='resource'
      _title={_title}
      _inputSchema={AwsCeAnomalySubscriptionInputSchema}
      _outputSchema={AwsCeAnomalySubscriptionOutputSchema}
      _importSchema={AwsCeAnomalySubscriptionImportSchema}
      {...props}
    />
  )
}

export const useAwsCeAnomalySubscription = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsCeAnomalySubscriptionOutputProps>(
    AwsCeAnomalySubscription,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsCeAnomalySubscriptions = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsCeAnomalySubscriptionOutputProps>(
    AwsCeAnomalySubscription,
    idFilter,
    baseNode,
    optional,
  )
