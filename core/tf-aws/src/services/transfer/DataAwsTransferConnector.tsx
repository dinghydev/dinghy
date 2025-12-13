import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsTransferConnector } from './AwsTransferConnector.tsx'

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  access_role: z.string().optional(),
  arn: z.string().optional(),
  as2_config: z.object({
    basic_auth_secret_id: z.string(),
    compression: z.string(),
    encryption_algorithm: z.string(),
    local_profile_id: z.string(),
    mdn_response: z.string(),
    mdn_signing_algorithm: z.string(),
    message_subject: z.string(),
    partner_profile_id: z.string(),
    singing_algorithm: z.string(),
  }).array().optional(),
  logging_role: z.string().optional(),
  security_policy_name: z.string().optional(),
  service_managed_egress_ip_addresses: z.string().array().optional(),
  sftp_config: z.object({
    trusted_host_keys: z.string().array(),
    user_secret_id: z.string(),
  }).array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  url: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/transfer_connector

export function DataAwsTransferConnector(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsTransferConnector
      _type='aws_transfer_connector'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsTransferConnector = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(DataAwsTransferConnector, idFilter, baseNode)

export const useDataAwsTransferConnectors = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(DataAwsTransferConnector, idFilter, baseNode)
