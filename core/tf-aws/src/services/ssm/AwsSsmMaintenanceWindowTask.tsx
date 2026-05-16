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

export const AwsSsmMaintenanceWindowTaskInputSchema = TfMetaSchema.extend({
  task_arn: resolvableValue(z.string()),
  task_type: resolvableValue(z.string()),
  window_id: resolvableValue(z.string()),
  cutoff_behavior: resolvableValue(z.string().optional()),
  description: resolvableValue(z.string().optional()),
  max_concurrency: resolvableValue(z.string().optional()),
  max_errors: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  priority: resolvableValue(z.number().optional()),
  region: resolvableValue(z.string().optional()),
  service_role_arn: resolvableValue(z.string().optional()),
  targets: resolvableValue(
    z.object({
      key: z.string(),
      values: z.string().array(),
    }).array().optional(),
  ),
  task_invocation_parameters: resolvableValue(
    z.object({
      automation_parameters: z.object({
        document_version: z.string().optional(),
        parameter: z.object({
          name: z.string(),
          values: z.string().array(),
        }).array().optional(),
      }).optional(),
      lambda_parameters: z.object({
        client_context: z.string().optional(),
        payload: z.string().optional(),
        qualifier: z.string().optional(),
      }).optional(),
      run_command_parameters: z.object({
        comment: z.string().optional(),
        document_hash: z.string().optional(),
        document_hash_type: z.string().optional(),
        document_version: z.string().optional(),
        output_s3_bucket: z.string().optional(),
        output_s3_key_prefix: z.string().optional(),
        service_role_arn: z.string().optional(),
        timeout_seconds: z.number().optional(),
        cloudwatch_config: z.object({
          cloudwatch_log_group_name: z.string().optional(),
          cloudwatch_output_enabled: z.boolean().optional(),
        }).optional(),
        notification_config: z.object({
          notification_arn: z.string().optional(),
          notification_events: z.string().array().optional(),
          notification_type: z.string().optional(),
        }).optional(),
        parameter: z.object({
          name: z.string(),
          values: z.string().array(),
        }).array().optional(),
      }).optional(),
      step_functions_parameters: z.object({
        input: z.string().optional(),
        name: z.string().optional(),
      }).optional(),
    }).optional(),
  ),
})

export const AwsSsmMaintenanceWindowTaskOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  window_task_id: z.string().optional(),
})

export const AwsSsmMaintenanceWindowTaskImportSchema = z.object({
  id: resolvableValue(z.string()),
  window_id: resolvableValue(z.string()),
  account_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export type AwsSsmMaintenanceWindowTaskInputProps =
  & z.input<typeof AwsSsmMaintenanceWindowTaskInputSchema>
  & z.input<typeof AwsSsmMaintenanceWindowTaskImportSchema>
  & NodeProps

export type AwsSsmMaintenanceWindowTaskOutputProps =
  & z.output<typeof AwsSsmMaintenanceWindowTaskOutputSchema>
  & z.output<typeof AwsSsmMaintenanceWindowTaskInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/ssm_maintenance_window_task

export function AwsSsmMaintenanceWindowTask(
  props: Partial<AwsSsmMaintenanceWindowTaskInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_ssm_maintenance_window_task'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSsmMaintenanceWindowTaskInputSchema}
      _outputSchema={AwsSsmMaintenanceWindowTaskOutputSchema}
      _importSchema={AwsSsmMaintenanceWindowTaskImportSchema}
      {...props}
    />
  )
}

export const useAwsSsmMaintenanceWindowTask = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSsmMaintenanceWindowTaskOutputProps>(
    AwsSsmMaintenanceWindowTask,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSsmMaintenanceWindowTasks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSsmMaintenanceWindowTaskOutputProps>(
    AwsSsmMaintenanceWindowTask,
    idFilter,
    baseNode,
    optional,
  )
