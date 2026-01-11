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
  container: resolvableValue(z.string()),
  audio: resolvableValue(
    z.object({
      audio_packing_mode: z.string().optional(),
      bit_rate: z.string().optional(),
      channels: z.string().optional(),
      codec: z.string().optional(),
      sample_rate: z.string().optional(),
    }).optional(),
  ),
  audio_codec_options: resolvableValue(
    z.object({
      bit_depth: z.string().optional(),
      bit_order: z.string().optional(),
      profile: z.string().optional(),
      signed: z.string().optional(),
    }).optional(),
  ),
  description: resolvableValue(z.string().optional()),
  id: resolvableValue(z.string().optional()),
  name: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  thumbnails: resolvableValue(
    z.object({
      aspect_ratio: z.string().optional(),
      format: z.string().optional(),
      interval: z.string().optional(),
      max_height: z.string().optional(),
      max_width: z.string().optional(),
      padding_policy: z.string().optional(),
      resolution: z.string().optional(),
      sizing_policy: z.string().optional(),
    }).optional(),
  ),
  type: resolvableValue(z.string().optional()),
  video: resolvableValue(
    z.object({
      aspect_ratio: z.string().optional(),
      bit_rate: z.string().optional(),
      codec: z.string().optional(),
      display_aspect_ratio: z.string().optional(),
      fixed_gop: z.string().optional(),
      frame_rate: z.string().optional(),
      keyframes_max_dist: z.string().optional(),
      max_frame_rate: z.string().optional(),
      max_height: z.string().optional(),
      max_width: z.string().optional(),
      padding_policy: z.string().optional(),
      resolution: z.string().optional(),
      sizing_policy: z.string().optional(),
    }).optional(),
  ),
  video_codec_options: resolvableValue(
    z.record(z.string(), z.string()).optional(),
  ),
  video_watermarks: resolvableValue(
    z.object({
      horizontal_align: z.string().optional(),
      horizontal_offset: z.string().optional(),
      id: z.string().optional(),
      max_height: z.string().optional(),
      max_width: z.string().optional(),
      opacity: z.string().optional(),
      sizing_policy: z.string().optional(),
      target: z.string().optional(),
      vertical_align: z.string().optional(),
      vertical_offset: z.string().optional(),
    }).array().optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  arn: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/elastictranscoder_preset

export function AwsElastictranscoderPreset(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?(Ephemeral )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_elastictranscoder_preset'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsElastictranscoderPreset = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNode<OutputProps>(
    AwsElastictranscoderPreset,
    idFilter,
    baseNode,
    optional,
  )

export const useAwsElastictranscoderPresets = (
  idFilter?: string,
  baseNode?: any,
  optional?: boolean,
) =>
  useTypedNodes<OutputProps>(
    AwsElastictranscoderPreset,
    idFilter,
    baseNode,
    optional,
  )
