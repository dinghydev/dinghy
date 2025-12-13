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
  multiplex_id: resolvableValue(z.string()),
  program_name: resolvableValue(z.string()),
  multiplex_program_settings: resolvableValue(
    z.object({
      preferred_channel_pipeline: z.string(),
      program_number: z.number(),
      service_descriptor: z.object({
        provider_name: z.string(),
        service_name: z.string(),
      }).array().optional(),
      video_settings: z.object({
        constant_bitrate: z.number().optional(),
        statmux_settings: z.object({
          maximum_bitrate: z.number().optional(),
          minimum_bitrate: z.number().optional(),
          priority: z.number().optional(),
        }).array().optional(),
      }).array().optional(),
    }).array().optional(),
  ),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
}).extend({ ...TfMetaSchema.shape })

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>
  & NodeProps

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/medialive_multiplex_program

export function AwsMedialiveMultiplexProgram(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_medialive_multiplex_program'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsMedialiveMultiplexProgram = (
  idFilter?: string,
  baseNode?: any,
) => useTypedNode<OutputProps>(AwsMedialiveMultiplexProgram, idFilter, baseNode)

export const useAwsMedialiveMultiplexPrograms = (
  idFilter?: string,
  baseNode?: any,
) =>
  useTypedNodes<OutputProps>(AwsMedialiveMultiplexProgram, idFilter, baseNode)
