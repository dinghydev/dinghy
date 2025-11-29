import {
  camelCaseToWords,
  type NodeProps,
  resolvableValue,
  Shape,
  useTypedNode,
  useTypedNodes,
} from '@dinghy/base-components'
import z from 'zod'

// https://registry.terraform.io/providers/hashicorp/aws/6.22.0/docs/resources/lexv2models_bot_locale

export const InputSchema = z.object({
  bot_id: resolvableValue(z.string()),
  bot_version: resolvableValue(z.string()),
  locale_id: resolvableValue(z.string()),
  n_lu_intent_confidence_threshold: resolvableValue(z.number()),
  description: resolvableValue(z.string().optional()),
  region: resolvableValue(z.string().optional()),
  timeouts: resolvableValue(
    z.object({
      create: z.string().optional(),
      delete: z.string().optional(),
      update: z.string().optional(),
    }).optional(),
  ),
  voice_settings: resolvableValue(
    z.object({
      engine: z.string().optional(),
      voice_id: z.string(),
    }).optional(),
  ),
})

export const OutputSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
})

export type InputProps =
  & z.input<typeof InputSchema>
  & NodeProps

export type OutputProps =
  & z.output<typeof OutputSchema>
  & z.output<typeof InputSchema>

export function AwsLexv2modelsBotLocale(props: Partial<InputProps>) {
  const _title = (node: any) => {
    const namedTag = camelCaseToWords(node._props._tags[0])
    return namedTag.replace(/^(Data )?Aws /, '')
  }
  return (
    <Shape
      _type='aws_lexv2models_bot_locale'
      _category='resource'
      _title={_title}
      _inputSchema={InputSchema}
      _outputSchema={OutputSchema}
      {...props}
    />
  )
}

export const useAwsLexv2modelsBotLocale = (node?: any, id?: string) =>
  useTypedNode<OutputProps>(AwsLexv2modelsBotLocale, node, id)

export const useAwsLexv2modelsBotLocales = (node?: any, id?: string) =>
  useTypedNodes<OutputProps>(AwsLexv2modelsBotLocale, node, id)
