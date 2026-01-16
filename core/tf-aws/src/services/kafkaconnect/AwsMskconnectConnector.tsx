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

export const InputSchema = TfMetaSchema.extend({
  capacity: resolvableValue(z.object({
    autoscaling: z.object({
      max_worker_count: z.number(),
      mcu_count: z.number().optional(),
      min_worker_count: z.number(),
      scale_in_policy: z.object({
        cpu_utilization_percentage: z.number().optional(),
      }).optional(),
      scale_out_policy: z.object({
        cpu_utilization_percentage: z.number().optional(),
      }).optional(),
    }).optional(),
    provisioned_capacity: z.object({
      mcu_count: z.number().optional(),
      worker_count: z.number(),
    }).optional(),
  })),
  connector_configuration: resolvableValue(z.record(z.string(), z.string())),
  kafka_cluster: resolvableValue(z.object({
    apache_kafka_cluster: z.object({
      bootstrap_servers: z.string(),
      vpc: z.object({
        security_groups: z.string().array(),
        subnets: z.string().array(),
      }),
    }),
  })),
  kafka_cluster_client_authentication: resolvableValue(z.object({
    authentication_type: z.string().optional(),
  })),
  kafka_cluster_encryption_in_transit: resolvableValue(z.object({
    encryption_type: z.string().optional(),
  })),
  kafkaconnect_version: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  plugin: resolvableValue(
    z.object({
      custom_plugin: z.object({
        arn: z.string(),
        revision: z.number(),
      }),
    }).array(),
  ),
  service_execution_role_arn: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  log_delivery: resolvableValue(
    z.object({
      worker_log_delivery: z.object({
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
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  worker_configuration: resolvableValue(
    z.object({
      arn: z.string(),
      revision: z.number(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  version: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/mskconnect_connector

export function AwsMskconnectConnector(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_mskconnect_connector'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsMskconnectConnector = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsMskconnectConnector,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMskconnectConnectors = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsMskconnectConnector,
    idFilter,
    baseNode,
    optional,
  )
