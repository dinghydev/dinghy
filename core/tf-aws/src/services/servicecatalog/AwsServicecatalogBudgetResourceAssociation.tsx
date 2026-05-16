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

export const AwsServicecatalogBudgetResourceAssociationInputSchema =
  TfMetaSchema.extend({
    budget_name: resolvableValue(z.string()),
    resource_id: resolvableValue(z.string()),
    region: resolvableValue(z.string().optional()),
    timeouts: resolvableValue(
      z.object({
        create: z.string().optional(),
        delete: z.string().optional(),
        read: z.string().optional(),
      }).optional(),
    ),
  })

export const AwsServicecatalogBudgetResourceAssociationOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsServicecatalogBudgetResourceAssociationInputProps =
  & z.input<typeof AwsServicecatalogBudgetResourceAssociationInputSchema>
  & NodeProps

export type AwsServicecatalogBudgetResourceAssociationOutputProps =
  & z.output<typeof AwsServicecatalogBudgetResourceAssociationOutputSchema>
  & z.output<typeof AwsServicecatalogBudgetResourceAssociationInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/servicecatalog_budget_resource_association

export function AwsServicecatalogBudgetResourceAssociation(
  props: Partial<AwsServicecatalogBudgetResourceAssociationInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalog_budget_resource_association'
      _category='resource'
      _title={_title}
      _inputSchema={AwsServicecatalogBudgetResourceAssociationInputSchema}
      _outputSchema={AwsServicecatalogBudgetResourceAssociationOutputSchema}
      {...props}
    />
  )
}

export const useAwsServicecatalogBudgetResourceAssociation = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsServicecatalogBudgetResourceAssociationOutputProps>(
    AwsServicecatalogBudgetResourceAssociation,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsServicecatalogBudgetResourceAssociations = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsServicecatalogBudgetResourceAssociationOutputProps>(
    AwsServicecatalogBudgetResourceAssociation,
    idFilter,
    baseNode,
    optional,
  )
