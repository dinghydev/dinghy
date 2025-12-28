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
  broker_name: resolvableValue(z.string()),
  engine_type: resolvableValue(z.string()),
  engine_version: resolvableValue(z.string()),
  host_instance_type: resolvableValue(z.string()),
  user: resolvableValue(
    z.object({
      console_access: z.boolean().optional(),
      groups: z.string().array().optional(),
      password: z.string(),
      replication_user: z.boolean().optional(),
      username: z.string(),
    }).array(),
  ),
  apply_immediately: resolvableValue(z.boolean().optional()),
  authentication_strategy: resolvableValue(z.string().optional()),
  auto_minor_version_upgrade: resolvableValue(z.boolean().optional()),
  configuration: resolvableValue(
    z.object({
      id: z.string().optional(),
      revision: z.number().optional(),
    }).optional(),
  ),
  data_replication_mode: resolvableValue(z.string().optional()),
  data_replication_primary_broker_arn: resolvableValue(z.string().optional()),
  deployment_mode: resolvableValue(z.string().optional()),
  encryption_options: resolvableValue(
    z.object({
      kms_key_id: z.string().optional(),
      use_aws_owned_key: z.boolean().optional(),
    }).optional(),
  ),
  ldap_server_metadata: resolvableValue(
    z.object({
      hosts: z.string().array().optional(),
      role_base: z.string().optional(),
      role_name: z.string().optional(),
      role_search_matching: z.string().optional(),
      role_search_subtree: z.boolean().optional(),
      service_account_password: z.string().optional(),
      service_account_username: z.string().optional(),
      user_base: z.string().optional(),
      user_role_name: z.string().optional(),
      user_search_matching: z.string().optional(),
      user_search_subtree: z.boolean().optional(),
    }).optional(),
  ),
  logs: resolvableValue(
    z.object({
      audit: z.string().optional(),
      general: z.boolean().optional(),
    }).optional(),
  ),
  maintenance_window_start_time: resolvableValue(
    z.object({
      day_of_week: z.string(),
      time_of_day: z.string(),
      time_zone: z.string(),
    }).optional(),
  ),
  publicly_accessible: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  security_groups: resolvableValue(z.string().array().optional()),
  storage_type: resolvableValue(z.string().optional()),
  subnet_ids: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  instances: z.object({
    console_url: z.string(),
    endpoints: z.string().array(),
    ip_address: z.string(),
  }).array().optional(),
  pending_data_replication_mode: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/mq_broker

export function AwsMqBroker(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_mq_broker'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsMqBroker = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsMqBroker, idFilter, baseNode, optional)

export const useAwsMqBrokers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsMqBroker, idFilter, baseNode, optional)
