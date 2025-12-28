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
  dag_s3_path: resolvableValue(z.string()),
  execution_role_arn: resolvableValue(z.string()),
  last_updated: resolvableValue(
    z.object({
      created_at: z.string(),
      error: z.object({
        error_code: z.string(),
        error_message: z.string(),
      }).array(),
      status: z.string(),
    }).array(),
  ),
  name: resolvableValue(z.string()),
  network_configuration: resolvableValue(z.object({
    security_group_ids: z.string().array(),
    subnet_ids: z.string().array(),
  })),
  source_bucket_arn: resolvableValue(z.string()),
  airflow_configuration_options: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  airflow_version: resolvableValue(z.string().optional()),
  endpoint_management: resolvableValue(z.string().optional()),
  environment_class: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  kms_key: resolvableValue(z.string().optional()),
  logging_configuration: resolvableValue(
    z.object({
      dag_processing_logs: z.object({
        cloud_watch_log_group_arn: z.string(),
        enabled: z.boolean().optional(),
        log_level: z.string().optional(),
      }).optional(),
      scheduler_logs: z.object({
        cloud_watch_log_group_arn: z.string(),
        enabled: z.boolean().optional(),
        log_level: z.string().optional(),
      }).optional(),
      task_logs: z.object({
        cloud_watch_log_group_arn: z.string(),
        enabled: z.boolean().optional(),
        log_level: z.string().optional(),
      }).optional(),
      webserver_logs: z.object({
        cloud_watch_log_group_arn: z.string(),
        enabled: z.boolean().optional(),
        log_level: z.string().optional(),
      }).optional(),
      worker_logs: z.object({
        cloud_watch_log_group_arn: z.string(),
        enabled: z.boolean().optional(),
        log_level: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
  max_webservers: resolvableValue(z.number().optional()),
  max_workers: resolvableValue(z.number().optional()),
  min_webservers: resolvableValue(z.number().optional()),
  min_workers: resolvableValue(z.number().optional()),
  plugins_s3_object_version: resolvableValue(z.string().optional()),
  plugins_s3_path: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  requirements_s3_object_version: resolvableValue(z.string().optional()),
  requirements_s3_path: resolvableValue(z.string().optional()),
  schedulers: resolvableValue(z.number().optional()),
  startup_script_s3_object_version: resolvableValue(z.string().optional()),
  startup_script_s3_path: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  webserver_access_mode: resolvableValue(z.string().optional()),
  weekly_maintenance_window_start: resolvableValue(z.string().optional()),
  worker_replacement_strategy: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  created_at: z.string().optional(),
  database_vpc_endpoint_service: z.string().optional(),
  service_role_arn: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  webserver_url: z.string().optional(),
  webserver_vpc_endpoint_service: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/mwaa_environment

export function AwsMwaaEnvironment(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_mwaa_environment'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsMwaaEnvironment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsMwaaEnvironment, idFilter, baseNode, optional)

export const useAwsMwaaEnvironments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(AwsMwaaEnvironment, idFilter, baseNode, optional)
