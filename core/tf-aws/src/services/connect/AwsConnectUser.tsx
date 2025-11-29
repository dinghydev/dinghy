import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/connect_user

export const InputSchema = z.object({
  instance_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  routing_profile_id: resolvableValue(z.string()),
  security_profile_ids: resolvableValue(z.string().array()),
  directory_user_id: resolvableValue(z.string().optional()),
  hierarchy_group_id: resolvableValue(z.string().optional()),
  identity_info: resolvableValue(
    z.object({
      email: z.string().optional(),
      first_name: z.string().optional(),
      last_name: z.string().optional(),
      secondary_email: z.string().optional(),
    }).optional(),
  ),
  password: resolvableValue(z.string().optional()),
  phone_config: resolvableValue(z.object({
    after_contact_work_time_limit: z.number().optional(),
    auto_accept: z.boolean().optional(),
    desk_phone_number: z.string().optional(),
    phone_type: z.string(),
  })),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  user_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsConnectUser(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_connect_user'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsConnectUser = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsConnectUser, node, id)

export const useAwsConnectUsers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsConnectUser, node, id)
