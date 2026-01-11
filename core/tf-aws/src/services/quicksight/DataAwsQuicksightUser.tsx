import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsQuicksightUser } from './AwsQuicksightUser.tsx'

export const InputSchema = z.object({
  user_name: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  namespace: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  active: z.boolean().optional(),
  arn: z.string().optional(),
  custom_permissions_name: z.string().optional(),
  email: z.string().optional(),
  identity_type: z.string().optional(),
  principal_id: z.string().optional(),
  user_role: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/quicksight_user

export function DataAwsQuicksightUser(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsQuicksightUser
      _type='aws_quicksight_user'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsQuicksightUser = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(DataAwsQuicksightUser, idFilter, baseNode, optional)

export const useDataAwsQuicksightUsers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsQuicksightUser,
    idFilter,
    baseNode,
    optional,
  )
