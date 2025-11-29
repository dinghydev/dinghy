import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRoute53ResolverRule } from './AwsRoute53ResolverRule.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/route53_resolver_rule

export const InputSchema = z.object({
  domain_name: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  resolver_endpoint_id: resolvableValue(z.string().optional()),
  resolver_rule_id: resolvableValue(z.string().optional()),
  rule_type: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  share_status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsRoute53ResolverRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsRoute53ResolverRule
      _type='aws_route53_resolver_rule'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRoute53ResolverRule = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsRoute53ResolverRule, node, id)

export const useDataAwsRoute53ResolverRules = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsRoute53ResolverRule, node, id)
