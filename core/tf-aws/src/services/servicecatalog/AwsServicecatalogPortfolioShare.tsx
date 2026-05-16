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

export const AwsServicecatalogPortfolioShareInputSchema = TfMetaSchema.extend({
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

export const AwsServicecatalogPortfolioShareOutputSchema = z.object({
  accepted: z.boolean().optional(),
})

export type AwsServicecatalogPortfolioShareInputProps =
  & z.input<typeof AwsServicecatalogPortfolioShareInputSchema>
  & NodeProps

export type AwsServicecatalogPortfolioShareOutputProps =
  & z.output<typeof AwsServicecatalogPortfolioShareOutputSchema>
  & z.output<typeof AwsServicecatalogPortfolioShareInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/servicecatalog_portfolio_share

export function AwsServicecatalogPortfolioShare(
  props: Partial<AwsServicecatalogPortfolioShareInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalog_portfolio_share'
      _category='resource'
      _title={_title}
      _inputSchema={AwsServicecatalogPortfolioShareInputSchema}
      _outputSchema={AwsServicecatalogPortfolioShareOutputSchema}
      {...props}
    />
  )
}

export const useAwsServicecatalogPortfolioShare = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsServicecatalogPortfolioShareOutputProps>(
    AwsServicecatalogPortfolioShare,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsServicecatalogPortfolioShares = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsServicecatalogPortfolioShareOutputProps>(
    AwsServicecatalogPortfolioShare,
    idFilter,
    baseNode,
    optional,
  )
