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

export const AwsIamRolePoliciesExclusiveInputSchema = TfMetaSchema.extend({
  policy_names: resolvableValue(z.string().array()),
  role_name: resolvableValue(z.string()),
})

export const AwsIamRolePoliciesExclusiveOutputSchema = z.object({})

export type AwsIamRolePoliciesExclusiveInputProps =
  & z.input<typeof AwsIamRolePoliciesExclusiveInputSchema>
  & NodeProps

export type AwsIamRolePoliciesExclusiveOutputProps =
  & z.output<typeof AwsIamRolePoliciesExclusiveOutputSchema>
  & z.output<typeof AwsIamRolePoliciesExclusiveInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_role_policies_exclusive

export function AwsIamRolePoliciesExclusive(
  props: Partial<AwsIamRolePoliciesExclusiveInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_role_policies_exclusive'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamRolePoliciesExclusiveInputSchema}
      _outputSchema={AwsIamRolePoliciesExclusiveOutputSchema}
      {...props}
    />
  )
}

export const useAwsIamRolePoliciesExclusive = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamRolePoliciesExclusiveOutputProps>(
    AwsIamRolePoliciesExclusive,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamRolePoliciesExclusives = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamRolePoliciesExclusiveOutputProps>(
    AwsIamRolePoliciesExclusive,
    idFilter,
    baseNode,
    optional,
  )
