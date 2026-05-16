import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsBatchJobQueue } from './AwsBatchJobQueue.tsx'

export const DataAwsBatchJobQueueInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsBatchJobQueueOutputSchema = z.object({
  arn: z.string().optional(),
  compute_environment_order: z.object({
    compute_environment: z.string(),
    order: z.number(),
  }).array().optional(),
  job_state_time_limit_action: z.object({
    action: z.string(),
    max_time_seconds: z.number(),
    reason: z.string(),
    state: z.string(),
  }).array().optional(),
  priority: z.number().optional(),
  scheduling_policy_arn: z.string().optional(),
  state: z.string().optional(),
  status: z.string().optional(),
  status_reason: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsBatchJobQueueInputProps =
  & z.input<typeof DataAwsBatchJobQueueInputSchema>
  & NodeProps

export type DataAwsBatchJobQueueOutputProps =
  & z.output<typeof DataAwsBatchJobQueueOutputSchema>
  & z.output<typeof DataAwsBatchJobQueueInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/batch_job_queue

export function DataAwsBatchJobQueue(
  props: Partial<DataAwsBatchJobQueueInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsBatchJobQueue
      _type='aws_batch_job_queue'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsBatchJobQueueInputSchema}
      _outputSchema={DataAwsBatchJobQueueOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsBatchJobQueue = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsBatchJobQueueOutputProps>(
    DataAwsBatchJobQueue,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsBatchJobQueues = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsBatchJobQueueOutputProps>(
    DataAwsBatchJobQueue,
    idFilter,
    baseNode,
    optional,
  )
