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

export const AwsServicecatalogProductPortfolioAssociationInputSchema =
  TfMetaSchema.extend({
    portfolio_id: resolvableValue(z.string()),
    product_id: resolvableValue(z.string()),
    accept_language: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    source_portfolio_id: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        read: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsServicecatalogProductPortfolioAssociationOutputSchema = z
  .object({
    id: z.string().optional(),
  })

export type AwsServicecatalogProductPortfolioAssociationInputProps =
  & z.input<typeof AwsServicecatalogProductPortfolioAssociationInputSchema>
  & NodeProps

export type AwsServicecatalogProductPortfolioAssociationOutputProps =
  & z.output<typeof AwsServicecatalogProductPortfolioAssociationOutputSchema>
  & z.output<typeof AwsServicecatalogProductPortfolioAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/servicecatalog_product_portfolio_association

export function AwsServicecatalogProductPortfolioAssociation(
  props: Partial<AwsServicecatalogProductPortfolioAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalog_product_portfolio_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsServicecatalogProductPortfolioAssociationInputSchema}
      _outputSchema={AwsServicecatalogProductPortfolioAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsServicecatalogProductPortfolioAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsServicecatalogProductPortfolioAssociationOutputProps>(
    AwsServicecatalogProductPortfolioAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsServicecatalogProductPortfolioAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsServicecatalogProductPortfolioAssociationOutputProps>(
    AwsServicecatalogProductPortfolioAssociation,
    idFilter,
    baseNode,
    optional,
  )
