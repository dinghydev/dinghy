import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsRoute53ResolverQueryLogConfig } from './AwsRoute53ResolverQueryLogConfig.tsx'

export const DataAwsRoute53ResolverQueryLogConfigInputSchema = TfMetaSchema
  .extend({
    filter: resolvableValue(
      z.object({
        name: z.string(),
        values: z.string().array(),
      }).array().optional(),
    ),
    region: resolvableValue(z.string().optional()),
    resolver_query_log_config_id: resolvableValue(z.string().optional()),
  })

export const DataAwsRoute53ResolverQueryLogConfigOutputSchema = z.object({
  arn: z.string().optional(),
  destination_arn: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
  owner_id: z.string().optional(),
  share_status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsRoute53ResolverQueryLogConfigInputProps =
  & z.input<typeof DataAwsRoute53ResolverQueryLogConfigInputSchema>
  & NodeProps

export type DataAwsRoute53ResolverQueryLogConfigOutputProps =
  & z.output<typeof DataAwsRoute53ResolverQueryLogConfigOutputSchema>
  & z.output<typeof DataAwsRoute53ResolverQueryLogConfigInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/route53_resolver_query_log_config

export function DataAwsRoute53ResolverQueryLogConfig(
  props: Partial<DataAwsRoute53ResolverQueryLogConfigInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsRoute53ResolverQueryLogConfig
      _type='aws_route53_resolver_query_log_config'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsRoute53ResolverQueryLogConfigInputSchema}
      _outputSchema={DataAwsRoute53ResolverQueryLogConfigOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRoute53ResolverQueryLogConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsRoute53ResolverQueryLogConfigOutputProps>(
    DataAwsRoute53ResolverQueryLogConfig,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsRoute53ResolverQueryLogConfigs = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsRoute53ResolverQueryLogConfigOutputProps>(
    DataAwsRoute53ResolverQueryLogConfig,
    idFilter,
    baseNode,
    optional,
  )
