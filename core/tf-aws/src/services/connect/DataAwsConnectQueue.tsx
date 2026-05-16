import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsConnectQueue } from './AwsConnectQueue.tsx'

export const DataAwsConnectQueueInputSchema = TfMetaSchema.extend({
  instance_id: resolvableValue(z.string()),
  name: resolvableValue(z.string().optional()),
  queue_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsConnectQueueOutputSchema = z.object({
  arn: z.string().optional(),
  description: z.string().optional(),
  hours_of_operation_id: z.string().optional(),
  id: z.string().optional(),
  max_contacts: z.number().optional(),
  outbound_caller_config: z.object({
    outbound_caller_id_name: z.string(),
    outbound_caller_id_number_id: z.string(),
    outbound_flow_id: z.string(),
  }).array().optional(),
  queue_id: z.string().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsConnectQueueInputProps =
  & z.input<typeof DataAwsConnectQueueInputSchema>
  & NodeProps

export type DataAwsConnectQueueOutputProps =
  & z.output<typeof DataAwsConnectQueueOutputSchema>
  & z.output<typeof DataAwsConnectQueueInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/connect_queue

export function DataAwsConnectQueue(
  props: Partial<DataAwsConnectQueueInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsConnectQueue
      _type='aws_connect_queue'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsConnectQueueInputSchema}
      _outputSchema={DataAwsConnectQueueOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectQueue = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsConnectQueueOutputProps>(
    DataAwsConnectQueue,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsConnectQueues = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsConnectQueueOutputProps>(
    DataAwsConnectQueue,
    idFilter,
    baseNode,
    optional,
  )
