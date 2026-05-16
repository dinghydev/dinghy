import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsIamRolePoliciesInputSchema = TfMetaSchema.extend({
  role_name: resolvableValue(z.string()),
})

export const DataAwsIamRolePoliciesOutputSchema = z.object({
  policy_names: z.set(z.string()).optional(),
})

export type DataAwsIamRolePoliciesInputProps =
  & z.input<typeof DataAwsIamRolePoliciesInputSchema>
  & NodeProps

export type DataAwsIamRolePoliciesOutputProps =
  & z.output<typeof DataAwsIamRolePoliciesOutputSchema>
  & z.output<typeof DataAwsIamRolePoliciesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/iam_role_policies

export function DataAwsIamRolePolicies(
  props: Partial<DataAwsIamRolePoliciesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_role_policies'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsIamRolePoliciesInputSchema}
      _outputSchema={DataAwsIamRolePoliciesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsIamRolePoliciess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsIamRolePoliciesOutputProps>(
    DataAwsIamRolePolicies,
    idFilter,
    baseNode,
    optional,
  )
