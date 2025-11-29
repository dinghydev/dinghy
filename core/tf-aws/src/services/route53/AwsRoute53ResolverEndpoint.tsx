import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/route53_resolver_endpoint

export const InputSchema = z.object({
  direction: resolvableValue(z.string()),
  security_group_ids: resolvableValue(z.string().array()),
  ip_address: resolvableValue(
    z.object({
      ip: z.string().optional(),
      ip_id: z.string(),
      ipv6: z.string().optional(),
      subnet_id: z.string(),
    }).array().optional(),
  ),
  name: resolvableValue(z.string().optional()),
  protocols: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  resolver_endpoint_type: resolvableValue(z.string().optional()),
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
  host_vpc_id: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsRoute53ResolverEndpoint(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_resolver_endpoint'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53ResolverEndpoint = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsRoute53ResolverEndpoint, node, id)

export const useAwsRoute53ResolverEndpoints = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsRoute53ResolverEndpoint, node, id)
