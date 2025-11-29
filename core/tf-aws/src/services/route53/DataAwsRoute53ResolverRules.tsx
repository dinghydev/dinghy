import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/route53_resolver_rules

export const InputSchema = z.object({
  name_regex: resolvableValue(z.string().optional()),
  owner_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  resolver_endpoint_id: resolvableValue(z.string().optional()),
  rule_type: resolvableValue(z.string().optional()),
  share_status: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  resolver_rule_ids: z.string().array().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsRoute53ResolverRules(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_resolver_rules'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsRoute53ResolverRuless = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsRoute53ResolverRules, node, id)
