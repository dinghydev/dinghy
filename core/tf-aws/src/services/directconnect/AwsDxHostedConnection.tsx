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

export const AwsDxHostedConnectionInputSchema = TfMetaSchema.extend({
  bandwidth: resolvableValue(z.string()),
  connection_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  owner_account_id: resolvableValue(z.string()),
  vlan: resolvableValue(z.number()),
})

export const AwsDxHostedConnectionOutputSchema = z.object({
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

export type AwsDxHostedConnectionInputProps =
  & z.input<typeof AwsDxHostedConnectionInputSchema>
  & NodeProps

export type AwsDxHostedConnectionOutputProps =
  & z.output<typeof AwsDxHostedConnectionOutputSchema>
  & z.output<typeof AwsDxHostedConnectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dx_hosted_connection

export function AwsDxHostedConnection(
  props: Partial<AwsDxHostedConnectionInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_hosted_connection'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDxHostedConnectionInputSchema}
      _outputSchema={AwsDxHostedConnectionOutputSchema}
      {...props}
    />
  )
}

export const useAwsDxHostedConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDxHostedConnectionOutputProps>(
    AwsDxHostedConnection,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDxHostedConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDxHostedConnectionOutputProps>(
    AwsDxHostedConnection,
    idFilter,
    baseNode,
    optional,
  )
