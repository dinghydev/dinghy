import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  TfMetaSchema,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

export const DataAwsSqsQueuesInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string().optional()),
  queue_name_prefix: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsSqsQueuesOutputSchema = z.object({
  queue_urls: z.set(z.string()).optional(),
})

export type DataAwsSqsQueuesInputProps =
  & z.input<typeof DataAwsSqsQueuesInputSchema>
  & NodeProps

export type DataAwsSqsQueuesOutputProps =
  & z.output<typeof DataAwsSqsQueuesOutputSchema>
  & z.output<typeof DataAwsSqsQueuesInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/sqs_queues

export function DataAwsSqsQueues(props: Partial<DataAwsSqsQueuesInputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_sqs_queues'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsSqsQueuesInputSchema}
      _outputSchema={DataAwsSqsQueuesOutputSchema}
      {...props}
    />
  )
}

export const useDataAwsSqsQueuess = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsSqsQueuesOutputProps>(
    DataAwsSqsQueues,
    idFilter,
    baseNode,
    optional,
  )
