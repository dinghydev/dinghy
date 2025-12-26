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
  job_template_data: resolvableValue(z.object({
    execution_role_arn: z.string(),
    job_tags: z.record(z.string(), z.string()).optional(),
    release_label: z.string(),
    configuration_overrides: z.object({
      application_configuration: z.object({
        classification: z.string(),
        properties: z.record(z.string(), z.string()).optional(),
        configurations: z.object({
          classification: z.string().optional(),
          properties: z.record(z.string(), z.string()).optional(),
        }).array().optional(),
      }).array().optional(),
      monitoring_configuration: z.object({
        persistent_app_ui: z.string().optional(),
        cloud_watch_monitoring_configuration: z.object({
          log_group_name: z.string(),
          log_stream_name_prefix: z.string().optional(),
        }).optional(),
        s3_monitoring_configuration: z.object({
          log_uri: z.string(),
        }).optional(),
      }).optional(),
    }).optional(),
    job_driver: z.object({
      spark_sql_job_driver: z.object({
        entry_point: z.string().optional(),
        spark_sql_parameters: z.string().optional(),
      }).optional(),
      spark_submit_job_driver: z.object({
        entry_point: z.string(),
        entry_point_arguments: z.string().array().optional(),
        spark_submit_parameters: z.string().optional(),
      }).optional(),
    }),
  })),
  name: resolvableValue(z.string()),
  kms_key_arn: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      delete: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

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

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/emrcontainers_job_template

export function AwsEmrcontainersJobTemplate(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_emrcontainers_job_template'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsEmrcontainersJobTemplate = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsEmrcontainersJobTemplate,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEmrcontainersJobTemplates = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsEmrcontainersJobTemplate,
    idFilter,
    baseNode,
    optional,
  )
