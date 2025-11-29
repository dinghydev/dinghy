import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsCodestarconnectionsConnection } from './AwsCodestarconnectionsConnection.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/codestarconnections_connection

export const InputSchema = z.object({
  arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  connection_status: z.string().optional(),
  host_arn: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  provider_type: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsCodestarconnectionsConnection(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsCodestarconnectionsConnection
      _type='aws_codestarconnections_connection'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsCodestarconnectionsConnection = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsCodestarconnectionsConnection, node, id)

export const useDataAwsCodestarconnectionsConnections = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsCodestarconnectionsConnection, node, id)
