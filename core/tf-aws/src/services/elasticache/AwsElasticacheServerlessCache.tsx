import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/elasticache_serverless_cache

export const InputSchema = z.object({
  engine: resolvableValue(z.string()),
  id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  tags_all: resolvableValue(z.record(z.string(), z.string())),
  cache_usage_limits: resolvableValue(
    z.object({
      data_storage: z.object({
        maximum: z.number().optional(),
        minimum: z.number().optional(),
        unit: z.string(),
      }).optional(),
      ecpu_per_second: z.object({
        maximum: z.number().optional(),
        minimum: z.number().optional(),
      }).optional(),
    }).optional(),
  ),
  daily_snapshot_time: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  kms_key_id: resolvableValue(z.string().optional()),
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

export const OutputSchema = z.object({
  arn: z.string().optional(),
  create_time: z.string().optional(),
  endpoint: z.object({
    address: z.string(),
    port: z.number(),
  }).array().optional(),
  full_engine_version: z.string().optional(),
  major_engine_version: z.string().optional(),
  reader_endpoint: z.object({
    address: z.string(),
    port: z.number(),
  }).array().optional(),
  status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsElasticacheServerlessCache(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elasticache_serverless_cache'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsElasticacheServerlessCache = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsElasticacheServerlessCache, node, id)

export const useAwsElasticacheServerlessCaches = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsElasticacheServerlessCache, node, id)
