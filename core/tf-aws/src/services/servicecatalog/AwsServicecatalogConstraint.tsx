import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/servicecatalog_constraint

export const InputSchema = z.object({
  parameters: resolvableValue(z.string()),
  portfolio_id: resolvableValue(z.string()),
  product_id: resolvableValue(z.string()),
  status: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  accept_language: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      read: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  owner: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsServicecatalogConstraint(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalog_constraint'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsServicecatalogConstraint = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsServicecatalogConstraint, node, id)

export const useAwsServicecatalogConstraints = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsServicecatalogConstraint, node, id)
