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

export const AwsQuicksightGroupMembershipInputSchema = TfMetaSchema.extend({
  group_name: resolvableValue(z.string()),
  member_name: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  namespace: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsQuicksightGroupMembershipOutputSchema = z.object({
  arn: z.string().optional(),
})

export type AwsQuicksightGroupMembershipInputProps =
  & z.input<typeof AwsQuicksightGroupMembershipInputSchema>
  & NodeProps

export type AwsQuicksightGroupMembershipOutputProps =
  & z.output<typeof AwsQuicksightGroupMembershipOutputSchema>
  & z.output<typeof AwsQuicksightGroupMembershipInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/quicksight_group_membership

export function AwsQuicksightGroupMembership(
  props: Partial<AwsQuicksightGroupMembershipInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_group_membership'
      _category='resource'
      _title={_title}
      _inputSchema={AwsQuicksightGroupMembershipInputSchema}
      _outputSchema={AwsQuicksightGroupMembershipOutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightGroupMembership = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsQuicksightGroupMembershipOutputProps>(
    AwsQuicksightGroupMembership,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsQuicksightGroupMemberships = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsQuicksightGroupMembershipOutputProps>(
    AwsQuicksightGroupMembership,
    idFilter,
    baseNode,
    optional,
  )
