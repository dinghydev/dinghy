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

export const InputSchema = z.object({
  email: resolvableValue(z.string()),
  identity_type: resolvableValue(z.string()),
  user_role: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  iam_arn: resolvableValue(z.string().optional()),
  namespace: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  session_name: resolvableValue(z.string().optional()),
  user_name: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  user_invitation_url: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/quicksight_user

export function AwsQuicksightUser(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_quicksight_user'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsQuicksightUser = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsQuicksightUser, idFilter, baseNode)

export const useAwsQuicksightUsers = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsQuicksightUser, idFilter, baseNode)
