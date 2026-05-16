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

export const AwsSesReceiptFilterInputSchema = TfMetaSchema.extend({
  cidr: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  policy: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const AwsSesReceiptFilterOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type AwsSesReceiptFilterInputProps =
  & z.input<typeof AwsSesReceiptFilterInputSchema>
  & NodeProps

export type AwsSesReceiptFilterOutputProps =
  & z.output<typeof AwsSesReceiptFilterOutputSchema>
  & z.output<typeof AwsSesReceiptFilterInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ses_receipt_filter

export function AwsSesReceiptFilter(
  props: Partial<AwsSesReceiptFilterInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ses_receipt_filter'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSesReceiptFilterInputSchema}
      _outputSchema={AwsSesReceiptFilterOutputSchema}
      {...props}
    />
  )
}

export const useAwsSesReceiptFilter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSesReceiptFilterOutputProps>(
    AwsSesReceiptFilter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSesReceiptFilters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSesReceiptFilterOutputProps>(
    AwsSesReceiptFilter,
    idFilter,
    baseNode,
    optional,
  )
