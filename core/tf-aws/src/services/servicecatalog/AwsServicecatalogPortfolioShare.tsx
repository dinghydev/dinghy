import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/servicecatalog_portfolio_share

export const InputSchema = z.object({
  portfolio_id: resolvableValue(z.string()),
  principal_id: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  accept_language: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  share_principals: resolvableValue(z.boolean().optional()),
  share_tag_options: resolvableValue(z.boolean().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      read: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  wait_for_acceptance: resolvableValue(z.boolean().optional()),
})

export const OutputSchema = z.object({
  accepted: z.boolean().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsServicecatalogPortfolioShare(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalog_portfolio_share'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsServicecatalogPortfolioShare = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsServicecatalogPortfolioShare, node, id)

export const useAwsServicecatalogPortfolioShares = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsServicecatalogPortfolioShare, node, id)
