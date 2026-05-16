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

export const AwsServicecatalogPortfolioInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  provider_name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      read: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsServicecatalogPortfolioOutputSchema = z.object({
  arn: z.string().optional(),
  created_time: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsServicecatalogPortfolioInputProps =
  & z.input<typeof AwsServicecatalogPortfolioInputSchema>
  & NodeProps

export type AwsServicecatalogPortfolioOutputProps =
  & z.output<typeof AwsServicecatalogPortfolioOutputSchema>
  & z.output<typeof AwsServicecatalogPortfolioInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/servicecatalog_portfolio

export function AwsServicecatalogPortfolio(
  props: Partial<AwsServicecatalogPortfolioInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalog_portfolio'
      _category='resource'
      _title={_title}
      _inputSchema={AwsServicecatalogPortfolioInputSchema}
      _outputSchema={AwsServicecatalogPortfolioOutputSchema}
      {...props}
    />
  )
}

export const useAwsServicecatalogPortfolio = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsServicecatalogPortfolioOutputProps>(
    AwsServicecatalogPortfolio,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsServicecatalogPortfolios = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsServicecatalogPortfolioOutputProps>(
    AwsServicecatalogPortfolio,
    idFilter,
    baseNode,
    optional,
  )
