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

export const InputSchema = z.object({
  instance_id: resolvableValue(z.string()),
  name: resolvableValue(z.string().optional()),
  queue_id: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
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

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/connect_queue

export function DataAwsConnectQueue(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsConnectQueue
      _type='aws_connect_queue'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsConnectQueue = (idFilter?: string, baseNode?: any) =>
  useTypedNode<OutputProps>(DataAwsConnectQueue, idFilter, baseNode)

export const useDataAwsConnectQueues = (idFilter?: string, baseNode?: any) =>
  useTypedNodes<OutputProps>(DataAwsConnectQueue, idFilter, baseNode)
