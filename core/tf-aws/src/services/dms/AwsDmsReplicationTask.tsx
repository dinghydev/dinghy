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

export const AwsDmsReplicationTaskInputSchema = TfMetaSchema.extend({
  migration_type: resolvableValue(z.string()),
  replication_instance_arn: resolvableValue(z.string()),
  replication_task_id: resolvableValue(z.string()),
  source_endpoint_arn: resolvableValue(z.string()),
  table_mappings: resolvableValue(z.string()),
  target_endpoint_arn: resolvableValue(z.string()),
  cdc_start_position: resolvableValue(z.string().optional()),
  cdc_start_time: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  replication_task_settings: resolvableValue(z.string().optional()),
  resource_identifier: resolvableValue(z.string().optional()),
  start_replication_task: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsDmsReplicationTaskOutputSchema = z.object({
  replication_task_arn: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsDmsReplicationTaskInputProps =
  & z.input<typeof AwsDmsReplicationTaskInputSchema>
  & NodeProps

export type AwsDmsReplicationTaskOutputProps =
  & z.output<typeof AwsDmsReplicationTaskOutputSchema>
  & z.output<typeof AwsDmsReplicationTaskInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/dms_replication_task

export function AwsDmsReplicationTask(
  props: Partial<AwsDmsReplicationTaskInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dms_replication_task'
      _category='resource'
      _title={_title}
      _inputSchema={AwsDmsReplicationTaskInputSchema}
      _outputSchema={AwsDmsReplicationTaskOutputSchema}
      {...props}
    />
  )
}

export const useAwsDmsReplicationTask = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsDmsReplicationTaskOutputProps>(
    AwsDmsReplicationTask,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsDmsReplicationTasks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsDmsReplicationTaskOutputProps>(
    AwsDmsReplicationTask,
    idFilter,
    baseNode,
    optional,
  )
