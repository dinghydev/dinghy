import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/msk_cluster

export const InputSchema = z.object({
  cluster_name: resolvableValue(z.string()),
  kafka_version: resolvableValue(z.string()),
  number_of_broker_nodes: resolvableValue(z.number()),
  broker_node_group_info: resolvableValue(z.object({
    az_distribution: z.string().optional(),
    client_subnets: z.string().array(),
    instance_type: z.string(),
    security_groups: z.string().array(),
  })),
  client_authentication: resolvableValue(
    z.object({
      unauthenticated: z.boolean().optional(),
    }).optional(),
  ),
  configuration_info: resolvableValue(
    z.object({
      arn: z.string(),
      revision: z.number(),
    }).optional(),
  ),
  encryption_info: resolvableValue(
    z.object({
      encryption_at_rest_kms_key_arn: z.string().optional(),
    }).optional(),
  ),
  enhanced_monitoring: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  logging_info: resolvableValue(
    z.object({
      broker_logs: z.object({
        cloudwatch_logs: z.object({
          enabled: z.boolean(),
          log_group: z.string().optional(),
        }).optional(),
        firehose: z.object({
          delivery_stream: z.string().optional(),
          enabled: z.boolean(),
        }).optional(),
        s3: z.object({
          bucket: z.string().optional(),
          enabled: z.boolean(),
          prefix: z.string().optional(),
        }).optional(),
      }),
    }).optional(),
  ),
  open_monitoring: resolvableValue(
    z.object({
      prometheus: z.object({
        jmx_exporter: z.object({
          enabled_in_broker: z.boolean(),
        }).optional(),
        node_exporter: z.object({
          enabled_in_broker: z.boolean(),
        }).optional(),
      }),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  storage_mode: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  bootstrap_brokers: z.string().optional(),
  bootstrap_brokers_public_sasl_iam: z.string().optional(),
  bootstrap_brokers_public_sasl_scram: z.string().optional(),
  bootstrap_brokers_public_tls: z.string().optional(),
  bootstrap_brokers_sasl_iam: z.string().optional(),
  bootstrap_brokers_sasl_scram: z.string().optional(),
  bootstrap_brokers_tls: z.string().optional(),
  bootstrap_brokers_vpc_connectivity_sasl_iam: z.string().optional(),
  bootstrap_brokers_vpc_connectivity_sasl_scram: z.string().optional(),
  bootstrap_brokers_vpc_connectivity_tls: z.string().optional(),
  cluster_uuid: z.string().optional(),
  current_version: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  zookeeper_connect_string: z.string().optional(),
  zookeeper_connect_string_tls: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsMskCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_msk_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsMskCluster = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsMskCluster, node, id)

export const useAwsMskClusters = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsMskCluster, node, id)
