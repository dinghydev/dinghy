import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsDmsReplicationTask } from './AwsDmsReplicationTask.tsx'

export const InputSchema = z.object({
  replication_task_id: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  cdc_start_position: z.string().optional(),
  cdc_start_time: z.string().optional(),
  migration_type: z.string().optional(),
  replication_instance_arn: z.string().optional(),
  replication_task_arn: z.string().optional(),
  replication_task_settings: z.string().optional(),
  source_endpoint_arn: z.string().optional(),
  start_replication_task: z.boolean().optional(),
  status: z.string().optional(),
  table_mappings: z.string().optional(),
  target_endpoint_arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/dms_replication_task

export function DataAwsDmsReplicationTask(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsDmsReplicationTask
      _type='aws_dms_replication_task'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsDmsReplicationTask = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(DataAwsDmsReplicationTask, idFilter, baseNode)

export const useDataAwsDmsReplicationTasks = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNodes<OutputProps>(DataAwsDmsReplicationTask, idFilter, baseNode)
