import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsServicecatalogProduct } from './AwsServicecatalogProduct.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/servicecatalog_product

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  accept_language: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_time: z.string().optional(),
  description: z.string().optional(),
  distributor: z.string().optional(),
  has_default_path: z.boolean().optional(),
  name: z.string().optional(),
  owner: z.string().optional(),
  status: z.string().optional(),
  support_description: z.string().optional(),
  support_email: z.string().optional(),
  support_url: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  type: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsServicecatalogProduct(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsServicecatalogProduct
      _type='aws_servicecatalog_product'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsServicecatalogProduct = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsServicecatalogProduct, node, id)

export const useDataAwsServicecatalogProducts = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsServicecatalogProduct, node, id)
