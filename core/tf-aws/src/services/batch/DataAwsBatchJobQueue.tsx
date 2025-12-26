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

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

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
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/batch_job_queue

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

export const useDataAwsBatchJobQueue = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(DataAwsBatchJobQueue, idFilter, baseNode, optional)

export const useDataAwsBatchJobQueues = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(DataAwsBatchJobQueue, idFilter, baseNode, optional)
