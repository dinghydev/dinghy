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
  access_role: resolvableValue(z.string()),
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
  egress_config: resolvableValue(
    z.object({
      vpc_lattice: z.object({
        port_number: z.number().optional(),
        resource_configuration_arn: z.string(),
      }).optional(),
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
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  url: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  connector_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_connector

export function AwsTransferConnector(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
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

export const useAwsTransferConnector = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsTransferConnector, idFilter, baseNode, optional)

export const useAwsTransferConnectors = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsTransferConnector, idFilter, baseNode, optional)
