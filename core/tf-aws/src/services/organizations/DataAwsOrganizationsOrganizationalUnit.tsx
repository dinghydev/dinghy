import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOrganizationsOrganizationalUnit } from './AwsOrganizationsOrganizationalUnit.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/organizations_organizational_unit

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  parent_id: resolvableValue(z.string()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsOrganizationsOrganizationalUnit(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsOrganizationsOrganizationalUnit
      _type='aws_organizations_organizational_unit'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOrganizationsOrganizationalUnit = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsOrganizationsOrganizationalUnit, node, id)

export const useDataAwsOrganizationsOrganizationalUnits = (
  node?: any,
  id?: string,
) =>
  useTypedNodes<OutputProps>(DataAwsOrganizationsOrganizationalUnit, node, id)
