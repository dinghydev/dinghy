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

export const AwsOrganizationsOrganizationalUnitInputSchema = TfMetaSchema
  .extend({
    name: resolvableValue(z.string()),
    parent_id: resolvableValue(z.string()),
    tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  })

export const AwsOrganizationsOrganizationalUnitOutputSchema = z.object({
  accounts: z.object({
    arn: z.string(),
    email: z.string(),
    id: z.string(),
    name: z.string(),
  }).array().optional(),
  arn: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsOrganizationsOrganizationalUnitImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
})

export type AwsOrganizationsOrganizationalUnitInputProps =
  & z.input<typeof AwsOrganizationsOrganizationalUnitInputSchema>
  & z.input<typeof AwsOrganizationsOrganizationalUnitImportSchema>
  & NodeProps

export type AwsOrganizationsOrganizationalUnitOutputProps =
  & z.output<typeof AwsOrganizationsOrganizationalUnitOutputSchema>
  & z.output<typeof AwsOrganizationsOrganizationalUnitInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/organizations_organizational_unit

export function AwsOrganizationsOrganizationalUnit(
  props: Partial<AwsOrganizationsOrganizationalUnitInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_organizational_unit'
      _category='resource'
      _title={_title}
      _inputSchema={AwsOrganizationsOrganizationalUnitInputSchema}
      _outputSchema={AwsOrganizationsOrganizationalUnitOutputSchema}
      _importSchema={AwsOrganizationsOrganizationalUnitImportSchema}
      {...props}
    />
  )
}

export const useAwsOrganizationsOrganizationalUnit = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsOrganizationsOrganizationalUnitOutputProps>(
    AwsOrganizationsOrganizationalUnit,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsOrganizationsOrganizationalUnits = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsOrganizationsOrganizationalUnitOutputProps>(
    AwsOrganizationsOrganizationalUnit,
    idFilter,
    baseNode,
    optional,
  )
