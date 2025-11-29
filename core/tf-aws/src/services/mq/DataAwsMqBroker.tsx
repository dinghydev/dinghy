import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMqBroker } from './AwsMqBroker.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/mq_broker

export const InputSchema = z.object({
  broker_id: resolvableValue(z.string().optional()),
  broker_name: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  authentication_strategy: z.string().optional(),
  auto_minor_version_upgrade: z.boolean().optional(),
  configuration: z.object({
    id: z.string(),
    revision: z.number(),
  }).array().optional(),
  deployment_mode: z.string().optional(),
  encryption_options: z.object({
    kms_key_id: z.string(),
    use_aws_owned_key: z.boolean(),
  }).array().optional(),
  engine_type: z.string().optional(),
  engine_version: z.string().optional(),
  host_instance_type: z.string().optional(),
  instances: z.object({
    console_url: z.string(),
    endpoints: z.string().array(),
    ip_address: z.string(),
  }).array().optional(),
  ldap_server_metadata: z.object({
    hosts: z.string().array(),
    role_base: z.string(),
    role_name: z.string(),
    role_search_matching: z.string(),
    role_search_subtree: z.boolean(),
    service_account_password: z.string(),
    service_account_username: z.string(),
    user_base: z.string(),
    user_role_name: z.string(),
    user_search_matching: z.string(),
    user_search_subtree: z.boolean(),
  }).array().optional(),
  logs: z.object({
    audit: z.string(),
    general: z.boolean(),
  }).array().optional(),
  maintenance_window_start_time: z.object({
    day_of_week: z.string(),
    time_of_day: z.string(),
    time_zone: z.string(),
  }).array().optional(),
  publicly_accessible: z.boolean().optional(),
  security_groups: z.string().array().optional(),
  storage_type: z.string().optional(),
  subnet_ids: z.string().array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  user: z.object({
    console_access: z.boolean(),
    groups: z.string().array(),
    replication_user: z.boolean(),
    username: z.string(),
  }).array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsMqBroker(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsMqBroker
      _type='aws_mq_broker'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMqBroker = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsMqBroker, node, id)

export const useDataAwsMqBrokers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsMqBroker, node, id)
