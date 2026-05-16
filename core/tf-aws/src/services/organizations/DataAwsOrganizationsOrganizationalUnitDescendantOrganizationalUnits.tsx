import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsInputSchema =
  TfMetaSchema.extend({
    parent_id: resolvableValue(z.string()),
  })

export const DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsOutputSchema =
  z.object({
    children: z.object({
      arn: z.string(),
      id: z.string(),
      name: z.string(),
    }).array().optional(),
    id: z.string().optional(),
  })

export type DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsInputProps =
  & z.input<
    typeof DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsInputSchema
  >
  & NodeProps

export type DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsOutputProps =
  & z.output<
    typeof DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsOutputSchema
  >
  & z.output<
    typeof DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsInputSchema
  >
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/organizations_organizational_unit_descendant_organizational_units

export function DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits(
  props: Partial<
    DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsInputProps
  >,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_organizational_unit_descendant_organizational_units'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsInputSchema}
      _outputSchema={DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitss =
  (idFilter?: string, baseNode?: any, optional?: boolean) =>
    useTypedNodes<
      DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitsOutputProps
    >(
      DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits,
      idFilter,
      baseNode,
      optional,
    )
