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
  broker_node_group_info: resolvableValue(z.object({
    az_distribution: z.string().optional(),
    client_subnets: z.string().array(),
    instance_type: z.string(),
    security_groups: z.string().array(),
    connectivity_info: z.object({
      public_access: z.object({
        type: z.string().optional(),
      }).optional(),
      vpc_connectivity: z.object({
        client_authentication: z.object({
          tls: z.boolean().optional(),
          sasl: z.object({
            iam: z.boolean().optional(),
            scram: z.boolean().optional(),
          }).optional(),
        }).optional(),
      }).optional(),
    }).optional(),
    storage_info: z.object({
      ebs_storage_info: z.object({
        volume_size: z.number().optional(),
        provisioned_throughput: z.object({
          enabled: z.boolean().optional(),
          volume_throughput: z.number().optional(),
        }).optional(),
      }).optional(),
    }).optional(),
  })),
  cluster_name: resolvableValue(z.string()),
  kafka_version: resolvableValue(z.string()),
  number_of_broker_nodes: resolvableValue(z.number()),
  client_authentication: resolvableValue(
    z.object({
      unauthenticated: z.boolean().optional(),
      sasl: z.object({
        iam: z.boolean().optional(),
        scram: z.boolean().optional(),
      }).optional(),
      tls: z.object({
        certificate_authority_arns: z.string().array().optional(),
      }).optional(),
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
      encryption_in_transit: z.object({
        client_broker: z.string().optional(),
        in_cluster: z.boolean().optional(),
      }).optional(),
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
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/msk_cluster

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

export const useAwsMskCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsMskCluster, idFilter, baseNode, optional)

export const useAwsMskClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsMskCluster, idFilter, baseNode, optional)
