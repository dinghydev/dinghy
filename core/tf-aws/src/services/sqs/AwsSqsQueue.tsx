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
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
  url: z.string().optional(),
})

export const ImportSchema = z.object({
  url: resolvableValue(z.string()),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & z.input<typeof ImportSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/sqs_queue

export function AwsSqsQueue(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sqs_queue'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      _importSchema={ImportSchema}
      {...props}
    />
  )
}

export const useAwsSqsQueue = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsSqsQueue, idFilter, baseNode, optional)

export const useAwsSqsQueues = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsSqsQueue, idFilter, baseNode, optional)
