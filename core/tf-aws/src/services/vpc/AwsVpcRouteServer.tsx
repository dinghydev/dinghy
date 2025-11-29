import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/vpc_route_server

export const InputSchema = z.object({
  amazon_side_asn: resolvableValue(z.number()),
  persist_routes: resolvableValue(z.string().optional()),
  persist_routes_duration: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  sns_notifications_enabled: resolvableValue(z.boolean().optional()),
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
  arn: z.string().optional(),
  route_server_id: z.string().optional(),
  sns_topic_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsVpcRouteServer(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_route_server'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcRouteServer = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsVpcRouteServer, node, id)

export const useAwsVpcRouteServers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsVpcRouteServer, node, id)
