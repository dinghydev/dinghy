import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsServicecatalogPortfolioConstraintsInputSchema = TfMetaSchema
  .extend({
    portfolio_id: resolvableValue(z.string()),
    accept_language: resolvableValue(z.string().optional()),
    id: resolvableValue(z.string().optional()),
    product_id: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        read: z.string().optional(),
      }).optional(),
    ),
  })

export const DataAwsServicecatalogPortfolioConstraintsOutputSchema = z.object({
  details: z.object({
    constraint_id: z.string(),
    description: z.string(),
    owner: z.string(),
    portfolio_id: z.string(),
    product_id: z.string(),
    type: z.string(),
  }).array().optional(),
})

export type DataAwsServicecatalogPortfolioConstraintsInputProps =
  & z.input<typeof DataAwsServicecatalogPortfolioConstraintsInputSchema>
  & NodeProps

export type DataAwsServicecatalogPortfolioConstraintsOutputProps =
  & z.output<typeof DataAwsServicecatalogPortfolioConstraintsOutputSchema>
  & z.output<typeof DataAwsServicecatalogPortfolioConstraintsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/servicecatalog_portfolio_constraints

export function DataAwsServicecatalogPortfolioConstraints(
  props: Partial<DataAwsServicecatalogPortfolioConstraintsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalog_portfolio_constraints'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsServicecatalogPortfolioConstraintsInputSchema}
      _outputSchema={DataAwsServicecatalogPortfolioConstraintsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsServicecatalogPortfolioConstraintss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsServicecatalogPortfolioConstraintsOutputProps>(
    DataAwsServicecatalogPortfolioConstraints,
    idFilter,
    baseNode,
    optional,
  )
