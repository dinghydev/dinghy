import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/dx_connection

export const InputSchema = z.object({
  bandwidth: resolvableValue(z.string()),
  location: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  encryption_mode: resolvableValue(z.string().optional()),
  provider_name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  request_macsec: resolvableValue(z.boolean().optional()),
  skip_destroy: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  aws_device: z.string().optional(),
  has_logical_redundancy: z.string().optional(),
  id: z.string().optional(),
  jumbo_frame_capable: z.boolean().optional(),
  macsec_capable: z.boolean().optional(),
  owner_account_id: z.string().optional(),
  partner_name: z.string().optional(),
  port_encryption_status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vlan_id: z.number().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsDxConnection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_connection'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDxConnection = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsDxConnection, node, id)

export const useAwsDxConnections = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsDxConnection, node, id)
