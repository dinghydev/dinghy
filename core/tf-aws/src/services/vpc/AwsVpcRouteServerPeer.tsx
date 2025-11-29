import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/vpc_route_server_peer

export const InputSchema = z.object({
  peer_address: resolvableValue(z.string()),
  route_server_endpoint_id: resolvableValue(z.string()),
  bgp_options: resolvableValue(
    z.object({
      peer_asn: z.number(),
      peer_liveness_detection: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  endpoint_eni_address: z.string().optional(),
  endpoint_eni_id: z.string().optional(),
  route_server_id: z.string().optional(),
  route_server_peer_id: z.string().optional(),
  subnet_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVpcRouteServerPeer(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_route_server_peer'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcRouteServerPeer = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsVpcRouteServerPeer, node, id)

export const useAwsVpcRouteServerPeers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsVpcRouteServerPeer, node, id)
