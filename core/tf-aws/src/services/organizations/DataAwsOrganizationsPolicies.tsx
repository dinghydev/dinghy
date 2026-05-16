import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsOrganizationsPoliciesInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const DataAwsOrganizationsPoliciesOutputSchema = z.object({
  ids: z.string().array().optional(),
})

export type DataAwsOrganizationsPoliciesInputProps =
  & z.input<typeof DataAwsOrganizationsPoliciesInputSchema>
  & NodeProps

export type DataAwsOrganizationsPoliciesOutputProps =
  & z.output<typeof DataAwsOrganizationsPoliciesOutputSchema>
  & z.output<typeof DataAwsOrganizationsPoliciesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/organizations_policies

export function DataAwsOrganizationsPolicies(
  props: Partial<DataAwsOrganizationsPoliciesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_policies'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOrganizationsPoliciesInputSchema}
      _outputSchema={DataAwsOrganizationsPoliciesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOrganizationsPoliciess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOrganizationsPoliciesOutputProps>(
    DataAwsOrganizationsPolicies,
    idFilter,
    baseNode,
    optional,
  )
