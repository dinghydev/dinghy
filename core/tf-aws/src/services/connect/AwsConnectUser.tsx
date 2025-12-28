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
  instance_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  phone_config: resolvableValue(z.object({
    after_contact_work_time_limit: z.number().optional(),
    auto_accept: z.boolean().optional(),
    desk_phone_number: z.string().optional(),
    phone_type: z.string(),
  })),
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
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/connect_user

export function AwsConnectUser(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsConnectUser = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsConnectUser, idFilter, baseNode, optional)

export const useAwsConnectUsers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsConnectUser, idFilter, baseNode, optional)
