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

export const AwsBillingViewInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  data_filter_expression: resolvableValue(
    z.object({
      dimensions: z.object({
        key: z.string(),
        values: z.string().array(),
      }).array().optional(),
      tags: z.object({
        key: z.string(),
        values: z.string().array(),
      }).array().optional(),
      time_range: z.object({
        begin_date_inclusive: z.string(),
        end_date_inclusive: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  source_views: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsBillingViewOutputSchema = z.object({
  arn: z.string().optional(),
  billing_view_type: z.string().optional(),
  created_at: z.string().optional(),
  derived_view_count: z.number().optional(),
  owner_account_id: z.string().optional(),
  source_account_id: z.string().optional(),
  source_view_count: z.number().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  updated_at: z.string().optional(),
  view_definition_last_updated_at: z.string().optional(),
})

export type AwsBillingViewInputProps =
  & z.input<typeof AwsBillingViewInputSchema>
  & NodeProps

export type AwsBillingViewOutputProps =
  & z.output<typeof AwsBillingViewOutputSchema>
  & z.output<typeof AwsBillingViewInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/billing_view

export function AwsBillingView(props: Partial<AwsBillingViewInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_billing_view'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBillingViewInputSchema}
      _outputSchema={AwsBillingViewOutputSchema}
      {...props}
    />
  )
}

export const useAwsBillingView = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBillingViewOutputProps>(
    AwsBillingView,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBillingViews = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBillingViewOutputProps>(
    AwsBillingView,
    idFilter,
    baseNode,
    optional,
  )
