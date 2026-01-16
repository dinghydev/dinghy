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
  name: resolvableValue(z.string()),
  release_label: resolvableValue(z.string()),
  type: resolvableValue(z.string()),
  architecture: resolvableValue(z.string().optional()),
  auto_start_configuration: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
    }).optional(),
  ),
  auto_stop_configuration: resolvableValue(
    z.object({
      enabled: z.boolean().optional(),
      idle_timeout_minutes: z.number().optional(),
    }).optional(),
  ),
  image_configuration: resolvableValue(
    z.object({
      image_uri: z.string(),
    }).optional(),
  ),
  initial_capacity: resolvableValue(
    z.object({
      initial_capacity_type: z.string(),
      initial_capacity_config: z.object({
        worker_count: z.number(),
        worker_configuration: z.object({
          cpu: z.string(),
          disk: z.string().optional(),
          memory: z.string(),
        }).optional(),
      }).optional(),
    }).array().optional(),
  ),
  interactive_configuration: resolvableValue(
    z.object({
      livy_endpoint_enabled: z.boolean().optional(),
      studio_enabled: z.boolean().optional(),
    }).optional(),
  ),
  maximum_capacity: resolvableValue(
    z.object({
      cpu: z.string(),
      disk: z.string().optional(),
      memory: z.string(),
    }).optional(),
  ),
  monitoring_configuration: resolvableValue(
    z.object({
      cloudwatch_logging_configuration: z.object({
        enabled: z.boolean(),
        encryption_key_arn: z.string().optional(),
        log_group_name: z.string().optional(),
        log_stream_name_prefix: z.string().optional(),
        log_types: z.object({
          name: z.string(),
          values: z.string().array(),
        }).array().optional(),
      }).optional(),
      managed_persistence_monitoring_configuration: z.object({
        enabled: z.boolean().optional(),
        encryption_key_arn: z.string().optional(),
      }).optional(),
      prometheus_monitoring_configuration: z.object({
        remote_write_url: z.string().optional(),
      }).optional(),
      s3_monitoring_configuration: z.object({
        encryption_key_arn: z.string().optional(),
        log_uri: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  network_configuration: resolvableValue(
    z.object({
      security_group_ids: z.string().array().optional(),
      subnet_ids: z.string().array().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  runtime_configuration: resolvableValue(
    z.object({
      classification: z.string(),
      properties: z.record(z.string(), z.string()).optional(),
    }).array().optional(),
  ),
  scheduler_configuration: resolvableValue(
    z.object({
      max_concurrent_runs: z.number().optional(),
      queue_timeout_minutes: z.number().optional(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/emrserverless_application

export function AwsEmrserverlessApplication(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_emrserverless_application'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEmrserverlessApplication = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsEmrserverlessApplication,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEmrserverlessApplications = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsEmrserverlessApplication,
    idFilter,
    baseNode,
    optional,
  )
