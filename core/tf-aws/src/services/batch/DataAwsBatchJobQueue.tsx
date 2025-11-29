import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsBatchJobQueue } from './AwsBatchJobQueue.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/batch_job_queue

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsBatchJobQueue(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsBatchJobQueue
      _type='aws_batch_job_queue'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsBatchJobQueue = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsBatchJobQueue, node, id)

export const useDataAwsBatchJobQueues = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsBatchJobQueue, node, id)
