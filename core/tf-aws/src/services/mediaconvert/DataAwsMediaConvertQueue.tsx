import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMediaConvertQueue } from './AwsMediaConvertQueue.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/media_convert_queue

export const InputSchema = z.object({
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  name: z.string().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsMediaConvertQueue(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsMediaConvertQueue
      _type='aws_media_convert_queue'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMediaConvertQueue = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsMediaConvertQueue, node, id)

export const useDataAwsMediaConvertQueues = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsMediaConvertQueue, node, id)
