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

export const InputSchema = z.object({
  filter: resolvableValue(
    z.object({
      name: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  resolver_query_log_config_id: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  destination_arn: z.string().optional(),
  id: z.string().optional(),
  name: z.string().optional(),
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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/route53_resolver_query_log_config

export function DataAwsRoute53ResolverQueryLogConfig(
  props: Partial<InputProps>,
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
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsRoute53ResolverQueryLogConfig = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
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
  useTypedNodes<OutputProps>(
    DataAwsRoute53ResolverQueryLogConfig,
    idFilter,
    baseNode,
    optional,
  )
