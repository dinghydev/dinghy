import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsConnectUser } from './AwsConnectUser.tsx'

export const InputSchema = z.object({
  instance_id: resolvableValue(z.string()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  user_id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

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
  security_profile_ids: z.set(z.string()).optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/connect_user

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

export const useDataAwsConnectUser = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(DataAwsConnectUser, idFilter, baseNode)

export const useDataAwsConnectUsers = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(DataAwsConnectUser, idFilter, baseNode)
