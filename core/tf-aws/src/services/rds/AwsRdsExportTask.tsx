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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/rds_export_task

export function AwsRdsExportTask(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rds_export_task'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRdsExportTask = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(AwsRdsExportTask, idFilter, baseNode)

export const useAwsRdsExportTasks = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(AwsRdsExportTask, idFilter, baseNode)
