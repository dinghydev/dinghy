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

export const AwsServicecatalogPrincipalPortfolioAssociationInputSchema =
  TfMetaSchema.extend({
    portfolio_id: resolvableValue(z.string()),
    principal_arn: resolvableValue(z.string()),
    accept_language: resolvableValue(z.string().optional()),
    principal_type: resolvableValue(z.string().optional()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        read: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsServicecatalogPrincipalPortfolioAssociationOutputSchema = z
  .object({
    id: z.string().optional(),
  })

export type AwsServicecatalogPrincipalPortfolioAssociationInputProps =
  & z.input<typeof AwsServicecatalogPrincipalPortfolioAssociationInputSchema>
  & NodeProps

export type AwsServicecatalogPrincipalPortfolioAssociationOutputProps =
  & z.output<typeof AwsServicecatalogPrincipalPortfolioAssociationOutputSchema>
  & z.output<typeof AwsServicecatalogPrincipalPortfolioAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/servicecatalog_principal_portfolio_association

export function AwsServicecatalogPrincipalPortfolioAssociation(
  props: Partial<AwsServicecatalogPrincipalPortfolioAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalog_principal_portfolio_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsServicecatalogPrincipalPortfolioAssociationInputSchema}
      _outputSchema={AwsServicecatalogPrincipalPortfolioAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsServicecatalogPrincipalPortfolioAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsServicecatalogPrincipalPortfolioAssociationOutputProps>(
    AwsServicecatalogPrincipalPortfolioAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsServicecatalogPrincipalPortfolioAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsServicecatalogPrincipalPortfolioAssociationOutputProps>(
    AwsServicecatalogPrincipalPortfolioAssociation,
    idFilter,
    baseNode,
    optional,
  )
