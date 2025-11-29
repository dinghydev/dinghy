import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/data-sources/polly_voices

export const InputSchema = z.object({
  engine: resolvableValue(z.string().optional()),
  include_additional_language_codes: resolvableValue(z.boolean().optional()),
  language_code: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  voices: z.object({
    additional_language_codes: z.string().array(),
    gender: z.string(),
    id: z.string(),
    language_code: z.string(),
    language_name: z.string(),
    name: z.string(),
    supported_engines: z.string().array(),
  }).optional().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function DataAwsPollyVoices(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_polly_voices'
      _category='data'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useDataAwsPollyVoicess = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(DataAwsPollyVoices, node, id)
