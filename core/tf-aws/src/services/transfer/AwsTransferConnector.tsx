import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/transfer_connector

export const InputSchema = z.object({
  access_role: resolvableValue(z.string()),
  connector_id: resolvableValue(z.string()),
  url: resolvableValue(z.string()),
  as2_config: resolvableValue(
    z.object({
      compression: z.string(),
      encryption_algorithm: z.string(),
      local_profile_id: z.string(),
      mdn_response: z.string(),
      mdn_signing_algorithm: z.string().optional(),
      message_subject: z.string().optional(),
      partner_profile_id: z.string(),
      signing_algorithm: z.string(),
    }).optional(),
  ),
  id: resolvableValue(z.string().optional()),
  logging_role: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  security_policy_name: resolvableValue(z.string().optional()),
  sftp_config: resolvableValue(
    z.object({
      trusted_host_keys: z.string().array().optional(),
      user_secret_id: z.string().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsTransferConnector(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_transfer_connector'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsTransferConnector = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsTransferConnector, node, id)

export const useAwsTransferConnectors = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsTransferConnector, node, id)
