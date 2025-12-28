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
  name: resolvableValue(z.string()),
  role_arn: resolvableValue(z.string()),
  data_sharing_preference: resolvableValue(
    z.object({
      opt_in: z.boolean(),
    }).array().optional(),
  ),
  input: resolvableValue(
    z.object({
      kinesis_video_stream: z.object({
        arn: z.string(),
      }).array().optional(),
    }).array().optional(),
  ),
  kms_key_id: resolvableValue(z.string().optional()),
  notification_channel: resolvableValue(
    z.object({
      sns_topic_arn: z.string().optional(),
    }).array().optional(),
  ),
  output: resolvableValue(
    z.object({
      kinesis_data_stream: z.object({
        arn: z.string().optional(),
      }).array().optional(),
      s3_destination: z.object({
        bucket: z.string().optional(),
        key_prefix: z.string().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  regions_of_interest: resolvableValue(
    z.object({
      bounding_box: z.object({
        height: z.number().optional(),
        left: z.number().optional(),
        top: z.number().optional(),
        width: z.number().optional(),
      }).array().optional(),
      polygon: z.object({
        x: z.number().optional(),
        y: z.number().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  settings: resolvableValue(
    z.object({
      connected_home: z.object({
        labels: z.string().array().optional(),
        min_confidence: z.number().optional(),
      }).array().optional(),
      face_search: z.object({
        collection_id: z.string(),
        face_match_threshold: z.number().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
  stream_processor_arn: z.string().optional(),
  tags_all: z.record(z.string(), z.string()).optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/rekognition_stream_processor

export function AwsRekognitionStreamProcessor(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_rekognition_stream_processor'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsRekognitionStreamProcessor = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsRekognitionStreamProcessor,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsRekognitionStreamProcessors = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsRekognitionStreamProcessor,
    idFilter,
    baseNode,
    optional,
  )
