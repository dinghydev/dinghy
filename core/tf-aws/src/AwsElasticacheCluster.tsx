import {
  NodeProps,
  ResolvableNumberSchema,
  ResolvableStringSchema,
} from '@dinghy/base-components'
import { AmazonElasticacheForRedis } from '@dinghy/diagrams/entitiesAws18Database'

import { awsProps } from './index.ts'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/elasticache_cluster
export const AwsElasticacheClusterSchema = z.object({
  cluster_id: ResolvableStringSchema.optional(),
  engine: z.union([
    z.enum(['memcached', 'redis']).optional(),
    z.function({
      input: [z.any()],
      output: z.any(),
    }),
  ]),
  node_type: ResolvableStringSchema.optional(),
  num_cache_nodes: ResolvableNumberSchema.optional(),
  port: ResolvableNumberSchema.optional(),
})

export type AwsElasticacheClusterProps =
  & z.output<
    typeof AwsElasticacheClusterSchema
  >
  & NodeProps

export default function AwsElasticacheCluster(
  props: AwsElasticacheClusterProps,
) {
  return (
    <AmazonElasticacheForRedis
      {...awsProps(props, AwsElasticacheClusterSchema)}
    />
  )
}
