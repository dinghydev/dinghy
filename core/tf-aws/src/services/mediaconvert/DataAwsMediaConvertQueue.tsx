import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  TfMetaSchema,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'
import { AwsMediaConvertQueue } from './AwsMediaConvertQueue.tsx'

export const DataAwsMediaConvertQueueInputSchema = TfMetaSchema.extend({
  id: resolvableValue(z.string()),
  region: resolvableValue(z.string().optional()),
})

export const DataAwsMediaConvertQueueOutputSchema = z.object({
  arn: z.string().optional(),
  name: z.string().optional(),
  status: z.string().optional(),
  tags: z.record(z.string(), z.string()).optional(),
})

export type DataAwsMediaConvertQueueInputProps =
  & z.input<typeof DataAwsMediaConvertQueueInputSchema>
  & NodeProps

export type DataAwsMediaConvertQueueOutputProps =
  & z.output<typeof DataAwsMediaConvertQueueOutputSchema>
  & z.output<typeof DataAwsMediaConvertQueueInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/media_convert_queue

export function DataAwsMediaConvertQueue(
  props: Partial<DataAwsMediaConvertQueueInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <AwsMediaConvertQueue
      _type='aws_media_convert_queue'
      _category='data'
      _title={_title}
      _inputSchema={DataAwsMediaConvertQueueInputSchema}
      _outputSchema={DataAwsMediaConvertQueueOutputSchema}
      {...props as any}
    />
  )
}

export const useDataAwsMediaConvertQueue = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<DataAwsMediaConvertQueueOutputProps>(
    DataAwsMediaConvertQueue,
    idFilter,
    baseNode,
    optional,
  )

export const useDataAwsMediaConvertQueues = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<DataAwsMediaConvertQueueOutputProps>(
    DataAwsMediaConvertQueue,
    idFilter,
    baseNode,
    optional,
  )
