import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/quicksight_iam_policy_assignment

export const InputSchema = z.object({
  assignment_name: resolvableValue(z.string()),
  assignment_status: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  identities: resolvableValue(
    z.object({
      group: z.string().array().optional(),
      user: z.string().array().optional(),
    }).optional(),
  ),
  namespace: resolvableValue(z.string().optional()),
  policy_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  assignment_id: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsQuicksightIamPolicyAssignment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_iam_policy_assignment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightIamPolicyAssignment = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsQuicksightIamPolicyAssignment, node, id)

export const useAwsQuicksightIamPolicyAssignments = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsQuicksightIamPolicyAssignment, node, id)
