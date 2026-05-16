import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsOrganizationsPolicy } from './AwsOrganizationsPolicy.tsx'

export const DataAwsOrganizationsPolicyInputSchema = TfMetaSchema.extend({
  policy_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
})

export const DataAwsOrganizationsPolicyOutputSchema = z.object({
  arn: z.string().optional(),
  aws_managed: z.boolean().optional(),
  content: z.string().optional(),
  description: z.string().optional(),
  name: z.string().optional(),
  type: z.string().optional(),
})

export type DataAwsOrganizationsPolicyInputProps =
  & z.input<typeof DataAwsOrganizationsPolicyInputSchema>
  & NodeProps

export type DataAwsOrganizationsPolicyOutputProps =
  & z.output<typeof DataAwsOrganizationsPolicyOutputSchema>
  & z.output<typeof DataAwsOrganizationsPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/organizations_policy

export function DataAwsOrganizationsPolicy(
  props: Partial<DataAwsOrganizationsPolicyInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsOrganizationsPolicy
      _type='aws_organizations_policy'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsOrganizationsPolicyInputSchema}
      _outputSchema={DataAwsOrganizationsPolicyOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsOrganizationsPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsOrganizationsPolicyOutputProps>(
    DataAwsOrganizationsPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsOrganizationsPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsOrganizationsPolicyOutputProps>(
    DataAwsOrganizationsPolicy,
    idFilter,
    baseNode,
    optional,
  )
