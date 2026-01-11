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

export const InputSchema = z.object({
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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  share_status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/route53_resolver_rule

export function AwsRoute53ResolverRule(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_resolver_rule'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsRoute53ResolverRule = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    AwsRoute53ResolverRule,
    idFilter,
    baseNode,
    optional,
  )
