import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const AwsSagemakerServicecatalogPortfolioStatusInputSchema = TfMetaSchema
  .extend({
    status: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
  })

export const AwsSagemakerServicecatalogPortfolioStatusOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsSagemakerServicecatalogPortfolioStatusInputProps =
  & z.input<typeof AwsSagemakerServicecatalogPortfolioStatusInputSchema>
  & NodeProps

export type AwsSagemakerServicecatalogPortfolioStatusOutputProps =
  & z.output<typeof AwsSagemakerServicecatalogPortfolioStatusOutputSchema>
  & z.output<typeof AwsSagemakerServicecatalogPortfolioStatusInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sagemaker_servicecatalog_portfolio_status

export function AwsSagemakerServicecatalogPortfolioStatus(
  props: Partial<AwsSagemakerServicecatalogPortfolioStatusInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sagemaker_servicecatalog_portfolio_status'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSagemakerServicecatalogPortfolioStatusInputSchema}
      _outputSchema={AwsSagemakerServicecatalogPortfolioStatusOutputSchema}
      {...props}
    />
  )
}

export const useAwsSagemakerServicecatalogPortfolioStatuss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSagemakerServicecatalogPortfolioStatusOutputProps>(
    AwsSagemakerServicecatalogPortfolioStatus,
    idFilter,
    baseNode,
    optional,
  )
