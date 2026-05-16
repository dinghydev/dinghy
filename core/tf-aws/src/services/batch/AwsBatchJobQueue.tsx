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

export const AwsBatchJobQueueInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  priority: resolvableValue(z.number()),
  state: resolvableValue(z.string()),
  compute_environment_order: resolvableValue(
    z.object({
      compute_environment: z.string(),
      order: z.number(),
    }).array().optional(),
  ),
  job_state_time_limit_action: resolvableValue(
    z.object({
      action: z.string(),
      max_time_seconds: z.number(),
      reason: z.string(),
      state: z.string(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  scheduling_policy_arn: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
})

export const AwsBatchJobQueueOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export const AwsBatchJobQueueImportSchema = z.object({
  arn: resolvableValue(z.string()),
})

export type AwsBatchJobQueueInputProps =
  & z.input<typeof AwsBatchJobQueueInputSchema>
  & z.input<typeof AwsBatchJobQueueImportSchema>
  & NodeProps

export type AwsBatchJobQueueOutputProps =
  & z.output<typeof AwsBatchJobQueueOutputSchema>
  & z.output<typeof AwsBatchJobQueueInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/batch_job_queue

export function AwsBatchJobQueue(props: Partial<AwsBatchJobQueueInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_batch_job_queue'
      _category='resource'
      _title={_title}
      _inputSchema={AwsBatchJobQueueInputSchema}
      _outputSchema={AwsBatchJobQueueOutputSchema}
      _importSchema={AwsBatchJobQueueImportSchema}
      {...props}
    />
  )
}

export const useAwsBatchJobQueue = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsBatchJobQueueOutputProps>(
    AwsBatchJobQueue,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsBatchJobQueues = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsBatchJobQueueOutputProps>(
    AwsBatchJobQueue,
    idFilter,
    baseNode,
    optional,
  )
