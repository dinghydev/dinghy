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

export const AwsIamUserPoliciesExclusiveInputSchema = TfMetaSchema.extend({
  policy_names: resolvableValue(z.string().array()),
  user_name: resolvableValue(z.string()),
})

export const AwsIamUserPoliciesExclusiveOutputSchema = z.object({})

export type AwsIamUserPoliciesExclusiveInputProps =
  & z.input<typeof AwsIamUserPoliciesExclusiveInputSchema>
  & NodeProps

export type AwsIamUserPoliciesExclusiveOutputProps =
  & z.output<typeof AwsIamUserPoliciesExclusiveOutputSchema>
  & z.output<typeof AwsIamUserPoliciesExclusiveInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_user_policies_exclusive

export function AwsIamUserPoliciesExclusive(
  props: Partial<AwsIamUserPoliciesExclusiveInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_user_policies_exclusive'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamUserPoliciesExclusiveInputSchema}
      _outputSchema={AwsIamUserPoliciesExclusiveOutputSchema}
      {...props}
    />
  )
}

export const useAwsIamUserPoliciesExclusive = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamUserPoliciesExclusiveOutputProps>(
    AwsIamUserPoliciesExclusive,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamUserPoliciesExclusives = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamUserPoliciesExclusiveOutputProps>(
    AwsIamUserPoliciesExclusive,
    idFilter,
    baseNode,
    optional,
  )
