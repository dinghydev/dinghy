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

export const AwsQuicksightUserInputSchema = TfMetaSchema.extend({
  email: resolvableValue(z.string()),
  identity_type: resolvableValue(z.string()),
  user_role: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  iam_arn: resolvableValue(z.string().optional()),
  namespace: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  session_name: resolvableValue(z.string().optional()),
  user_name: resolvableValue(z.string().optional()),
})

export const AwsQuicksightUserOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  user_invitation_url: z.string().optional(),
})

export type AwsQuicksightUserInputProps =
  & z.input<typeof AwsQuicksightUserInputSchema>
  & NodeProps

export type AwsQuicksightUserOutputProps =
  & z.output<typeof AwsQuicksightUserOutputSchema>
  & z.output<typeof AwsQuicksightUserInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/quicksight_user

export function AwsQuicksightUser(props: Partial<AwsQuicksightUserInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_user'
      _category='resource'
      _title={_title}
      _inputSchema={AwsQuicksightUserInputSchema}
      _outputSchema={AwsQuicksightUserOutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightUser = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsQuicksightUserOutputProps>(
    AwsQuicksightUser,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsQuicksightUsers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsQuicksightUserOutputProps>(
    AwsQuicksightUser,
    idFilter,
    baseNode,
    optional,
  )
