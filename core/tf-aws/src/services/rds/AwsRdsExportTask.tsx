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

export const AwsRdsExportTaskInputSchema = TfMetaSchema.extend({
  export_task_identifier: resolvableValue(z.string()),
  iam_role_arn: resolvableValue(z.string()),
  kms_key_id: resolvableValue(z.string()),
  s3_bucket_name: resolvableValue(z.string()),
  source_arn: resolvableValue(z.string()),
  export_only: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  s3_prefix: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
    }).optional(),
  ),
})

export const AwsRdsExportTaskOutputSchema = z.object({
  failure_cause: z.string().optional(),
  id: z.string().optional(),
  percent_progress: z.number().optional(),
  snapshot_time: z.string().optional(),
  source_type: z.string().optional(),
  status: z.string().optional(),
  task_end_time: z.string().optional(),
  task_start_time: z.string().optional(),
  warning_message: z.string().optional(),
})

export type AwsRdsExportTaskInputProps =
  & z.input<typeof AwsRdsExportTaskInputSchema>
  & NodeProps

export type AwsRdsExportTaskOutputProps =
  & z.output<typeof AwsRdsExportTaskOutputSchema>
  & z.output<typeof AwsRdsExportTaskInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/rds_export_task

export function AwsRdsExportTask(props: Partial<AwsRdsExportTaskInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rds_export_task'
      _category='resource'
      _title={_title}
      _inputSchema={AwsRdsExportTaskInputSchema}
      _outputSchema={AwsRdsExportTaskOutputSchema}
      {...props}
    />
  )
}

export const useAwsRdsExportTask = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsRdsExportTaskOutputProps>(
    AwsRdsExportTask,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRdsExportTasks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsRdsExportTaskOutputProps>(
    AwsRdsExportTask,
    idFilter,
    baseNode,
    optional,
  )
