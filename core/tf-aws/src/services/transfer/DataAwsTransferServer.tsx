import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsTransferServer } from './AwsTransferServer.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/transfer_server

export const InputSchema = z.object({
  server_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  certificate: z.string().optional(),
  domain: z.string().optional(),
  endpoint: z.string().optional(),
  endpoint_type: z.string().optional(),
  identity_provider_type: z.string().optional(),
  invocation_role: z.string().optional(),
  logging_role: z.string().optional(),
  protocols: z.string().array().optional(),
  security_policy_name: z.string().optional(),
  structured_log_destinations: z.string().array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  url: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsTransferServer(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsTransferServer
      _type='aws_transfer_server'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsTransferServer = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsTransferServer, node, id)

export const useDataAwsTransferServers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsTransferServer, node, id)
