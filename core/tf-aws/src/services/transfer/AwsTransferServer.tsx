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
  certificate: resolvableValue(z.string().optional()),
  directory_id: resolvableValue(z.string().optional()),
  domain: resolvableValue(z.string().optional()),
  endpoint_details: resolvableValue(
    z.object({
      address_allocation_ids: z.string().array().optional(),
      security_group_ids: z.string().array().optional(),
      subnet_ids: z.string().array().optional(),
      vpc_endpoint_id: z.string().optional(),
      vpc_id: z.string().optional(),
    }).optional(),
  ),
  endpoint_type: resolvableValue(z.string().optional()),
  force_destroy: resolvableValue(z.boolean().optional()),
  function: resolvableValue(z.string().optional()),
  host_key: resolvableValue(z.string().optional()),
  identity_provider_type: resolvableValue(z.string().optional()),
  invocation_role: resolvableValue(z.string().optional()),
  logging_role: resolvableValue(z.string().optional()),
  post_authentication_login_banner: resolvableValue(z.string().optional()),
  pre_authentication_login_banner: resolvableValue(z.string().optional()),
  protocol_details: resolvableValue(
    z.object({
      as2_transports: z.string().array().optional(),
      passive_ip: z.string().optional(),
      set_stat_option: z.string().optional(),
      tls_session_resumption_mode: z.string().optional(),
    }).optional(),
  ),
  protocols: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  s3_storage_options: resolvableValue(
    z.object({
      directory_listing_optimization: z.string().optional(),
    }).optional(),
  ),
  security_policy_name: resolvableValue(z.string().optional()),
  sftp_authentication_methods: resolvableValue(z.string().optional()),
  structured_log_destinations: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  url: resolvableValue(z.string().optional()),
  workflow_details: resolvableValue(
    z.object({
      on_partial_upload: z.object({
        execution_role: z.string(),
        workflow_id: z.string(),
      }).optional(),
      on_upload: z.object({
        execution_role: z.string(),
        workflow_id: z.string(),
      }).optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  endpoint: z.string().optional(),
  host_key_fingerprint: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/transfer_server

export function AwsTransferServer(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_transfer_server'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsTransferServer = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsTransferServer, idFilter, baseNode)

export const useAwsTransferServers = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsTransferServer, idFilter, baseNode)
