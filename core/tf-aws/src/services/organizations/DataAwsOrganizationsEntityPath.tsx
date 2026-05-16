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

export const DataAwsOrganizationsEntityPathInputSchema = TfMetaSchema.extend({
  entity_id: resolvableValue(z.string()),
})

export const DataAwsOrganizationsEntityPathOutputSchema = z.object({
  entity_path: z.string().optional(),
})

export type DataAwsOrganizationsEntityPathInputProps =
  & z.input<typeof DataAwsOrganizationsEntityPathInputSchema>
  & NodeProps

export type DataAwsOrganizationsEntityPathOutputProps =
  & z.output<typeof DataAwsOrganizationsEntityPathOutputSchema>
  & z.output<typeof DataAwsOrganizationsEntityPathInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/organizations_entity_path

export function DataAwsOrganizationsEntityPath(
  props: Partial<DataAwsOrganizationsEntityPathInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_entity_path'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOrganizationsEntityPathInputSchema}
      _outputSchema={DataAwsOrganizationsEntityPathOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOrganizationsEntityPath = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsOrganizationsEntityPathOutputProps>(
    DataAwsOrganizationsEntityPath,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsOrganizationsEntityPaths = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOrganizationsEntityPathOutputProps>(
    DataAwsOrganizationsEntityPath,
    idFilter,
    baseNode,
    optional,
  )
