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

export const AwsEvidentlySegmentInputSchema = TfMetaSchema.extend({
  name: resolvableValue(z.string()),
  pattern: resolvableValue(z.string()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
})

export const AwsEvidentlySegmentOutputSchema = z.object({
  arn: z.string().optional(),
  created_time: z.string().optional(),
  experiment_count: z.number().optional(),
  id: z.string().optional(),
  last_updated_time: z.string().optional(),
  launch_count: z.number().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type AwsEvidentlySegmentInputProps =
  & z.input<typeof AwsEvidentlySegmentInputSchema>
  & NodeProps

export type AwsEvidentlySegmentOutputProps =
  & z.output<typeof AwsEvidentlySegmentOutputSchema>
  & z.output<typeof AwsEvidentlySegmentInputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/resources/evidently_segment

export function AwsEvidentlySegment(
  props: Partial<AwsEvidentlySegmentInputProps>,
) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_evidently_segment'
      _category='resource'
      _title={_title}
      _inputSchema={AwsEvidentlySegmentInputSchema}
      _outputSchema={AwsEvidentlySegmentOutputSchema}
      {...props}
    />
  )
}

export const useAwsEvidentlySegment = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<AwsEvidentlySegmentOutputProps>(
    AwsEvidentlySegment,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsEvidentlySegments = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<AwsEvidentlySegmentOutputProps>(
    AwsEvidentlySegment,
    idFilter,
    baseNode,
    optional,
  )
