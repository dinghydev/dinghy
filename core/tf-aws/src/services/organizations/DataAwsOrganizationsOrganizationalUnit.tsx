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

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  parent_id: resolvableValue(z.string()),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/organizations_organizational_unit

export function DataAwsOrganizationsOrganizationalUnit(
  props: Partial<InputProps>,
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
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOrganizationsOrganizationalUnit = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsOrganizationsOrganizationalUnit,
    idFilter,
    baseNode,
    optional,
  )
