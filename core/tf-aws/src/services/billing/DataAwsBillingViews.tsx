import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/billing_views

export const InputSchema = z.object({
  billing_view_types: resolvableValue(z.string().array().optional()),
})

export const OutputSchema = z.object({
  billing_view: z.object({
    arn: z.string(),
    billing_view_type: z.string(),
    description: z.string(),
    name: z.string(),
    owner_account_id: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsBillingViews(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_billing_views'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsBillingViewss = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsBillingViews, node, id)
