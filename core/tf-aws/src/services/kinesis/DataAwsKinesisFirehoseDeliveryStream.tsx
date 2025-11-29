import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsKinesisFirehoseDeliveryStream } from './AwsKinesisFirehoseDeliveryStream.tsx'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/kinesis_firehose_delivery_stream

export const InputSchema = z.object({
  name: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsKinesisFirehoseDeliveryStream(
  props: Partial<InputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <AwsKinesisFirehoseDeliveryStream
      _type='aws_kinesis_firehose_delivery_stream'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsKinesisFirehoseDeliveryStream = (
  node?: any,
  id?: string,
) => useTypedNode<OutputProps>(DataAwsKinesisFirehoseDeliveryStream, node, id)

export const useDataAwsKinesisFirehoseDeliveryStreams = (
  node?: any,
  id?: string,
) => useTypedNodes<OutputProps>(DataAwsKinesisFirehoseDeliveryStream, node, id)
