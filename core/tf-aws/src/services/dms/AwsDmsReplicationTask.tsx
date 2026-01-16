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

export const OutputSchema = z.object({
  replication_task_arn: z.string().optional(),
  status: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/dms_replication_task

export function AwsDmsReplicationTask(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_dms_replication_task'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsDmsReplicationTask = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(AwsDmsReplicationTask, idFilter, baseNode, optional)

export const useAwsDmsReplicationTasks = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsDmsReplicationTask,
    idFilter,
    baseNode,
    optional,
  )
