import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/medialive_multiplex_program

export const InputSchema = z.object({
  multiplex_id: resolvableValue(z.string()),
  program_name: resolvableValue(z.string()),
  multiplex_program_settings: resolvableValue(
    z.object({
      preferred_channel_pipeline: z.string(),
      program_number: z.number(),
    }).optional(),
  ),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

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

export const useAwsMedialiveMultiplexProgram = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsMedialiveMultiplexProgram, node, id)

export const useAwsMedialiveMultiplexPrograms = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsMedialiveMultiplexProgram, node, id)
