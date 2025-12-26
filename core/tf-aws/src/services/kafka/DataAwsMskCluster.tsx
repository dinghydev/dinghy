import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMskCluster } from './AwsMskCluster.tsx'

export const InputSchema = z.object({
  cluster_name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
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
  broker_node_group_info: z.object({
    az_distribution: z.string(),
    client_subnets: z.set(z.string()),
    connectivity_info: z.object({
      public_access: z.object({
        type: z.string(),
      }).array(),
      vpc_connectivity: z.object({
        client_authentication: z.object({
          sasl: z.object({
            iam: z.boolean(),
            scram: z.boolean(),
          }).array(),
          tls: z.boolean(),
        }).array(),
      }).array(),
    }).array(),
    instance_type: z.string(),
    security_groups: z.set(z.string()),
    storage_info: z.object({
      ebs_storage_info: z.object({
        provisioned_throughput: z.object({
          enabled: z.boolean(),
          volume_throughput: z.number(),
        }).array(),
        volume_size: z.number(),
      }).array(),
    }).array(),
  }).array().optional(),
  cluster_uuid: z.string().optional(),
  kafka_version: z.string().optional(),
  number_of_broker_nodes: z.number().optional(),
  tags: z.record(z.string(), z.string()).optional(),
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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/msk_cluster

export function DataAwsMskCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsMskCluster
      _type='aws_msk_cluster'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMskCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(DataAwsMskCluster, idFilter, baseNode, optional)

export const useDataAwsMskClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(DataAwsMskCluster, idFilter, baseNode, optional)
