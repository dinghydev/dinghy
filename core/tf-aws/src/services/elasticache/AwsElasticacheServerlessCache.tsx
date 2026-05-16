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

export const AwsElasticacheServerlessCacheInputSchema = TfMetaSchema.extend({
  engine: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  cache_usage_limits: resolvableValue(
    z.object({
      data_storage: z.object({
        maximum: z.number().optional(),
        minimum: z.number().optional(),
        unit: z.string(),
      }).array().optional(),
      ecpu_per_second: z.object({
        maximum: z.number().optional(),
        minimum: z.number().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  daily_snapshot_time: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
  major_engine_version: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  security_group_ids: resolvableValue(z.string().array().optional()),
  snapshot_arns_to_restore: resolvableValue(z.string().array().optional()),
  snapshot_retention_limit: resolvableValue(z.number().optional()),
  subnet_ids: resolvableValue(z.string().array().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  user_group_id: resolvableValue(z.string().optional()),
})

export const AwsElasticacheServerlessCacheOutputSchema = z.object({
  arn: z.string().optional(),
  create_time: z.string().optional(),
  endpoint: z.object({
    address: z.string(),
    port: z.number(),
  }).array().optional(),
  full_engine_version: z.string().optional(),
  id: z.string().optional(),
  major_engine_version: z.string().optional(),
  reader_endpoint: z.object({
    address: z.string(),
    port: z.number(),
  }).array().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsElasticacheServerlessCacheInputProps =
  & z.input<typeof AwsElasticacheServerlessCacheInputSchema>
  & NodeProps

export type AwsElasticacheServerlessCacheOutputProps =
  & z.output<typeof AwsElasticacheServerlessCacheOutputSchema>
  & z.output<typeof AwsElasticacheServerlessCacheInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/elasticache_serverless_cache

export function AwsElasticacheServerlessCache(
  props: Partial<AwsElasticacheServerlessCacheInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elasticache_serverless_cache'
      _category='resource'
      _title={_title}
      _inputSchema={AwsElasticacheServerlessCacheInputSchema}
      _outputSchema={AwsElasticacheServerlessCacheOutputSchema}
      {...props}
    />
  )
}

export const useAwsElasticacheServerlessCache = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsElasticacheServerlessCacheOutputProps>(
    AwsElasticacheServerlessCache,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsElasticacheServerlessCaches = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsElasticacheServerlessCacheOutputProps>(
    AwsElasticacheServerlessCache,
    idFilter,
    baseNode,
    optional,
  )
