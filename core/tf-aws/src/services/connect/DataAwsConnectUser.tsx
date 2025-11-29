import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsConnectUser } from './AwsConnectUser.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/connect_user

export const InputSchema = z.object({
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  user_id: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  directory_user_id: z.string().optional(),
  hierarchy_group_id: z.string().optional(),
  id: z.string().optional(),
  identity_info: z.object({
    email: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    secondary_email: z.string(),
  }).array().optional(),
  instance_id: z.string().optional(),
  phone_config: z.object({
    after_contact_work_time_limit: z.number(),
    auto_accept: z.boolean(),
    desk_phone_number: z.string(),
    phone_type: z.string(),
  }).array().optional(),
  routing_profile_id: z.string().optional(),
  security_profile_ids: z.string().array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsConnectUser(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsConnectUser
      _type='aws_connect_user'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectUser = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsConnectUser, node, id)

export const useDataAwsConnectUsers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsConnectUser, node, id)
