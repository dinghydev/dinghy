import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsSqsQueue } from './AwsSqsQueue.tsx'

export const DataAwsSqsQueueInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSqsQueueOutputSchema = z.object({
  arn: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
  url: z.string().optional(),
})

export type DataAwsSqsQueueInputProps =
  & z.input<typeof DataAwsSqsQueueInputSchema>
  & NodeProps

export type DataAwsSqsQueueOutputProps =
  & z.output<typeof DataAwsSqsQueueOutputSchema>
  & z.output<typeof DataAwsSqsQueueInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/sqs_queue

export function DataAwsSqsQueue(props: Partial<DataAwsSqsQueueInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsSqsQueue
      _type='aws_sqs_queue'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSqsQueueInputSchema}
      _outputSchema={DataAwsSqsQueueOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsSqsQueue = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsSqsQueueOutputProps>(
    DataAwsSqsQueue,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsSqsQueues = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSqsQueueOutputProps>(
    DataAwsSqsQueue,
    idFilter,
    baseNode,
    optional,
  )
