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

export const AwsIamGroupPoliciesExclusiveInputSchema = TfMetaSchema.extend({
  group_name: resolvableValue(z.string()),
  policy_names: resolvableValue(z.string().array()),
})

export const AwsIamGroupPoliciesExclusiveOutputSchema = z.object({})

export type AwsIamGroupPoliciesExclusiveInputProps =
  & z.input<typeof AwsIamGroupPoliciesExclusiveInputSchema>
  & NodeProps

export type AwsIamGroupPoliciesExclusiveOutputProps =
  & z.output<typeof AwsIamGroupPoliciesExclusiveOutputSchema>
  & z.output<typeof AwsIamGroupPoliciesExclusiveInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_group_policies_exclusive

export function AwsIamGroupPoliciesExclusive(
  props: Partial<AwsIamGroupPoliciesExclusiveInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_group_policies_exclusive'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamGroupPoliciesExclusiveInputSchema}
      _outputSchema={AwsIamGroupPoliciesExclusiveOutputSchema}
      {...props}
    />
  )
}

export const useAwsIamGroupPoliciesExclusive = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamGroupPoliciesExclusiveOutputProps>(
    AwsIamGroupPoliciesExclusive,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamGroupPoliciesExclusives = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamGroupPoliciesExclusiveOutputProps>(
    AwsIamGroupPoliciesExclusive,
    idFilter,
    baseNode,
    optional,
  )
