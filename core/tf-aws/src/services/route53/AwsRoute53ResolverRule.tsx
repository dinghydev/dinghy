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

export const AwsRoute53ResolverRuleInputSchema = TfMetaSchema.extend({
  domain_name: resolvableValue(z.string()),
  rule_type: resolvableValue(z.string()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  resolver_endpoint_id: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  target_ip: resolvableValue(
    z.object({
      ip: z.string().optional(),
      ipv6: z.string().optional(),
      port: z.number().optional(),
      protocol: z.string().optional(),
    }).array().optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsRoute53ResolverRuleOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  share_status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsRoute53ResolverRuleImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsRoute53ResolverRuleInputProps =
  & z.input<typeof AwsRoute53ResolverRuleInputSchema>
  & z.input<typeof AwsRoute53ResolverRuleImportSchema>
  & NodeProps

export type AwsRoute53ResolverRuleOutputProps =
  & z.output<typeof AwsRoute53ResolverRuleOutputSchema>
  & z.output<typeof AwsRoute53ResolverRuleInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53_resolver_rule

export function AwsRoute53ResolverRule(
  props: Partial<AwsRoute53ResolverRuleInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_resolver_rule'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53ResolverRuleInputSchema}
      _outputSchema={AwsRoute53ResolverRuleOutputSchema}
      _importSchema={AwsRoute53ResolverRuleImportSchema}
      {...props}
    />
  )
}

export const useAwsRoute53ResolverRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53ResolverRuleOutputProps>(
    AwsRoute53ResolverRule,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53ResolverRules = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53ResolverRuleOutputProps>(
    AwsRoute53ResolverRule,
    idFilter,
    baseNode,
    optional,
  )
