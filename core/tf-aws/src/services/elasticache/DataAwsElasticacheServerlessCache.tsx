import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsElasticacheServerlessCache } from './AwsElasticacheServerlessCache.tsx'

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  cache_usage_limits: z.object({
    data_storage: z.object({
      maximum: z.number(),
      minimum: z.number(),
      unit: z.string(),
    }),
    ecpu_per_second: z.object({
      maximum: z.number(),
      minimum: z.number(),
    }),
  }).optional(),
  create_time: z.string().optional(),
  daily_snapshot_time: z.string().optional(),
  description: z.string().optional(),
  endpoint: z.object({
    address: z.string(),
    port: z.number(),
  }).optional(),
  engine: z.string().optional(),
  full_engine_version: z.string().optional(),
  kms_key_id: z.string().optional(),
  major_engine_version: z.string().optional(),
  reader_endpoint: z.object({
    address: z.string(),
    port: z.number(),
  }).optional(),
  security_group_ids: z.string().array().optional(),
  snapshot_retention_limit: z.number().optional(),
  status: z.string().optional(),
  subnet_ids: z.string().array().optional(),
  user_group_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/data-sources/elasticache_serverless_cache

export function DataAwsElasticacheServerlessCache(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsElasticacheServerlessCache
      _type='aws_elasticache_serverless_cache'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsElasticacheServerlessCache = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    DataAwsElasticacheServerlessCache,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsElasticacheServerlessCaches = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    DataAwsElasticacheServerlessCache,
    idFilter,
    baseNode,
    optional,
  )
