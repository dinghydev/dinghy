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

export const AwsMediaConvertQueueInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  concurrent_jobs: resolvableValue(z.number().optional()),
  description: resolvableValue(z.string().optional()),
  pricing_plan: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  reservation_plan_settings: resolvableValue(
    z.object({
      commitment: z.string(),
      renewal_type: z.string(),
      reserved_slots: z.number(),
    }).optional(),
  ),
  status: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsMediaConvertQueueOutputSchema = z.object({
  arn: z.string().optional(),
  id: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsMediaConvertQueueInputProps =
  & z.input<typeof AwsMediaConvertQueueInputSchema>
  & NodeProps

export type AwsMediaConvertQueueOutputProps =
  & z.output<typeof AwsMediaConvertQueueOutputSchema>
  & z.output<typeof AwsMediaConvertQueueInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/media_convert_queue

export function AwsMediaConvertQueue(
  props: Partial<AwsMediaConvertQueueInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_media_convert_queue'
      _category='resource'
      _title={_title}
      _inputSchema={AwsMediaConvertQueueInputSchema}
      _outputSchema={AwsMediaConvertQueueOutputSchema}
      {...props}
    />
  )
}

export const useAwsMediaConvertQueue = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsMediaConvertQueueOutputProps>(
    AwsMediaConvertQueue,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsMediaConvertQueues = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsMediaConvertQueueOutputProps>(
    AwsMediaConvertQueue,
    idFilter,
    baseNode,
    optional,
  )
