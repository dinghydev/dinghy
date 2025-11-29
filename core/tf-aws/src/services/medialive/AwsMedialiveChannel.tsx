import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/medialive_channel

export const InputSchema = z.object({
  channel_class: resolvableValue(z.string()),
  destinations: resolvableValue(
    z.object({
      id: z.string(),
    }).array(),
  ),
  input_attachments: resolvableValue(
    z.object({
      input_attachment_name: z.string(),
      input_id: z.string(),
    }).array(),
  ),
  input_specification: resolvableValue(z.object({
    codec: z.string(),
    input_resolution: z.string(),
    maximum_bitrate: z.string(),
  })),
  name: resolvableValue(z.string()),
  cdi_input_specification: resolvableValue(
    z.object({
      resolution: z.string(),
    }).optional(),
  ),
  encoder_settings: resolvableValue(z.object({
    audio_descriptions: z.object({
      audio_selector_name: z.string(),
      audio_type: z.string().optional(),
      audio_type_control: z.string().optional(),
      language_code: z.string().optional(),
      language_code_control: z.string().optional(),
      name: z.string(),
      stream_name: z.string().optional(),
    }).array().optional(),
    avail_blanking: z.object({
      state: z.string().optional(),
    }).optional(),
    caption_descriptions: z.object({
      accessibility: z.string().optional(),
      caption_selector_name: z.string(),
      language_code: z.string().optional(),
      language_description: z.string().optional(),
      name: z.string(),
    }).optional(),
    global_configuration: z.object({
      initial_audio_gain: z.number().optional(),
      input_end_action: z.string().optional(),
      output_locking_mode: z.string().optional(),
      output_timing_source: z.string().optional(),
      support_low_framerate_inputs: z.string().optional(),
    }).optional(),
    motion_graphics_configuration: z.object({
      motion_graphics_insertion: z.string().optional(),
    }).optional(),
    nielsen_configuration: z.object({
      distributor_id: z.string().optional(),
      nielsen_pcm_to_id3_tagging: z.string().optional(),
    }).optional(),
    output_groups: z.object({
      name: z.string().optional(),
    }),
    timecode_config: z.object({
      source: z.string(),
      sync_threshold: z.number().optional(),
    }),
    video_descriptions: z.object({
      height: z.number().optional(),
      name: z.string(),
      respond_to_afd: z.string().optional(),
      scaling_behavior: z.string().optional(),
      sharpness: z.number().optional(),
      width: z.number().optional(),
    }).optional(),
  })),
  id: resolvableValue(z.string().optional()),
  log_level: resolvableValue(z.string().optional()),
  maintenance: resolvableValue(
    z.object({
      maintenance_day: z.string(),
      maintenance_start_time: z.string(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  role_arn: resolvableValue(z.string().optional()),
  start_channel: resolvableValue(z.boolean().optional()),
  tags: resolvableValue(z.record(z.string(), z.string()).optional()),
  tags_all: resolvableValue(z.record(z.string(), z.string()).optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  vpc: resolvableValue(
    z.object({
      availability_zones: z.string().array(),
      network_interface_ids: z.string().array(),
      public_address_allocation_ids: z.string().array(),
      security_group_ids: z.string().array().optional(),
      subnet_ids: z.string().array(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  arn: z.string().optional(),
  channel_id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsMedialiveChannel(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_medialive_channel'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsMedialiveChannel = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsMedialiveChannel, node, id)

export const useAwsMedialiveChannels = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsMedialiveChannel, node, id)
