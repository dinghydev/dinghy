import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dx_hosted_connection

export const InputSchema = z.object({
  bandwidth: resolvableValue(z.string()),
  connection_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  owner_account_id: resolvableValue(z.string()),
  vlan: resolvableValue(z.number()),
})

export const OutputSchema = z.object({
  aws_device: z.string().optional(),
  connection_region: z.string().optional(),
  has_logical_redundancy: z.string().optional(),
  id: z.string().optional(),
  jumbo_frame_capable: z.boolean().optional(),
  lag_id: z.string().optional(),
  loa_issue_time: z.string().optional(),
  location: z.string().optional(),
  partner_name: z.string().optional(),
  provider_name: z.string().optional(),
  region: z.string().optional(),
  state: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDxHostedConnection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_hosted_connection'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDxHostedConnection = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDxHostedConnection, node, id)

export const useAwsDxHostedConnections = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDxHostedConnection, node, id)
