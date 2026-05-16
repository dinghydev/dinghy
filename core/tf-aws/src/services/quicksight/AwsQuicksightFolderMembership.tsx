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

export const AwsQuicksightFolderMembershipInputSchema = TfMetaSchema.extend({
  folder_id: resolvableValue(z.string()),
  member_id: resolvableValue(z.string()),
  member_type: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const AwsQuicksightFolderMembershipOutputSchema = z.object({
  id: z.string().optional(),
})

export type AwsQuicksightFolderMembershipInputProps =
  & z.input<typeof AwsQuicksightFolderMembershipInputSchema>
  & NodeProps

export type AwsQuicksightFolderMembershipOutputProps =
  & z.output<typeof AwsQuicksightFolderMembershipOutputSchema>
  & z.output<typeof AwsQuicksightFolderMembershipInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/quicksight_folder_membership

export function AwsQuicksightFolderMembership(
  props: Partial<AwsQuicksightFolderMembershipInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_folder_membership'
      _category='resource'
      _title={_title}
      _inputSchema={AwsQuicksightFolderMembershipInputSchema}
      _outputSchema={AwsQuicksightFolderMembershipOutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightFolderMembership = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsQuicksightFolderMembershipOutputProps>(
    AwsQuicksightFolderMembership,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsQuicksightFolderMemberships = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsQuicksightFolderMembershipOutputProps>(
    AwsQuicksightFolderMembership,
    idFilter,
    baseNode,
    optional,
  )
