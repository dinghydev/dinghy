import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const InputSchema = z.object({
  parent_id: resolvableValue(z.string()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  children: z.object({
    arn: z.string(),
    id: z.string(),
    name: z.string(),
  }).array().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/organizations_organizational_unit_descendant_organizational_units

export function DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_organizational_unit_descendant_organizational_units'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnitss =
  (idFilter?: string, baseNode?: any, optional?: boolean) =>
    useTypedNodes<OutputProps>(
      DataAwsOrganizationsOrganizationalUnitDescendantOrganizationalUnits,
      idFilter,
      baseNode,
      optional,
    )
