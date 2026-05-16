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

export const AwsRoute53ResolverEndpointInputSchema = TfMetaSchema.extend({
  direction: resolvableValue(z.string()),
  security_group_ids: resolvableValue(z.string().array()),
  ip_address: resolvableValue(
    z.object({
      ip: z.string().optional(),
      ip_id: z.string().optional(),
      ipv6: z.string().optional(),
      subnet_id: z.string(),
    }).array().optional(),
  ),
  name: resolvableValue(z.string().optional()),
  protocols: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  resolver_endpoint_type: resolvableValue(z.string().optional()),
  rni_enhanced_metrics_enabled: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  target_name_server_metrics_enabled: resolvableValue(z.boolean().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsRoute53ResolverEndpointOutputSchema = z.object({
  arn: z.string().optional(),
  host_vpc_id: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRoute53ResolverEndpointInputProps =
  & z.input<typeof AwsRoute53ResolverEndpointInputSchema>
  & NodeProps

export type AwsRoute53ResolverEndpointOutputProps =
  & z.output<typeof AwsRoute53ResolverEndpointOutputSchema>
  & z.output<typeof AwsRoute53ResolverEndpointInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53_resolver_endpoint

export function AwsRoute53ResolverEndpoint(
  props: Partial<AwsRoute53ResolverEndpointInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_resolver_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53ResolverEndpointInputSchema}
      _outputSchema={AwsRoute53ResolverEndpointOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53ResolverEndpoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53ResolverEndpointOutputProps>(
    AwsRoute53ResolverEndpoint,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53ResolverEndpoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53ResolverEndpointOutputProps>(
    AwsRoute53ResolverEndpoint,
    idFilter,
    baseNode,
    optional,
  )
