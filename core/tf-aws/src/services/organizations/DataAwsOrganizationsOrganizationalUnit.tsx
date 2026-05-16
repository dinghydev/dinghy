import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOrganizationsOrganizationalUnit } from './AwsOrganizationsOrganizationalUnit.tsx'

export const DataAwsOrganizationsOrganizationalUnitInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    parent_id: resolvableValue(z.string()),
  })

export const DataAwsOrganizationsOrganizationalUnitOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type DataAwsOrganizationsOrganizationalUnitInputProps =
  & z.input<typeof DataAwsOrganizationsOrganizationalUnitInputSchema>
  & NodeProps

export type DataAwsOrganizationsOrganizationalUnitOutputProps =
  & z.output<typeof DataAwsOrganizationsOrganizationalUnitOutputSchema>
  & z.output<typeof DataAwsOrganizationsOrganizationalUnitInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/organizations_organizational_unit

export function DataAwsOrganizationsOrganizationalUnit(
  props: Partial<DataAwsOrganizationsOrganizationalUnitInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsOrganizationsOrganizationalUnit
      _type='aws_organizations_organizational_unit'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOrganizationsOrganizationalUnitInputSchema}
      _outputSchema={DataAwsOrganizationsOrganizationalUnitOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOrganizationsOrganizationalUnit = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsOrganizationsOrganizationalUnitOutputProps>(
    DataAwsOrganizationsOrganizationalUnit,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsOrganizationsOrganizationalUnits = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOrganizationsOrganizationalUnitOutputProps>(
    DataAwsOrganizationsOrganizationalUnit,
    idFilter,
    baseNode,
    optional,
  )
