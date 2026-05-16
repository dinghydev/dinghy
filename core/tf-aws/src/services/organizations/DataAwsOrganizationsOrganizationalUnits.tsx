import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsOrganizationsOrganizationalUnitsInputSchema = TfMetaSchema
  .extend({
    parent_id: resolvableValue(z.string()),
  })

export const DataAwsOrganizationsOrganizationalUnitsOutputSchema = z.object({
  children: z.object({
    arn: z.string(),
    id: z.string(),
    name: z.string(),
  }).array().optional(),
  id: z.string().optional(),
})

export type DataAwsOrganizationsOrganizationalUnitsInputProps =
  & z.input<typeof DataAwsOrganizationsOrganizationalUnitsInputSchema>
  & NodeProps

export type DataAwsOrganizationsOrganizationalUnitsOutputProps =
  & z.output<typeof DataAwsOrganizationsOrganizationalUnitsOutputSchema>
  & z.output<typeof DataAwsOrganizationsOrganizationalUnitsInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/organizations_organizational_units

export function DataAwsOrganizationsOrganizationalUnits(
  props: Partial<DataAwsOrganizationsOrganizationalUnitsInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_organizational_units'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOrganizationsOrganizationalUnitsInputSchema}
      _outputSchema={DataAwsOrganizationsOrganizationalUnitsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOrganizationsOrganizationalUnitss = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOrganizationsOrganizationalUnitsOutputProps>(
    DataAwsOrganizationsOrganizationalUnits,
    idFilter,
    baseNode,
    optional,
  )
