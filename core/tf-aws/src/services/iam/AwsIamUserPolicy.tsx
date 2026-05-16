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

export const AwsIamUserPolicyInputSchema = TfMetaSchema.extend({
  policy: resolvableValue(z.string()),
  user: resolvableValue(z.string()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
})

export const AwsIamUserPolicyOutputSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
})

export type AwsIamUserPolicyInputProps =
  & z.input<typeof AwsIamUserPolicyInputSchema>
  & NodeProps

export type AwsIamUserPolicyOutputProps =
  & z.output<typeof AwsIamUserPolicyOutputSchema>
  & z.output<typeof AwsIamUserPolicyInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_user_policy

export function AwsIamUserPolicy(props: Partial<AwsIamUserPolicyInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_user_policy'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamUserPolicyInputSchema}
      _outputSchema={AwsIamUserPolicyOutputSchema}
      {...props}
    />
  )
}

export const useAwsIamUserPolicy = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamUserPolicyOutputProps>(
    AwsIamUserPolicy,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamUserPolicys = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamUserPolicyOutputProps>(
    AwsIamUserPolicy,
    idFilter,
    baseNode,
    optional,
  )
