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

export const AwsQuicksightIamPolicyAssignmentInputSchema = TfMetaSchema.extend({
  assignment_name: resolvableValue(z.string()),
  assignment_status: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  identities: resolvableValue(
    z.object({
      group: z.string().array().optional(),
      user: z.string().array().optional(),
    }).array().optional(),
  ),
  namespace: resolvableValue(z.string().optional()),
  policy_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsQuicksightIamPolicyAssignmentOutputSchema = z.object({
  assignment_id: z.string().optional(),
  id: z.string().optional(),
})

export type AwsQuicksightIamPolicyAssignmentInputProps =
  & z.input<typeof AwsQuicksightIamPolicyAssignmentInputSchema>
  & NodeProps

export type AwsQuicksightIamPolicyAssignmentOutputProps =
  & z.output<typeof AwsQuicksightIamPolicyAssignmentOutputSchema>
  & z.output<typeof AwsQuicksightIamPolicyAssignmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/quicksight_iam_policy_assignment

export function AwsQuicksightIamPolicyAssignment(
  props: Partial<AwsQuicksightIamPolicyAssignmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_iam_policy_assignment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsQuicksightIamPolicyAssignmentInputSchema}
      _outputSchema={AwsQuicksightIamPolicyAssignmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightIamPolicyAssignment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsQuicksightIamPolicyAssignmentOutputProps>(
    AwsQuicksightIamPolicyAssignment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsQuicksightIamPolicyAssignments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsQuicksightIamPolicyAssignmentOutputProps>(
    AwsQuicksightIamPolicyAssignment,
    idFilter,
    baseNode,
    optional,
  )
