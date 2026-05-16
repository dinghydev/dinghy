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

export const AwsRoute53ResolverQueryLogConfigInputSchema = TfMetaSchema.extend({
  destination_arn: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsRoute53ResolverQueryLogConfigOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  owner_id: z.string().optional(),
  share_status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsRoute53ResolverQueryLogConfigInputProps =
  & z.input<typeof AwsRoute53ResolverQueryLogConfigInputSchema>
  & NodeProps

export type AwsRoute53ResolverQueryLogConfigOutputProps =
  & z.output<typeof AwsRoute53ResolverQueryLogConfigOutputSchema>
  & z.output<typeof AwsRoute53ResolverQueryLogConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/route53_resolver_query_log_config

export function AwsRoute53ResolverQueryLogConfig(
  props: Partial<AwsRoute53ResolverQueryLogConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_route53_resolver_query_log_config'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRoute53ResolverQueryLogConfigInputSchema}
      _outputSchema={AwsRoute53ResolverQueryLogConfigOutputSchema}
      {...props}
    />
  )
}

export const useAwsRoute53ResolverQueryLogConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRoute53ResolverQueryLogConfigOutputProps>(
    AwsRoute53ResolverQueryLogConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRoute53ResolverQueryLogConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRoute53ResolverQueryLogConfigOutputProps>(
    AwsRoute53ResolverQueryLogConfig,
    idFilter,
    baseNode,
    optional,
  )
