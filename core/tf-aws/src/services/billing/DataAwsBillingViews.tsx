import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsBillingViewsInputSchema = TfMetaSchema.extend({
  billing_view_types: resolvableValue(z.string().array().optional()),
})

export const DataAwsBillingViewsOutputSchema = z.object({
  billing_view: z.object({
    arn: z.string(),
    billing_view_type: z.string(),
    description: z.string(),
    name: z.string(),
    owner_account_id: z.string(),
  }).array().optional(),
})

export type DataAwsBillingViewsInputProps =
  & z.input<typeof DataAwsBillingViewsInputSchema>
  & NodeProps

export type DataAwsBillingViewsOutputProps =
  & z.output<typeof DataAwsBillingViewsOutputSchema>
  & z.output<typeof DataAwsBillingViewsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/billing_views

export function DataAwsBillingViews(
  props: Partial<DataAwsBillingViewsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_billing_views'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsBillingViewsInputSchema}
      _outputSchema={DataAwsBillingViewsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsBillingViewss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsBillingViewsOutputProps>(
    DataAwsBillingViews,
    idFilter,
    baseNode,
    optional,
  )
