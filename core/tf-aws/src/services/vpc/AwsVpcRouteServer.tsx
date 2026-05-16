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

export const AwsVpcRouteServerInputSchema = TfMetaSchema.extend({
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

export const AwsVpcRouteServerOutputSchema = z.object({
  arn: z.string().optional(),
  route_server_id: z.string().optional(),
  sns_topic_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsVpcRouteServerInputProps =
  & z.input<typeof AwsVpcRouteServerInputSchema>
  & NodeProps

export type AwsVpcRouteServerOutputProps =
  & z.output<typeof AwsVpcRouteServerOutputSchema>
  & z.output<typeof AwsVpcRouteServerInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_route_server

export function AwsVpcRouteServer(props: Partial<AwsVpcRouteServerInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_route_server'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcRouteServerInputSchema}
      _outputSchema={AwsVpcRouteServerOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcRouteServer = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcRouteServerOutputProps>(
    AwsVpcRouteServer,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcRouteServers = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcRouteServerOutputProps>(
    AwsVpcRouteServer,
    idFilter,
    baseNode,
    optional,
  )
