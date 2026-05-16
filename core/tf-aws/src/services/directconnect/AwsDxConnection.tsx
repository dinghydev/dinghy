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

export const AwsDxConnectionInputSchema = TfMetaSchema.extend({
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

export const AwsDxConnectionOutputSchema = z.object({
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

export type AwsDxConnectionInputProps =
  & z.input<typeof AwsDxConnectionInputSchema>
  & NodeProps

export type AwsDxConnectionOutputProps =
  & z.output<typeof AwsDxConnectionOutputSchema>
  & z.output<typeof AwsDxConnectionInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dx_connection

export function AwsDxConnection(props: Partial<AwsDxConnectionInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dx_connection'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDxConnectionInputSchema}
      _outputSchema={AwsDxConnectionOutputSchema}
      {...props}
    />
  )
}

export const useAwsDxConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDxConnectionOutputProps>(
    AwsDxConnection,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDxConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDxConnectionOutputProps>(
    AwsDxConnection,
    idFilter,
    baseNode,
    optional,
  )
