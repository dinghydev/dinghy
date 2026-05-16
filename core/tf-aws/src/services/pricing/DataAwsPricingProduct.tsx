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

export const DataAwsPricingProductInputSchema = TfMetaSchema.extend({
  filters: resolvableValue(
    z.object({
      field: z.string(),
      value: z.string(),
    }).array(),
  ),
  service_code: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const DataAwsPricingProductOutputSchema = z.object({
  result: z.string().optional(),
})

export type DataAwsPricingProductInputProps =
  & z.input<typeof DataAwsPricingProductInputSchema>
  & NodeProps

export type DataAwsPricingProductOutputProps =
  & z.output<typeof DataAwsPricingProductOutputSchema>
  & z.output<typeof DataAwsPricingProductInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/pricing_product

export function DataAwsPricingProduct(
  props: Partial<DataAwsPricingProductInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_pricing_product'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsPricingProductInputSchema}
      _outputSchema={DataAwsPricingProductOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsPricingProduct = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsPricingProductOutputProps>(
    DataAwsPricingProduct,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsPricingProducts = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsPricingProductOutputProps>(
    DataAwsPricingProduct,
    idFilter,
    baseNode,
    optional,
  )
