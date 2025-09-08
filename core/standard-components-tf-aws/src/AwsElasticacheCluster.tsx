import {
  IacNodeProps,
  ResolvableNumberSchema,
  ResolvableStringSchema,
} from '@dinghy/base-components'
import { aws4 } from '../../standard-components-diagrams/src/index.ts'

import { awsProps } from './index.ts'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/elasticache_cluster
export const AwsElasticacheClusterSchema = z.object({
  cluster_id: ResolvableStringSchema.optional(),
  engine: z.union([
    z.string(z.enum(['memcached', 'redis'])).optional(),
    z.function().args(z.any()).returns(z.any()),
  ]),
  node_type: ResolvableStringSchema.optional(),
  num_cache_nodes: ResolvableNumberSchema.optional(),
  port: ResolvableNumberSchema.optional(),
})

export type AwsElasticacheClusterProps =
  & z.output<
    typeof AwsElasticacheClusterSchema
  >
  & IacNodeProps

export default function AwsElasticacheCluster(
  props: AwsElasticacheClusterProps,
) {
  return (
    <aws4.ElasticacheForRedis
      {...awsProps(props, AwsElasticacheClusterSchema)}
    />
  )
}
