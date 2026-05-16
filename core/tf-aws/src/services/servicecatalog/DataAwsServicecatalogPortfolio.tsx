import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsServicecatalogPortfolio } from './AwsServicecatalogPortfolio.tsx'

export const DataAwsServicecatalogPortfolioInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string()),
  accept_language: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsServicecatalogPortfolioOutputSchema = z.object({
  arn: z.string().optional(),
  created_time: z.string().optional(),
  description: z.string().optional(),
  name: z.string().optional(),
  provider_name: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsServicecatalogPortfolioInputProps =
  & z.input<typeof DataAwsServicecatalogPortfolioInputSchema>
  & NodeProps

export type DataAwsServicecatalogPortfolioOutputProps =
  & z.output<typeof DataAwsServicecatalogPortfolioOutputSchema>
  & z.output<typeof DataAwsServicecatalogPortfolioInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/servicecatalog_portfolio

export function DataAwsServicecatalogPortfolio(
  props: Partial<DataAwsServicecatalogPortfolioInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsServicecatalogPortfolio
      _type='aws_servicecatalog_portfolio'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsServicecatalogPortfolioInputSchema}
      _outputSchema={DataAwsServicecatalogPortfolioOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsServicecatalogPortfolio = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsServicecatalogPortfolioOutputProps>(
    DataAwsServicecatalogPortfolio,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsServicecatalogPortfolios = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsServicecatalogPortfolioOutputProps>(
    DataAwsServicecatalogPortfolio,
    idFilter,
    baseNode,
    optional,
  )
