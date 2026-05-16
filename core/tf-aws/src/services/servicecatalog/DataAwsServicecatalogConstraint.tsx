import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsServicecatalogConstraint } from './AwsServicecatalogConstraint.tsx'

export const DataAwsServicecatalogConstraintInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string()),
  accept_language: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      read: z.string().optional(),
    }).optional(),
  ),
})

export const DataAwsServicecatalogConstraintOutputSchema = z.object({
  description: z.string().optional(),
  owner: z.string().optional(),
  parameters: z.string().optional(),
  portfolio_id: z.string().optional(),
  product_id: z.string().optional(),
  status: z.string().optional(),
  type: z.string().optional(),
})

export type DataAwsServicecatalogConstraintInputProps =
  & z.input<typeof DataAwsServicecatalogConstraintInputSchema>
  & NodeProps

export type DataAwsServicecatalogConstraintOutputProps =
  & z.output<typeof DataAwsServicecatalogConstraintOutputSchema>
  & z.output<typeof DataAwsServicecatalogConstraintInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/servicecatalog_constraint

export function DataAwsServicecatalogConstraint(
  props: Partial<DataAwsServicecatalogConstraintInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsServicecatalogConstraint
      _type='aws_servicecatalog_constraint'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsServicecatalogConstraintInputSchema}
      _outputSchema={DataAwsServicecatalogConstraintOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsServicecatalogConstraint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsServicecatalogConstraintOutputProps>(
    DataAwsServicecatalogConstraint,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsServicecatalogConstraints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsServicecatalogConstraintOutputProps>(
    DataAwsServicecatalogConstraint,
    idFilter,
    baseNode,
    optional,
  )
