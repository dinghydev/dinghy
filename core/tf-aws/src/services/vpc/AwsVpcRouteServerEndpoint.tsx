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

export const AwsVpcRouteServerEndpointInputSchema = TfMetaSchema.extend({
  route_server_id: resolvableValue(z.string()),
  subnet_id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsVpcRouteServerEndpointOutputSchema = z.object({
  arn: z.string().optional(),
  eni_address: z.string().optional(),
  eni_id: z.string().optional(),
  route_server_endpoint_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  vpc_id: z.string().optional(),
})

export type AwsVpcRouteServerEndpointInputProps =
  & z.input<typeof AwsVpcRouteServerEndpointInputSchema>
  & NodeProps

export type AwsVpcRouteServerEndpointOutputProps =
  & z.output<typeof AwsVpcRouteServerEndpointOutputSchema>
  & z.output<typeof AwsVpcRouteServerEndpointInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/vpc_route_server_endpoint

export function AwsVpcRouteServerEndpoint(
  props: Partial<AwsVpcRouteServerEndpointInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_vpc_route_server_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={AwsVpcRouteServerEndpointInputSchema}
      _outputSchema={AwsVpcRouteServerEndpointOutputSchema}
      {...props}
    />
  )
}

export const useAwsVpcRouteServerEndpoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsVpcRouteServerEndpointOutputProps>(
    AwsVpcRouteServerEndpoint,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsVpcRouteServerEndpoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsVpcRouteServerEndpointOutputProps>(
    AwsVpcRouteServerEndpoint,
    idFilter,
    baseNode,
    optional,
  )
