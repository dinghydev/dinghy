import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsKinesisStreamConsumer } from './AwsKinesisStreamConsumer.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/kinesis_stream_consumer

export const InputSchema = z.object({
  stream_arn: resolvableValue(z.string()),
  arn: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const OutputSchema = z.object({
  creation_timestamp: z.string().optional(),
  id: z.string().optional(),
  status: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsKinesisStreamConsumer(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsKinesisStreamConsumer
      _type='aws_kinesis_stream_consumer'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsKinesisStreamConsumer = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(DataAwsKinesisStreamConsumer, node, id)

export const useDataAwsKinesisStreamConsumers = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsKinesisStreamConsumer, node, id)
