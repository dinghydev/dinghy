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
  destination_location_arn: resolvableValue(z.string()),
  source_location_arn: resolvableValue(z.string()),
  cloudwatch_log_group_arn: resolvableValue(z.string().optional()),
  excludes: resolvableValue(
    z.object({
      filter_type: z.string().optional(),
      value: z.string().optional(),
    }).optional(),
  ),
  includes: resolvableValue(
    z.object({
      filter_type: z.string().optional(),
      value: z.string().optional(),
    }).optional(),
  ),
  name: resolvableValue(z.string().optional()),
  options: resolvableValue(
    z.object({
      atime: z.string().optional(),
      bytes_per_second: z.number().optional(),
      gid: z.string().optional(),
      log_level: z.string().optional(),
      mtime: z.string().optional(),
      object_tags: z.string().optional(),
      overwrite_mode: z.string().optional(),
      posix_permissions: z.string().optional(),
      preserve_deleted_files: z.string().optional(),
      preserve_devices: z.string().optional(),
      security_descriptor_copy_flags: z.string().optional(),
      task_queueing: z.string().optional(),
      transfer_mode: z.string().optional(),
      uid: z.string().optional(),
      verify_mode: z.string().optional(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  schedule: resolvableValue(
    z.object({
      schedule_expression: z.string(),
    }).optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  task_mode: resolvableValue(z.string().optional()),
  task_report_config: resolvableValue(
    z.object({
      output_type: z.string().optional(),
      report_level: z.string().optional(),
      s3_object_versioning: z.string().optional(),
      report_overrides: z.object({
        deleted_override: z.string().optional(),
        skipped_override: z.string().optional(),
        transferred_override: z.string().optional(),
        verified_override: z.string().optional(),
      }).optional(),
      s3_destination: z.object({
        bucket_access_role_arn: z.string(),
        s3_bucket_arn: z.string(),
        subdirectory: z.string().optional(),
      }),
    }).optional(),
  ),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const ImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/datasync_task

export function AwsDatasyncTask(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_datasync_task'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsDatasyncTask = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsDatasyncTask, idFilter, baseNode)

export const useAwsDatasyncTasks = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsDatasyncTask, idFilter, baseNode)
