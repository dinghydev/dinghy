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
  vpc_peering_connection_id: resolvableValue(z.string()),
  auto_accept: resolvableValue(z.boolean().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  accept_status: z.string().optional(),
  accepter: z.object({
    allow_remote_vpc_dns_resolution: z.boolean().optional(),
  }).optional().optional(),
  id: z.string().optional(),
  peer_owner_id: z.string().optional(),
  peer_region: z.string().optional(),
  peer_vpc_id: z.string().optional(),
  requester: z.object({
    allow_remote_vpc_dns_resolution: z.boolean().optional(),
  }).optional().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/vpc_peering_connection_accepter

export function AwsVpcPeeringConnectionAccepter(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_peering_connection_accepter'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcPeeringConnectionAccepter = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsVpcPeeringConnectionAccepter,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcPeeringConnectionAccepters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsVpcPeeringConnectionAccepter,
    idFilter,
    baseNode,
    optional,
  )
