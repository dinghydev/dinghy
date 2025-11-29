import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsQuicksightUser } from './AwsQuicksightUser.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/quicksight_user

export const InputSchema = z.object({
  user_name: resolvableValue(z.string()),
  aws_account_id: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  namespace: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

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

export function DataAwsQuicksightUser(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
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

export const useDataAwsQuicksightUser = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsQuicksightUser, node, id)

export const useDataAwsQuicksightUsers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsQuicksightUser, node, id)
