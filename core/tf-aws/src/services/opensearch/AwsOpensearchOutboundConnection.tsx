import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/opensearch_outbound_connection

export const InputSchema = z.object({
  connection_alias: resolvableValue(z.string()),
  local_domain_info: resolvableValue(z.object({
    domain_name: z.string(),
    owner_id: z.string(),
    region: z.string(),
  })),
  remote_domain_info: resolvableValue(z.object({
    domain_name: z.string(),
    owner_id: z.string(),
    region: z.string(),
  })),
  accept_connection: resolvableValue(z.boolean().optional()),
  connection_mode: resolvableValue(z.string().optional()),
  connection_properties: resolvableValue(
    z.object({
      endpoint: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  connection_status: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsOpensearchOutboundConnection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_opensearch_outbound_connection'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsOpensearchOutboundConnection = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsOpensearchOutboundConnection, node, id)

export const useAwsOpensearchOutboundConnections = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsOpensearchOutboundConnection, node, id)
