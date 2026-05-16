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

export const AwsSqsQueueInputSchema = TfMetaSchema.extend({
  content_based_deduplication: resolvableValue(z.boolean().optional()),
  deduplication_scope: resolvableValue(z.string().optional()),
  delay_seconds: resolvableValue(z.number().optional()),
  fifo_queue: resolvableValue(z.boolean().optional()),
  fifo_throughput_limit: resolvableValue(z.string().optional()),
  kms_data_key_reuse_period_seconds: resolvableValue(z.number().optional()),
  kms_master_key_id: resolvableValue(z.string().optional()),
  max_message_size: resolvableValue(z.number().optional()),
  message_retention_seconds: resolvableValue(z.number().optional()),
  name: resolvableValue(z.string().optional()),
  name_prefix: resolvableValue(z.string().optional()),
  policy: resolvableValue(z.string().optional()),
  receive_wait_time_seconds: resolvableValue(z.number().optional()),
  redrive_allow_policy: resolvableValue(z.string().optional()),
  redrive_policy: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  sqs_managed_sse_enabled: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  visibility_timeout_seconds: resolvableValue(z.number().optional()),
})

export const AwsSqsQueueOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  url: z.string().optional(),
})

export const AwsSqsQueueImportSchema = z.object({
  url: resolvableValue(z.string()),
})

export type AwsSqsQueueInputProps =
  & z.input<typeof AwsSqsQueueInputSchema>
  & z.input<typeof AwsSqsQueueImportSchema>
  & NodeProps

export type AwsSqsQueueOutputProps =
  & z.output<typeof AwsSqsQueueOutputSchema>
  & z.output<typeof AwsSqsQueueInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/sqs_queue

export function AwsSqsQueue(props: Partial<AwsSqsQueueInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sqs_queue'
      _category='resource'
      _title={_title}
      _inputSchema={AwsSqsQueueInputSchema}
      _outputSchema={AwsSqsQueueOutputSchema}
      _importSchema={AwsSqsQueueImportSchema}
      {...props}
    />
  )
}

export const useAwsSqsQueue = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsSqsQueueOutputProps>(
    AwsSqsQueue,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsSqsQueues = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsSqsQueueOutputProps>(
    AwsSqsQueue,
    idFilter,
    baseNode,
    optional,
  )
