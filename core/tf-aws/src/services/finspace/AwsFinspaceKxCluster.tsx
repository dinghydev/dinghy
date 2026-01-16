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
  az_mode: resolvableValue(z.string()),
  environment_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  release_label: resolvableValue(z.string()),
  status: resolvableValue(z.string()),
  status_reason: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  vpc_configuration: resolvableValue(z.object({
    ip_address_type: z.string(),
    security_group_ids: z.string().array(),
    subnet_ids: z.string().array(),
    vpc_id: z.string(),
  })),
  auto_scaling_configuration: resolvableValue(
    z.object({
      auto_scaling_metric: z.string(),
      max_node_count: z.number(),
      metric_target: z.number(),
      min_node_count: z.number(),
      scale_in_cooldown_seconds: z.number(),
      scale_out_cooldown_seconds: z.number(),
    }).optional(),
  ),
  availability_zone_id: resolvableValue(z.string().optional()),
  cache_storage_configurations: resolvableValue(
    z.object({
      size: z.number(),
      type: z.string(),
    }).array().optional(),
  ),
  capacity_configuration: resolvableValue(
    z.object({
      node_count: z.number(),
      node_type: z.string(),
    }).optional(),
  ),
  code: resolvableValue(
    z.object({
      s3_bucket: z.string(),
      s3_key: z.string(),
      s3_object_version: z.string().optional(),
    }).optional(),
  ),
  command_line_arguments: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  database: resolvableValue(
    z.object({
      changeset_id: z.string().optional(),
      database_name: z.string(),
      dataview_name: z.string().optional(),
      cache_configurations: z.object({
        cache_type: z.string(),
        db_paths: z.string().array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  description: resolvableValue(z.string().optional()),
  execution_role: resolvableValue(z.string().optional()),
  initialization_script: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  savedown_storage_configuration: resolvableValue(
    z.object({
      size: z.number().optional(),
      type: z.string().optional(),
      volume_name: z.string().optional(),
    }).optional(),
  ),
  scaling_group_configuration: resolvableValue(
    z.object({
      cpu: z.number().optional(),
      memory_limit: z.number().optional(),
      memory_reservation: z.number(),
      node_count: z.number(),
      scaling_group_name: z.string(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tickerplant_log_configuration: resolvableValue(
    z.object({
      tickerplant_log_volumes: z.string().array(),
    }).array().optional(),
  ),
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
  created_timestamp: z.string().optional(),
  id: z.string().optional(),
  last_modified_timestamp: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/finspace_kx_cluster

export function AwsFinspaceKxCluster(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_finspace_kx_cluster'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsFinspaceKxCluster = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsFinspaceKxCluster, idFilter, baseNode, optional)

export const useAwsFinspaceKxClusters = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsFinspaceKxCluster, idFilter, baseNode, optional)
