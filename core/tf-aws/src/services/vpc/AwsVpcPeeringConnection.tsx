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

export const InputSchema = TfMetaSchema.extend({
  peer_vpc_id: resolvableValue(z.string()),
  vpc_id: resolvableValue(z.string()),
  accepter: resolvableValue(
    z.object({
      allow_remote_vpc_dns_resolution: z.boolean().optional(),
    }).optional(),
  ),
  auto_accept: resolvableValue(z.boolean().optional()),
  peer_owner_id: resolvableValue(z.string().optional()),
  peer_region: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  requester: resolvableValue(
    z.object({
      allow_remote_vpc_dns_resolution: z.boolean().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  accept_status: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/vpc_peering_connection

export function AwsVpcPeeringConnection(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_peering_connection'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcPeeringConnection = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsVpcPeeringConnection,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcPeeringConnections = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsVpcPeeringConnection,
    idFilter,
    baseNode,
    optional,
  )
