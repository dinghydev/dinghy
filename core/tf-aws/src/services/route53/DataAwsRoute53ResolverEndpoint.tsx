import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRoute53ResolverEndpoint } from './AwsRoute53ResolverEndpoint.tsx'

export const DataAwsRoute53ResolverEndpointInputSchema = TfMetaSchema.extend({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  resolver_endpoint_id: resolvableValue(z.string().optional()),
})

export const DataAwsRoute53ResolverEndpointOutputSchema = z.object({
  arn: z.string().optional(),
  direction: z.string().optional(),
  ip_addresses: z.set(z.string()).optional(),
  name: z.string().optional(),
  protocols: z.set(z.string()).optional(),
  resolver_endpoint_type: z.string().optional(),
  rni_enhanced_metrics_enabled: z.boolean().optional(),
  status: z.string().optional(),
  target_name_server_metrics_enabled: z.boolean().optional(),
  vpc_id: z.string().optional(),
})

export type DataAwsRoute53ResolverEndpointInputProps =
  & z.input<typeof DataAwsRoute53ResolverEndpointInputSchema>
  & NodeProps

export type DataAwsRoute53ResolverEndpointOutputProps =
  & z.output<typeof DataAwsRoute53ResolverEndpointOutputSchema>
  & z.output<typeof DataAwsRoute53ResolverEndpointInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/route53_resolver_endpoint

export function DataAwsRoute53ResolverEndpoint(
  props: Partial<DataAwsRoute53ResolverEndpointInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsRoute53ResolverEndpoint
      _type='aws_route53_resolver_endpoint'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRoute53ResolverEndpointInputSchema}
      _outputSchema={DataAwsRoute53ResolverEndpointOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRoute53ResolverEndpoint = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsRoute53ResolverEndpointOutputProps>(
    DataAwsRoute53ResolverEndpoint,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsRoute53ResolverEndpoints = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRoute53ResolverEndpointOutputProps>(
    DataAwsRoute53ResolverEndpoint,
    idFilter,
    baseNode,
    optional,
  )
