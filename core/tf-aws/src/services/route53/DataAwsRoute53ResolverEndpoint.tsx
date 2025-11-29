import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRoute53ResolverEndpoint } from './AwsRoute53ResolverEndpoint.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/route53_resolver_endpoint

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
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

export const OutputSchema = z.object({
  arn: z.string().optional(),
  direction: z.string().optional(),
  ip_addresses: z.string().array().optional(),
  protocols: z.string().array().optional(),
  resolver_endpoint_type: z.string().optional(),
  status: z.string().optional(),
  vpc_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsRoute53ResolverEndpoint(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsRoute53ResolverEndpoint
      _type='aws_route53_resolver_endpoint'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRoute53ResolverEndpoint = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsRoute53ResolverEndpoint, node, id)

export const useDataAwsRoute53ResolverEndpoints = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsRoute53ResolverEndpoint, node, id)
