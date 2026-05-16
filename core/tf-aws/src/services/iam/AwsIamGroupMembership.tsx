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

export const AwsIamGroupMembershipInputSchema = TfMetaSchema.extend({
  group: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  users: resolvableValue(z.string().array()),
  id: resolvableValue(z.string().optional()),
})

export const AwsIamGroupMembershipOutputSchema = z.object({
  group: z.string().optional(),
  name: z.string().optional(),
  users: z.set(z.string()).optional(),
})

export type AwsIamGroupMembershipInputProps =
  & z.input<typeof AwsIamGroupMembershipInputSchema>
  & NodeProps

export type AwsIamGroupMembershipOutputProps =
  & z.output<typeof AwsIamGroupMembershipOutputSchema>
  & z.output<typeof AwsIamGroupMembershipInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/iam_group_membership

export function AwsIamGroupMembership(
  props: Partial<AwsIamGroupMembershipInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_iam_group_membership'
      _category='resource'
      _title={_title}
      _inputSchema={AwsIamGroupMembershipInputSchema}
      _outputSchema={AwsIamGroupMembershipOutputSchema}
      {...props}
    />
  )
}

export const useAwsIamGroupMembership = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsIamGroupMembershipOutputProps>(
    AwsIamGroupMembership,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsIamGroupMemberships = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsIamGroupMembershipOutputProps>(
    AwsIamGroupMembership,
    idFilter,
    baseNode,
    optional,
  )
