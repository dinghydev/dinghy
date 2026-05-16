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

export const AwsServicecatalogConstraintInputSchema = TfMetaSchema.extend({
  parameters: resolvableValue(z.string()),
  portfolio_id: resolvableValue(z.string()),
  product_id: resolvableValue(z.string()),
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

export const AwsServicecatalogConstraintOutputSchema = z.object({
  id: z.string().optional(),
  owner: z.string().optional(),
  status: z.string().optional(),
})

export type AwsServicecatalogConstraintInputProps =
  & z.input<typeof AwsServicecatalogConstraintInputSchema>
  & NodeProps

export type AwsServicecatalogConstraintOutputProps =
  & z.output<typeof AwsServicecatalogConstraintOutputSchema>
  & z.output<typeof AwsServicecatalogConstraintInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/servicecatalog_constraint

export function AwsServicecatalogConstraint(
  props: Partial<AwsServicecatalogConstraintInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_servicecatalog_constraint'
      _category='resource'
      _title={_title}
      _inputSchema={AwsServicecatalogConstraintInputSchema}
      _outputSchema={AwsServicecatalogConstraintOutputSchema}
      {...props}
    />
  )
}

export const useAwsServicecatalogConstraint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsServicecatalogConstraintOutputProps>(
    AwsServicecatalogConstraint,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsServicecatalogConstraints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsServicecatalogConstraintOutputProps>(
    AwsServicecatalogConstraint,
    idFilter,
    baseNode,
    optional,
  )
