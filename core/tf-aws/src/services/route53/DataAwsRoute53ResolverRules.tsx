import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsRoute53ResolverRulesInputSchema = TfMetaSchema.extend({
  name_regex: resolvableValue(z.string().optional()),
  owner_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  resolver_endpoint_id: resolvableValue(z.string().optional()),
  rule_type: resolvableValue(z.string().optional()),
  share_status: resolvableValue(z.string().optional()),
})

export const DataAwsRoute53ResolverRulesOutputSchema = z.object({
  id: z.string().optional(),
  resolver_rule_ids: z.set(z.string()).optional(),
})

export type DataAwsRoute53ResolverRulesInputProps =
  & z.input<typeof DataAwsRoute53ResolverRulesInputSchema>
  & NodeProps

export type DataAwsRoute53ResolverRulesOutputProps =
  & z.output<typeof DataAwsRoute53ResolverRulesOutputSchema>
  & z.output<typeof DataAwsRoute53ResolverRulesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/route53_resolver_rules

export function DataAwsRoute53ResolverRules(
  props: Partial<DataAwsRoute53ResolverRulesInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_resolver_rules'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRoute53ResolverRulesInputSchema}
      _outputSchema={DataAwsRoute53ResolverRulesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsRoute53ResolverRuless = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRoute53ResolverRulesOutputProps>(
    DataAwsRoute53ResolverRules,
    idFilter,
    baseNode,
    optional,
  )
