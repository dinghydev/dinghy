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
  hours_of_operation_id: resolvableValue(z.string()),
  instance_id: resolvableValue(z.string()),
  name: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  max_contacts: resolvableValue(z.number().optional()),
  outbound_caller_config: resolvableValue(
    z.object({
      outbound_caller_id_name: z.string().optional(),
      outbound_caller_id_number_id: z.string().optional(),
      outbound_flow_id: z.string().optional(),
    }).optional(),
  ),
  quick_connect_ids: resolvableValue(z.string().array().optional()),
  region: resolvableValue(z.string().optional()),
  status: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  queue_id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/connect_queue

export function AwsConnectQueue(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_connect_queue'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsConnectQueue = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNode<OutputProps>(AwsConnectQueue, idFilter, baseNode, optional)

export const useAwsConnectQueues = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) => useTypedNodes<OutputProps>(AwsConnectQueue, idFilter, baseNode, optional)
