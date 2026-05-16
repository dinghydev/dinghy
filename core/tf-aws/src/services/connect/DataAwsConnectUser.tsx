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

export const DataAwsConnectUserInputSchema = TfMetaSchema.extend({
  instance_id: resolvableValue(z.string()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  user_id: resolvableValue(z.string().optional()),
})

export const DataAwsConnectUserOutputSchema = z.object({
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

export type DataAwsConnectUserInputProps =
  & z.input<typeof DataAwsConnectUserInputSchema>
  & NodeProps

export type DataAwsConnectUserOutputProps =
  & z.output<typeof DataAwsConnectUserOutputSchema>
  & z.output<typeof DataAwsConnectUserInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/connect_user

export function DataAwsConnectUser(
  props: Partial<DataAwsConnectUserInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsConnectUser
      _type='aws_connect_user'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsConnectUserInputSchema}
      _outputSchema={DataAwsConnectUserOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectUser = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsConnectUserOutputProps>(
    DataAwsConnectUser,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsConnectUsers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsConnectUserOutputProps>(
    DataAwsConnectUser,
    idFilter,
    baseNode,
    optional,
  )
