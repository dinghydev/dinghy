import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMskVpcConnection } from './AwsMskVpcConnection.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/msk_vpc_connection

export const InputSchema = z.object({
  arn: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  authentication: z.string().optional(),
  client_subnets: z.string().array().optional(),
  security_groups: z.string().array().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  target_cluster_arn: z.string().optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsMskVpcConnection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsMskVpcConnection
      _type='aws_msk_vpc_connection'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMskVpcConnection = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsMskVpcConnection, node, id)

export const useDataAwsMskVpcConnections = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsMskVpcConnection, node, id)
