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

export const AwsIamGroupPolicyInputSchema = TfMetaSchema.extend({
  group: resolvableValue(z.string()),
  policy: resolvableValue(z.string()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
})

export const AwsIamGroupPolicyOutputSchema = z.object({
  group: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  policy: z.string().optional(),
})

export type AwsIamGroupPolicyInputProps =
  & z.input<typeof AwsIamGroupPolicyInputSchema>
  & NodeProps

export type AwsIamGroupPolicyOutputProps =
  & z.output<typeof AwsIamGroupPolicyOutputSchema>
  & z.output<typeof AwsIamGroupPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_group_policy

export function AwsIamGroupPolicy(props: Partial<AwsIamGroupPolicyInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_group_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamGroupPolicyInputSchema}
      _outputSchema={AwsIamGroupPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsIamGroupPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamGroupPolicyOutputProps>(
    AwsIamGroupPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamGroupPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamGroupPolicyOutputProps>(
    AwsIamGroupPolicy,
    idFilter,
    baseNode,
    optional,
  )
