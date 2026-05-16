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

export const DataAwsOrganizationsPoliciesForTargetInputSchema = TfMetaSchema
  .extend({
    filter: resolvableValue(z.string()),
    target_id: resolvableValue(z.string()),
    id: resolvableValue(z.string().optional()),
  })

export const DataAwsOrganizationsPoliciesForTargetOutputSchema = z.object({
  ids: z.string().array().optional(),
})

export type DataAwsOrganizationsPoliciesForTargetInputProps =
  & z.input<typeof DataAwsOrganizationsPoliciesForTargetInputSchema>
  & NodeProps

export type DataAwsOrganizationsPoliciesForTargetOutputProps =
  & z.output<typeof DataAwsOrganizationsPoliciesForTargetOutputSchema>
  & z.output<typeof DataAwsOrganizationsPoliciesForTargetInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/organizations_policies_for_target

export function DataAwsOrganizationsPoliciesForTarget(
  props: Partial<DataAwsOrganizationsPoliciesForTargetInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_organizations_policies_for_target'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOrganizationsPoliciesForTargetInputSchema}
      _outputSchema={DataAwsOrganizationsPoliciesForTargetOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsOrganizationsPoliciesForTarget = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsOrganizationsPoliciesForTargetOutputProps>(
    DataAwsOrganizationsPoliciesForTarget,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsOrganizationsPoliciesForTargets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOrganizationsPoliciesForTargetOutputProps>(
    DataAwsOrganizationsPoliciesForTarget,
    idFilter,
    baseNode,
    optional,
  )
